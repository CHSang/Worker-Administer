import React from "react";
import { Switch, Route } from "react-router-dom";
import WorkerAdminister from "./pages/WorkerAdminister";
import Layout from "./pages/Layout";
import CandidateAdminister from "./pages/CandidateAdminister";

const App: React.FC = (props) => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <WorkerAdminister />
        </Route>
        <Route path="/candidates">
          <CandidateAdminister />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
