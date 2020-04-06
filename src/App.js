import React from 'react';
import { 
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import Main from './pages/Main';
import Splash from './pages/Splash';
import Slider from './pages/Slider';
import NoMatch from './pages/NoMatch';
import styled from 'styled-components';

const App = () => {
  return (
    <Router>
      <Wrap>
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route exact path="/work/:id" component={Slider} />
          <Route path="/grid" component={Main} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </Wrap>
    </Router>
  );
}

const Wrap = styled.div`
  min-height: 100vh;
`;

export default App;