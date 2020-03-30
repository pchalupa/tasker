import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Tasker from './screens/Tasker';
import Admin from './screens/Admin';
import { ROUTES } from './constants/routes';
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to={ROUTES.ROOT}>Úkolníček</Link>
                        </li>
                        <li>
                            <Link to={ROUTES.ADMIN}>Administrace</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path={ROUTES.ROOT}>
                        <Tasker />
                    </Route>
                    <Route path={ROUTES.ADMIN}>
                        <Admin />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
