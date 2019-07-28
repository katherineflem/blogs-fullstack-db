import * as mysql from 'mysql';
import config from '../config'
import Blogs from './queries/blogs'

//create mysql connection
export const Connection = mysql.createConnection(config.mysql)//mysql has connection function which you pass in your mysql config details

Connection.connect(err => { //connect calls a callback function 
    if(err) console.log(err)
});

export default{
    Blogs
}