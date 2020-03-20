import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Template from "../components/login/Template";
import Home from '../components/home/Home'
import Profile from "../components/profile/Profile"
import PrivateRoutes from "./private_routes";
import PublicRoutes from "./public_routes";
export default function index() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoutes exact path="/" component={Template} />
        <PrivateRoutes path="/home-page" component={Home} />
        <PrivateRoutes path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}