const logRequest = (req, res, next) => {
  console.log('log : terjadi request ke PATH: ', req.path);
  next();
}

module.exports = {
  logRequest,
}
