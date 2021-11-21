import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "react-image-lightbox/style.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/styles/Style.scss";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/remixicon/remixicon.css";
import Loader from "./components/shared/Loader";
import Layout from "./Layout";
import NotFound from "./pages/NotFound";
import reportWebVitals from "./reportWebVitals";
import routes from "./routes";

const App = (
  <BrowserRouter>
    <Suspense fallback={<Loader fullScreen />}>
      <Switch>
        {routes.map((prop, key) => {
          const Component = prop.component;
          return (
            <Route
              path={prop.path}
              render={() => (
                <Layout>
                  <Component />
                </Layout>
              )}
              key={key}
              exact
            />
          );
        })}
        <Route
          render={() => (
            <Layout>
              <NotFound />
            </Layout>
          )}
        />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

const rootElement = document.getElementById("root");
const render = rootElement.hasChildNodes() ? ReactDOM.hydrate : ReactDOM.render;
render(<React.StrictMode>{App}</React.StrictMode>, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
