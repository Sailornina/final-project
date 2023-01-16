import Cache from "node-cache";

const imageCache = new Cache({ stdTTL: 60 * 5 });

const imageCacheMiddleware = (req, res, next) => {
  try {
    if (imageCache.has("image-list")) {
      return res.send(imageCache.get("image-list")).status(200);
    }
    return next();
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default { imageCacheMiddleware, imageCache };