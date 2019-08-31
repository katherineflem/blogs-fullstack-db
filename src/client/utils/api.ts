import * as fetch from 'isomorphic-fetch'
//GET TOKEN FROM LOCALSTORAGE
export let AccessToken: string = localStorage.getItem('token') || null

//CREATE USER OBJ
export let User: any = {
    userid: localStorage.getItem('userid') || null, //confirm this person has logged in
    role: localStorage.getItem('role') || null //if they are logged in they should have a role
};

//GENERATE AUTHORIZATION HEADER
//extending our fetch call
//uri = what endpoint are we hitting
//give method default value of GET
export const json = async <T = any>(uri: string, method: string = 'GET', body?: {}) => {
    let headers: any = {
        'Content-type': 'application/json'
    };
    if (AccessToken) {
        //crete a new key called Authorization with a value of Bearer AccessToken
        headers['Authorization'] = `Bearer ${AccessToken}`
    }
    try {
        let result = await fetch (uri, {
            method: method,//obj property method equal to arg method
            headers: headers,
            body: JSON.stringify(body)
        });
        console.log(result)
        //CONVERT JSON RES TO JS
        if (result.ok) { //if your response has a .ok prop on it,
            return <T>(await result.json())//if we get that json response,we want to do a res.json so it converts it to js
        } else {
            return false;
        }
    } catch (e) {
        console.log(e);
    }
};


//SET LOCALSTORAGE WITH YOUR TOKEN
//user obj will be given default values that we override when we are logging in
export const SetAccessToken = (token: string, user: {} = { userid: undefined, role: 'guest' }) => {
    //set these values of our user obj to localstorage
    AccessToken = token,
    User = user; //user obj

    localStorage.setItem('token', token);
    localStorage.setItem('userid', User.userid)
    localStorage.setItem('role', User.role)
}