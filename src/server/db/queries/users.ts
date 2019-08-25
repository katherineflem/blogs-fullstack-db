//need findOneByEmail and findOneById queries
import { Query } from '../index'

//if person enters an email we need to verify it and find their password

export const findOneByEmail= async (email:string)=>Query('SELECT * from authors WHERE email =? LIMIT 1', [email])

export const findOneById = async (id:number)=>Query("SELECT * from authors WHERE ID=? LIMIT 1", [id])

export const insertUser = async (name:string, email:string, password:string)=>Query('INSERT INTO authors (name, email, password) VALUES(?)', [name, email, password])




export default {
    findOneByEmail,
    findOneById,
    insertUser
}

