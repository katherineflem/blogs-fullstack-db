import * as mysql from 'mysql';
import config from '../config'
//every table we have, import it into the index and export it back out
import Blogs from './queries/blogs'

//create mysql connection
export const Connection = mysql.createConnection(config.mysql)//mysql has connection function which you pass in your mysql config details

Connection.connect(err => { 
    if(err){
    console.log('connected as id' + Connection.threadId)
    } console.log(err)
});

// Connection.connect(function (err) {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }

// });


export default{
    Blogs
}