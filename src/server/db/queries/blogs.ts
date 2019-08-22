import { Query } from '../index'

//logic for GET, INSERT, DELETE, PUT functions for blogs
// create a function that returns a promise to retrieve the info from the database
//call the connection.query function which takes in a mysql query string with options and then a callback function that says
//if theres an issue, reject with an error message, if theres not an issue, resolve the promise with the results
//you'll have one of these for each request you need to make to get, post, delete and then call them within your routes


export const all = async ()=> Query('SELECT authors.name, blogs.* FROM blogs JOIN authors on blogs.authorid=authors.id')

export const one = async (id:number)=>Query('SELECT authors.name, blogs.* from blogs JOIN authors on blogs.authorid=authors.id WHERE blogs.id=?', [id])

export const post= async (authorid:number, title:string, content: string)=> Query(`INSERT INTO blogs (authorid, title, content) VALUES(?)`, [authorid, title, content])

export const edit= async (id:number, title: string, content: string)=>Query('UPDATE blogs SET title=?, content=? WHERE id=?', [id, title, content])

export const deleteblog= async(id:number)=>Query('DELETE FROM blogs WHERE id=?', [id]
    )
// export const all = async () => {
    //RETURN A PROMISE
//     return new Promise((resolve, reject) => {
//         //CALL CONNECTION QUERY FUNCTION THAT TAKES IN A STRING AND A CALLBACK
//         Connection.query("SELECT authors.name, blogs.* FROM blogs JOIN authors on blogs.authorid=authors.id", (err, results) => {
//             //if theres an error, reject with the error
//             if (err) {
//                 return reject(err);
//                 //if not, resolve with the results
//             } else {
//                 console.log(results);
//                 return resolve(results)
//             }
//         })
//     })
// }


//CALL THIS FROM ROUTES

export default {
    all,
    one,
    post,
    edit,
    deleteblog,
}