const jwt=require('jsonwebtoken');
const jwtPassword="secret";
const zod=require('zod');


const emailSchema=zod.string().email();
const passwordSchema=zod.string().min(6);


function signJWT(username, password){
    const usernameResponse=emailSchema.safeParse(username);
    const passwordResponse=passwordSchema.safeParse(password);
    if(!usernameResponse.success || !passwordResponse.success){
        return null;
    }
    const signature= jwt.sign({username}, jwtPassword);
    return signature;


}

function verifyJWT(token){
    let ans = true;
    try{
        jwt.verify (token, jwtPassword);
        return true;

    }
    catch (err){
        ans = false;
        
    }
    return ans;
    
    

}

function decodeJWT(token){
    const decoded= jwt.decode(token);
    if (decoded){
        return true;
    }
    else{
        return false;
    }

}


// test
// const ans = signJWT("testexample.com", "pass");
// console.log(ans);