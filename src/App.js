import React from 'react'
import {Home, Login} from './pages'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import * as ROUTES from './constants/routes'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path={ROUTES.HOME} exact>
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    )
}

export default App