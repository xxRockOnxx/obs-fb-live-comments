const fetch = require("@zeit/fetch")();

export default (req, res) => {
  const accessToken = req.query.access_token;
  const appId = process.env.APP_ID;
  const appSecret = process.env.APP_SECRET;

  return fetch(
    `https://graph.facebook.com/v6.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${appId}&client_secret=${appSecret}&fb_exchange_token=${accessToken}`
  )
    .then((fetchRes) => fetchRes.json())
    .then((fetchRes) => {
      res.json({
        access_token: fetchRes.access_token,
      });
    });
};
