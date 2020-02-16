import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import React from 'react';

import Homepage from './view/Homepage';

const RouteFallback = (props) => { 
    console.log('route fallback with location: ', props.location); 
    return <Redirect to={{
      pathname: '/',
      from: props.location
    }} /> 
}

export default class App extends React.Component {

    render() {
      return (
        <BrowserRouter>
          <Switch>
              {routes.map((route,i) => {
                const{ path, exact, routes } = route;
                return (
                  <Route 
                  key={i}
                  path={path} 
                  exact={exact} 
                  render={(routeProps) => (
                    <route.component routes={routes} {...routeProps}
                    />
                  )} />
                )
              })}
          </Switch>
        </BrowserRouter>
      );
    }
}

//之後可以分開來寫
const routes = [
    {
        path: '/',
        component: Homepage,
        exact: true,
        breadcrumbName: ''
    },
    {
        path: '/',
        component: RouteFallback,
        exact: false,
        breadcrumbName: 'Index'
    }
];

 