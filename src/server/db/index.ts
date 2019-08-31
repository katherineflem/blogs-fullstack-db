import * as mysql from 'mysql';
import config from '../config'
//every table we have, import it into the index and export it back out
import Blogs from './queries/blogs'
import Users from './queries/users'
import Tokens from './queries/tokens'
import blogtags from './queries/blogtags'

//CONNECTING DB TO APP
//CREATING QUERY HELPER FUNCTION

//create mysql connection
export const pool = mysql.createPool(config.mysql)


//create Query helper function 
//create a function called Query that takes in two args
//define your args with ts -- first arg is a string which is the query, second is values that need to be extracted or filled in from the db (optional)
//going to return a Promise which will resolve with values or reject with a reason why
//call pool.query which is a mysql query function 
//takes in a string (the query), values(our values) and a callback function that will 
export const Query = (query: string, values?: any) => {
    return new Promise((resolve, reject) => {
        pool.query(query, [values], (err, results) => { //err and results isnt run unless called by its succeeding logic 
            if (err) {
                reject(err)
            } else {
                return resolve(results);
            }
        });
    })
}
// so you are promising that this query function is going to use mysql to query the database, extract some values and resolve with the results 


//export your queries here for use everywhere else
export default {
    Blogs,
    Users,
    Tokens,
    blogtags
}