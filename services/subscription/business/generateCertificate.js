const Subscription = require('../model/Subscription');
const error = require('../../../utils/error');
const status = require('../enum/status');
const PDFDocument = require('pdfkit');
const fs = require('fs');

module.exports = async (user, subscriptionId) => {
    const subscription = await Subscription.findOne(
        {
            _id: subscriptionId,
            user: user._id,
            presence: true,
            active: true
        },
        {
            active:0,
            __v:0
        })
        .populate({
            path:'visit',
            populate:['company','user']
        });
    const pdf = await generatePDF(user,subscription);
    return pdf;
};

function generatePDF(user,subscription){
    const visit = subscription.visit;
    const company = visit.company;
    const doc = new PDFDocument();
    const visitDate = new Date(visit.date);
    let visitDateFormatted = visitDate.getDate()+1;
    visitDateFormatted += '/'+(visitDate.getMonth()+1);
    visitDateFormatted += '/'+visitDate.getFullYear();

    let body = "";
    body+= `   ${user.name} participou da visita técnica na empresa ${company.name}, `;
    body+= `localizada na cidade de ${company.city} - ${company.state}, na data de ${visitDateFormatted}, `;
    body+= `totalizando a carga horária de 8 horas.`

    doc.fontSize(20);
    doc.text("Certificado", {align: 'center'});
    doc.fontSize(14);
    doc.text("Participação em Visita Técnica", {align: 'center'});
    doc.moveDown();
    doc.fontSize(12);
    doc.text(body,{align: 'justify'});
    doc.moveDown();

    doc.text(`Código de verificação: ${subscription.id}`,{align: 'left'});
    doc.moveDown();
    doc.moveDown();

    const today = new Date();
    const locationText = `Coxim - MS, ${(today.getDate()+1)} de ${today.getMonth()} de ${today.getFullYear()}.`
    doc.text(locationText,{align: 'right'});
    doc.moveDown();
    doc.moveDown();
    const signatureText = `Prof. ${visit.user.name} - Responsável pela visita`
    doc.text(signatureText,{align: 'center'});
    return doc;
}
