import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './scss/app';
import Blogs from './components/viewonly/Blogs'
import Header from './components/Header'
import Details from './components/viewonly/Details'
import AddBlog from './components/adminonly/AddBlog'
import Editblog from './components/adminonly/Editblog';
import Login from './components/adminonly/Login'
import Register from './components/adminonly/Register'

//REact Stateless Functional Component
const App: React.SFC<IAppProps> = props => {
    return (
        <Router>
            <main className="container-fluid">
                <Header />
                <Switch>
                    <Route exact path="/" component={Blogs} />
                    <Route exact path='/:id/details' component={Details}/>
                    <Route exact path='/createblog' component={AddBlog}/>
                    <Route exact path='/:id/editblog'component={Editblog}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/register' component={Register}/>
                </Switch>
            </main>
        </Router>
    )
}

interface IAppProps {

}

export default App

