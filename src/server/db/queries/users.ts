//need findOneByEmail and findOneById queries
import { Query } from '../index'

//if person enters an email we need to verify it and find their password

export const findOneByEmail= async (email:string)=>Query('SELECT * from authors WHERE email =? LIMIT 1', [email])

export const findOneById = async (id:number)=>Query("SELECT * from authors WHERE ID=? LIMIT 1", [id])

export const insertUser = async (user: any)=>Query("INSERT INTO authors (email, name, password) VALUES ?", user)

// export const findOneByEmail = async (email: string) => {
//     return new Promise((resolve, reject) => {
//         Connection.query(`SELECT * from authors WHERE email = '${email}' LIMIT 1`, (err, results) => {
//             if (err) {
//                 return reject(err);
//             } else {
//                 return resolve(results)
//             }
//         })
//     })
// }
// //
// export const findOneById = async (id: number) => {
//     return new Promise((resolve, reject) => {
//         Connection.query(`SELECT * from authors WHERE ID= ${id} LIMIT 1`, (err, results) => {
//             if (err) {
//                 return reject(err)
//             } else {
//                 return resolve(results)
//             }
//         })
//     })
// }
//user is an object? where is this obj defined?
// export const insert = async (user: any) => {
//     return new Promise((resolve, reject) => {
//         Connection.query(`INSERT INTO authors (email, name, password) VALUES ?`, user, (err, results)  => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(results)
//             }
//         })
//     })
// }

export default {
    findOneByEmail,
    findOneById,
    insertUser
}

