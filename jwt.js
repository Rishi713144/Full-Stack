const jwt = require('jsonwebtoken');


//decode, verify , generate

const value={
    name: "rishi",
    accountNumber: 123456

}


//jwt

const token= jwt.sign(value, "secret");
console.log(token);


// the token has been generated using the secret key, and hence this token can only be verified using this secret 
//this is my passbook 

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicmlzaGkiLCJhY2NvdW50TnVtYmVyIjoxMjM0NTYsImlhdCI6MTc2MTg0MjA4NH0.MeFSpuAqBBmnYEQoRT5l_KbcSkfr3QAfFp2KbfeKmAg
