import React from "react";
import { Route, Routes } from "react-router";
import { PrivatePageHOC } from "./PrivatePageHOC";
import { RoutingConfig } from "./RoutingConfig";

export const AppRouter = () => {
  return (
    <Routes>
      {RoutingConfig.map((el, i) => {
        if (el.private) {
          return (
            <Route
              key={i}
              path={el.path}
              element={<PrivatePageHOC>{el.element()}</PrivatePageHOC>}
            />
          );
        }
        return <Route key={i} path={el.path} element={el.element()} />;
      })}
    </Routes>
  );
};
