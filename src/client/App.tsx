import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './scss/app';
import Blogs from './components/blogs'
import Header from './components/Header'
import Details from './components/Details'
import AddBlog from './components/AddBlog'
import Editblog from './components/Editblog';

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
                </Switch>
            </main>
        </Router>
    )
}

interface IAppProps {

}

export default App

