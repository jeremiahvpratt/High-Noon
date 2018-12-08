import Home from './home';
import QuestionPage from './questions/questionPage';
import ResponsePage from './responses/responsePage';

import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

const Routes = () => (
  <Router>
    <div>
      <Route exact path={"/"} component={() => <Home />}/>
      <Route exact path={"/do/"} component={() => <QuestionPage />}/>
      <Route exact path={"/look/"} component={() => <ResponsePage />}/>
    </div>
  </Router>
);

export default Routes;
