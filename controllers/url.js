const shortid = require("shortid");
const URL = require("../models/url");

async function handleGenerateNewShortUrl(req, res) {
  const urlVal = req.body;
  if (!urlVal.url) return res.status(400).json({ error: "Url is required" });
  const shortID = shortid();

  await URL.create({
    shortId: shortID,
    redirectURL: urlVal.url,
    vistHistory: [],
    createdBy: req.user._id,
  });

  return res.render("home", {
    id: shortID,
  });
  // return res.json({ id: shortID });
}

async function hanldeShowRedirectUrl(req, res) {
  const shortId = req.params.shortId;

  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        vistHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );

  res.redirect(entry.redirectURL);
}

async function handleShowAnalytics(req, res) {
  const shortId = req.params.shortid;

  const result = await URL.findOne({ shortId });
  if (result) {
    res.status(200).json({
      totalClicks: result.vistHistory.length,
      vistHistory: result.vistHistory,
    });
  } else {
    res.status(404).json({ error: "Invalid short url" });
  }
}

module.exports = {
  handleGenerateNewShortUrl,
  hanldeShowRedirectUrl,
  handleShowAnalytics,
};
