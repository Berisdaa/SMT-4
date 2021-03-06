import React from 'react';
import Content from './Content';
import { Switch, Route, useRouteMatch } from 'react-router-dom';


const Main = () => {

    const { path } = useRouteMatch();

    return (
        <div>
            <Switch>
                <Route path={`${path}/:isi`}>
                    <Content />
                </Route>
            </Switch>
        </div>
    );
}

export default Main;
