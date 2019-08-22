import * as mysql from 'mysql';
import config from '../config'
//every table we have, import it into the index and export it back out
import Blogs from './queries/blogs'
import Tags from './queries/tags'
import Users from './queries/users'
import Tokens from './queries/tokens'

//create mysql connection


export const pool = mysql.createPool(config.mysql)


//create Query helper function 
export const Query = (query:string, values?: any)=>{
    return new Promise ((resolve, reject)=>{
        pool.query(query, [values], (err,results)=>{
            if(err) reject(err);
            return resolve (results);
        });
    })
}

// export const Connection = mysql.createConnection(config.mysql)//mysql has connection function which you pass in your mysql config details

// Connection.connect(err => { 
//     if(err){
//     console.log('connected as id' + Connection.threadId)
//     } console.log(err)
// });


//export your queries here for use everywhere else
export default{
    Blogs,
    Tags,
    Users,
    Tokens
}