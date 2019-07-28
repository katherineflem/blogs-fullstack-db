import { Connection } from '../index'

//logic for GET, INSERT, DELETE, PUT functions for blogs

//GET ALL BLOG POSTS FUNCTION
export const all = async () => {
    //RETURN A PROMISE
    return new Promise((resolve, reject) => {
        //CALL CONNECTION QUERY FUNCTION THAT TAKES IN A STRING AND A CALLBACK
        Connection.query("SELECT * FROM blogs", (err, results) => {
            //if theres an error, reject with the error
            if (err) {
                return reject(err);
                //if not, resolve with the results
            } else {
                console.log(results);
                return resolve(results)
            }
        })
    })
}
//CALL THIS FROM ROUTES

export default {
    all
}