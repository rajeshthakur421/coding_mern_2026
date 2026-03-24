1;//

import React from 'react';

const LazyComponent = () => {
  return (
    <div>
      <h2>This is a lazy-loaded component!</h2>
    </div>
  );
};

export default LazyComponent;


2;//
import React, { Suspense, lazy } from 'react';

// Use React.lazy to dynamically import the component
const LazyComponent = lazy(() => import('./LazyComponent'));

const MainComponent = () => {
  return (
    <div>
      <h1>Main Component</h1>
      {/* Use Suspense to wrap the lazy-loaded component */}
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default MainComponent;


3;//
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
