import * as express from 'express';
import * as morgan from 'morgan';
import * as path from 'path'
import * as passport from 'passport'
import routes from './routes'
import './middleware/localstrategy' //knows to use this strategy
import './middleware/bearerstrategy'

// import routes from './routes'

const app = express();

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());
app.use(passport.initialize())
app.use(routes);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

// if there is a port defined for us, use that, if not default to localhost3000
//if this server deploys to somewhere else, then you can be provided with a port by that server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
