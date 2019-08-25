import { Query } from '../index'

//logic for GET, INSERT, DELETE, PUT functions for blogs
//you'll have one of these for each request you need to make to get, post, delete and then call them within your routes


export const all = async ()=> Query('SELECT authors.name, blogs.* FROM blogs JOIN authors on blogs.authorid=authors.id')

export const one = async (id:number)=>Query('SELECT authors.name, blogs.* from blogs JOIN authors on blogs.authorid=authors.id WHERE blogs.id=?', [id])

export const post= async (authorid:number, title:string, content: string)=> Query(`INSERT INTO blogs (authorid, title, content) VALUES(?)`, [authorid, title, content])

export const edit= async (id:number, title: string, content: string)=>Query(`UPDATE blogs SET title=?, content='${content}' WHERE id=${id}`, [title])

export const deleteblog= async(id:number)=>Query('DELETE FROM blogs WHERE id=?', [id]
    )



//CALL THIS FROM ROUTES

export default {
    all,
    one,
    post,
    edit,
    deleteblog,
}