import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import StudentsScreen from './screens/StudentsScreen';
import TasksScreen from './screens/TasksScreen';
import AdminScreen from './screens/AdminScreen';
import { ROUTES } from './constants/routes';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path={ROUTES.ROOT} component={StudentsScreen} />
				<Route exact path={ROUTES.TASKS} component={TasksScreen} />
				<Route exact path={ROUTES.ADMIN} component={AdminScreen} />
				<Route path="*">
					<Redirect to={ROUTES.ROOT} />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
