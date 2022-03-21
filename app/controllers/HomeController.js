class HomeController {
  // [GET]
  index(req, res) {
    res.render("index", { title: "Express", name: "Tu" });
  }
}

module.exports = new HomeController();
