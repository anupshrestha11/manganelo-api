const express = require("express");
const { getMangaInfo, getHotMange } = require("./manganelo");

const e = express();

// const Router = express.Router();

// ! express port listen
e.listen("8080", () => {
  console.log("Service started at port 8080");
});

// ! routes
e.route("/").get(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  let orderBy = req.query.orderby || "LATEST";
  res.json(await getHotMange(page, orderBy));
});

e.get("/manga/:id", async (req, res) => {
  res.json(await getMangaInfo(req.params.id));
});

e.route("/manga").get(async (req, res) => {
  res.status(406).json({ error: "manga id pathvariable not found" });
});
