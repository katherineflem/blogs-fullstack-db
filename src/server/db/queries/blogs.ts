import { Connection } from '../index'

//logic for GET, INSERT, DELETE, PUT functions for blogs

//GET ALL BLOG POSTS FUNCTION
export const all = async () => {
    //RETURN A PROMISE
    return new Promise((resolve, reject) => {
        //CALL CONNECTION QUERY FUNCTION THAT TAKES IN A STRING AND A CALLBACK
        Connection.query("SELECT authors.name, blogs.* FROM blogs JOIN authors on blogs.authorid=authors.id", (err, results) => {
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
//GET ONE BLOG POST
export const one = async (id: number) => {
    return new Promise((resolve, reject) => {
        Connection.query(`SELECT authors.name, blogs.* from blogs JOIN authors on blogs.authorid=authors.id WHERE blogs.id=${id}`, (err, results) => {
            if (err) {
                return reject(err);
            } else {
                return resolve(results)
            }
        })
    })
}
//POST A BLOG POST
export const post = async (authorid: number, title: string, content: string) => {
    return new Promise((resolve, reject) => {
        Connection.query(`INSERT INTO blogs (authorid, title, content) VALUES (${authorid}, '${title}', '${content}')`, (err, results) => {
            if (err) {
                return reject(err)
            } else {
                return resolve(results)
            }
        })
    })
}

// EDIT BLOG POST
export const edit = async (id: number, title: string, content: string) => {
    return new Promise((resolve, reject) => {
        Connection.query(`UPDATE blogs SET title="${title}", content="${content}" WHERE id=${id}`, (err, results) => {
            if (err) {
                return reject(err)
            } else {
                return resolve(results)
            }
        })
    })
}

// DELETE BLOG POST
export const deleteblog = async (id: number) => {
    return new Promise((resolve, reject) => {
        Connection.query(`DELETE FROM blogs WHERE id=${id}`, (err, results) => {
            if (err) {
                return reject(err)
            } else {
                return resolve(results)
            }
        })
    })
}



//CALL THIS FROM ROUTES

export default {
    all,
    one,
    post,
    edit,
    deleteblog,
}