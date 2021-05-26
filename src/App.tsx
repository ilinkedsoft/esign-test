import React, { Suspense } from 'react';
import { store } from './store/store';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

const EsignPage = React.lazy(() => import('./pages/Esign'));
const Success = React.lazy(() => import('./pages/Success'));

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/">
                <EsignPage />
              </Route>
              <Route path="/success">
                <Success />
              </Route>
            </Switch>
          </Suspense>
        </Router>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
