import React from 'react'
import Home from './pages/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import * as ROUTES from './constants/routes'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path={ROUTES.HOME} exact>
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default App