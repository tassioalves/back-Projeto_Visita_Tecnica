const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: 'ifms.tsi.visitatecnica@gmail.com',
    pass: 'cgnk53267'
  },
  tls: { rejectUnauthorized: false }
});

// const mailOptions = {
//   from: 'ifms.tsi.visitatecnica@gmail.com',
//   to: 'viniciusalves.tva@gmail.com',
//   subject: 'OLA MUNDO' || 'UEUHEUUE ',
//   html: '<h1>Título</h1><p>Texto!</p></br><button><a href="www.google.com">Click aqui</a></button>'
// }

// transporter.sendMail(mailOptions)
// .then((r)=>{
//   console.log('deu certo' + r);
// })
// .catch((e)=>{
//   console.log('deu errado' + e)
// });

// export default {
//   sendEmail: (email) => {
//     const mailOptions = {
//       from: 'ifms.tsi.visitatecnica@gmail.com',
//       to: email,
//       subject: 'OLA MUNDO' || 'UEUHEUUE ',
//       html: '<h1>Título</h1><p>Texto!</p></br><button><a href="www.google.com">Click aqui</a></button>'
//     }
//     return transporter.sendMail(mailOptions);
//   }
// }

module.exports = async (email) => {
  const mailOptions = {
    from: 'ifms.tsi.visitatecnica@gmail.com',
    to: email,
    subject: 'Confirmação de Cadastro Visita Técnica' || 'UEUHEUUE ',
    html: '<h1>Confirmar seu Cadastro</h1><p>Para confirmar seu cadastro'+
    'click no link abaixo!!</p></br><button><a href="http://localhost:6000/confirmation/email/' + email + '">Click aqui'+
    '</a></button>'
  }
  return await transporter.sendMail(mailOptions);
};

