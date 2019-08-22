import * as bcrypt from 'bcrypt'

//SERVER CREATES A HASHED PASSWORD

//use bscrypt to generate hashed and salted passwords
export const HashPassword = (password:string)=>{
    const salt= bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt);
    return hash;
};

//SERVER COMPARES STRING PW TO HASHED PW 

//use bcrypt to compare a password to a hash
//take a plain text pw someone tries to login with, and a hash stored in our db and can they compare as true or false
export const ComparePassword= (password:string, hash:string)=>{
    return bcrypt.compareSync(password, hash);//should return a boolean of either true or false
};