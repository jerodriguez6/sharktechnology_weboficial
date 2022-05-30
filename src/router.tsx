import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/****site route*****/
//  Home page
const Home = lazy(() => import("./pages"));
const NotFound = lazy(() => import("./pages/404"));
const Mint = lazy(() => import("./pages/Mint"));
const Saved = lazy(() => import("./pages/Saved"));
const Privacy = lazy(() => import("./pages/Privacy"));

const loader = (
  <div
    style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div className="reverse-spinner" />
  </div>
);

const AppRouter = () => {
  return (
    <React.Fragment>
      <Suspense fallback={loader}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/mint" component={Mint} />
            <Route exact path="/saved" component={Saved} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </Suspense>
    </React.Fragment>
  );
};

export default AppRouter;
