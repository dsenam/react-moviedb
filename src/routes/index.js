import React from 'react';
import {Switch, Route} from 'react-router-dom'
import FavoriteMovie from '../pages/FavoriteMovie';
import Main from '../pages/Main';

function Routes() {
  return (
    <Switch>
        <Route exact path = "/" component={Main} />
        <Route exact path = "/favorite" component={FavoriteMovie} />
    </Switch>
    )
}

export default Routes;