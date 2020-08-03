import React from "react";
import { Route } from "react-router-dom";
import { TOKEN } from "../config/constants";
import history from "services/history";

const RouterWrapper = ({
  component: Component,
  isPrivate = false,
  layout: Layout,
  ...rest
}) => {
  const token = localStorage.getItem(TOKEN) || false;

  if (!token && isPrivate) {
    history.push('/');
  }

  return (
    <>
      <Route
        {...rest}
        render={props => (
          <Layout {...props}>
            <Component {...props} />
          </Layout>
        )}
      />
    </>
  );
}

export default RouterWrapper;
