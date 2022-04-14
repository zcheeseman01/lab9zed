exports.respondWithName = (req, res) => {
  let paramsName = req.params.imageNumber;
  res.render(paramsName);
};

exports.respondWithHome = (req, res) => {
  res.render("home");
};