## Criar novo usuário
    POST http://localhost:6000/user
    Accept: */*
    Cache-Control: no-cache
    Content-Type: application/json
    
        {
          "name":"Tassio Alves",
          "email": "Tassio@gmail.com",
          "password": "123456788",
          "number": 12
        }
Response code: 200 (OK);

## Autenticar

    POST http://localhost:5000/user/authenticate
    Accept: */*
    Cache-Control: no-cache
    Content-Type: application/json
    
    {
	    "email": "manoel.vaz@gmail.com",
        "password": "123456"
    }
Resposta:

    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWU4Mzk4NmI0ZjdjNGQxYzJjZDIyOWJhIn0sImlhdCI6MTU4NTg1NTE2OH0.JCq5LHXByKycjqLLn6RmbdmVTGu3084JzJKgf6xE1zM",
      "user": {
        "nome": "Manoel Vaz",
        "email": "manoel.vaz@gmail.com",
        "role": "ADMINISTRATOR"
      }
    }
Response code: 200 (OK);


