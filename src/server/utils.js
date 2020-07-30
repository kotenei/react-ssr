import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { matchRoutes, renderRoutes } from "react-router-config";
import configureStore from "../store";
import routes from "../routes";

export const requestHandle = async (ctx, query) => {
  const store = configureStore();
  const matchedRoutes = matchRoutes(routes, ctx.url);
  const context = { css: [] };
  const promises = [];

  matchedRoutes.forEach((matchRoute) => {
    if (matchRoute.route.loadData) {
      promises.push(matchRoute.route.loadData(store, query));
    }
  });

  await Promise.all(promises);

  ctx.body = render(ctx.url, store, routes, context);

  if (context.status === 404) {
    ctx.status = 404;
  }
};

export const render = (url, store, routes, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={url} context={context}>
        {/* {routes.map((route, index) => {
          return <Route key={index} {...route} />;
        })} */}
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  );

  const cssStr = context.css.length ? context.css.join("\n") : "";


  return `
        <html>
            <head>
                <title>React SSR</title>
                <style>${cssStr}</style>
            </head>
            <body>
                <div id="root">${content}</div>
            </body>
            <script>
              window.context={
                state:${JSON.stringify(store.getState())}
              }
            </script>
            <script src="/index.js"></script>
        </html>
        `;
};
