import React, { lazy, Suspense } from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";
import Loading from "../components/Animation/Loading";

const Posts = lazy(() => import("pages/Posts"));
const DashboardLayout = lazy(() => import("../layouts/DashboardLayout"));
const Home = lazy(() => import("../pages/Home"));
const CreateRoute = lazy(() => import("../pages/CreateRoute"));
const Roteiro = lazy(() => import("../pages/Roteiro"));
const RegisterRoteiro = lazy(() => import("../pages/FilterRoteiro"));
const RoteirosAdd = lazy(() => import("../pages/RoteirosAdd"));
const Validated = lazy(() => import("../pages/Validated"));
const NotFound = lazy(() => import("../pages/NotFound"));
const PlaceDetails = lazy(() => import("../pages/PlaceDetails"));
const Lugares = lazy(() => import("../pages/Lugares"));

const Routes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/" exact component={Home} layout={DashboardLayout} />
        <Route
          path="/rotas"
          exact
          isPrivate
          component={CreateRoute}
          layout={DashboardLayout}
        />

        <Route path="/posts" exact component={Posts} layout={DashboardLayout} />

        <Route
          path="/lugares"
          exact
          component={Lugares}
          layout={DashboardLayout}
        />

        <Route
          path="/rotas/register"
          exact
          isPrivate
          component={RegisterRoteiro}
          layout={DashboardLayout}
        />

        <Route
          path="/rotas/roteiro/:id"
          exact
          isPrivate
          component={Roteiro}
          layout={DashboardLayout}
        />

        <Route
          path="/rotas/register/roteiro/:id"
          exact
          isPrivate
          component={RoteirosAdd}
          layout={DashboardLayout}
        />

        <Route
          path="/lugar/detalhes/:id"
          exact
          component={PlaceDetails}
          layout={DashboardLayout}
        />

        <Route
          path="/validated"
          exact
          component={Validated}
          layout={DashboardLayout}
        />

        {/* <Route
          path="/sistema"
          component={Dashboard}
          isPrivate
          layout={DashboardLayout}
        /> */}
        <Route component={NotFound} layout={DashboardLayout} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
