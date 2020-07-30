import Koa from "koa";
import static_ from "koa-static";
import Router from "koa-router";
import proxy from "koa-server-http-proxy";
import { requestHandle } from "./utils";

const server = new Koa();
const router = new Router();

server.use(static_("./src/public"));

// server.use(
//   proxy("/api", {
//     target: "http://api.tvmaze.com",
//     pathRewrite: { '^/api': '' },
//     changeOrigin: true
//   })
// );

router.get("/detail/:id", async ctx => {
  await requestHandle(ctx, ctx.params);
});

router.get("*", async ctx => {
  await requestHandle(ctx);
});

server.use(router.routes());

server.listen(8088);
