import React from "react";
import Home from "../pages/home";
import Detail from "../pages/detail";
import NotFound from "../pages/notFound";

export default [
  {
    path: "/",
    exact: true,
    component: Home,
    loadData: Home.loadData
  },
  {
    path: "/Detail/:id",
    exact: true,
    component: Detail,
    loadData: Detail.loadData
  },
  {
    path:"*",
    component: NotFound
  }
];
