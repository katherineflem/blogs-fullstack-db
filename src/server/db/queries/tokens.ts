import { Query } from '../index'

//fineOne using id AND token
//want to find that token associated with that user in that row in the table
//double WHERE clause

export const findOneToken = async(id:number, token:string)=>Query("SELECT * from tokens WHERE id=? AND token=?", [id, token])

export const insertToken = async (userid:number)=>Query("INSERT INTO tokens (userid) VALUES(?)", [userid])

export const updateRow = async (id:number, token:string)=>Query("UPDATE tokens SET token =? WHERE id=?", [id, token])

//insert tokens
//when we insert these tokens we are inserting a value into the tokens table wit the user who is trying to login
//we are going to take that userid and convert it to an assigned token 
//update tokens

export default{
    findOneToken,
    insertToken,
    updateRow

}



// const findOne = async (id: number, token: string) => {
//     new Promise((resolve, reject) => {
//         Connection.query(`SELECT * from tokens WHERE id=${id} AND token='${token}'`, (err, results) => {
//             if (err) {
//                 return reject(err)
//             } else {
//                 return resolve(results)
//             }
//         })
//     })
// }