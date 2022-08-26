import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Label, Button } from '@monorepo/ui-components';

const App = () => {
  return (
    <Router>
      <div>
        <div><Label>Label</Label></div>
        <div><Button>Button</Button></div>
      </div>
    </Router>
  );
};

export default App;
