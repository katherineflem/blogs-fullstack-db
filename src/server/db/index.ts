import * as mysql from 'mysql';
import config from '../config'
//every table we have, import it into the index and export it back out
import Blogs from './queries/blogs'
import Tags from './queries/tags'

//create mysql connection
export const Connection = mysql.createConnection(config.mysql)//mysql has connection function which you pass in your mysql config details

Connection.connect(err => { 
    if(err){
    console.log('connected as id' + Connection.threadId)
    } console.log(err)
});




export default{
    Blogs,
    Tags
}