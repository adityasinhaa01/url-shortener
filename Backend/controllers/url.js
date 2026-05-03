const shortid = require('shortid');
const URL = require('../models/schema');

async function generateShortURL(req, res){
  const body = req.body;
  if(!body.url) return res.status(404).json({status: 'error', message: 'a valid URL is required'});
  const shortID = shortid(8);
  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });
  return res.json({id: shortID});
}

module.exports = generateShortURL;