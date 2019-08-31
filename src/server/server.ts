import * as express from 'express';
import * as morgan from 'morgan';
import * as path from 'path'
import * as passport from 'passport'
import routes from './routes'
import './middleware/localstrategy' //knows to use this strategy
import './middleware/bearerstrategy'

// import routes from './routes'

const app = express();// starts up express which is a framework that allows java on the backend, uses async and callbacks

//MIDDLEWARES TO USE
app.use(express.static('public'));// will serve up the html file in public
app.use(morgan('dev'));//middleware that shows you your request status's in the console as they happen
app.use(express.json());//so we can read your requests on a req.body (for post requests)
app.use(passport.initialize())//starts using passport for authentication
app.use(routes);//starts using your routes 


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
}) //get all and if it fails send the html file

// if there is a port defined for us, use that, if not default to localhost3000
//if this server deploys to somewhere else, then you can be provided with a port by that server
const port = process.env.PORT || 3000;
//returns the server 
app.listen(port, () => console.log(`Server listening on port: ${port}`));



