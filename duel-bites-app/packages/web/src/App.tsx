import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Lobby from './components/Lobby';
import CharacterSelect from './components/CharacterSelect';
import Battle from './components/Battle';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Lobby} />
        <Route path="/select" component={CharacterSelect} />
        <Route path="/battle" component={Battle} />
      </Switch>
    </Router>
  );
};

export default App;