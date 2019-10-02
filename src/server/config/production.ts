export default {
    //for heroku not npm run dev
    mysql:{
        connectionLimit: 10,
        host: process.env.DB_HOST,
        // port: process.env.DB_PORT,
        user: process.env.DB_USER,
        database: process.env.DB_SCHEMA,
        password: process.env.DB_PASS
    
    },
    auth:{
        secret: process.env.SECRET
    }
}

//mysql://USER--b15c6475d94c9c:PW--f2a4e88d@HOST--us-cdbr-iron-east-05.cleardb.net/SCHEMA--heroku_335254f488cc23d?reconnect=true