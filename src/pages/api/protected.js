import { hasTokenMiddleware } from "../../server/utils/checkUser";
import handler from "../../server/utils/handler";

handler.use(hasTokenMiddleware).get(protectedAPI);

async function protectedAPI(req, res, next) {
  res.status(200).send("Success!");
}

export default handler;
