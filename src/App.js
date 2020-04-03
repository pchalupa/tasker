import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Students from './screens/StudentsScreen';
import Tasks from './screens/TasksScreen';
import Admin from './screens/Admin';
import { ROUTES } from './constants/routes';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={ROUTES.STUDENTS} component={Students} />
                <Route exact path={ROUTES.TASKS} component={Tasks} />
                <Route path={ROUTES.ADMIN} component={Admin} />
            </Switch>
        </Router>
    );
}

export default App;
