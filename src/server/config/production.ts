export default {
    //for heroku not npm run dev
    mysql:{
        host: process.env.DB_SCHEMA,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        database: process.env.DB_HOST,
        password: process.env.DB_PASS
    
    },
    auth:{
        secret: process.env.SECRET
    }
}
