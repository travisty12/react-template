import React from 'react';
import Content from './Content';
import Header from './Header';
import Highlights from './Highlights';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Content} />
        <Route path='/newpath' component={Highlights} />
        <Route component={Error404} />
      </Switch>
      <style global jsx>{`
        * {
          padding: 0;
          margin: 0;
        }
      `}</style>

    </div>
  );
}

export default App;
