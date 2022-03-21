const homeRoute = require("./homeRoute");
const usersRoute = require("./usersRoute");

/* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express", name: "Tu" });
// });

function route(app) {
  app.use("/", homeRoute);
  app.use("/users", usersRoute);
}

module.exports = route;
