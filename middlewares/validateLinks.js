const validateLink = (links) => {
  const requiredParams = ["id", "title"];
  if (links.length > 0) {
    return links.every((link) => {
      requiredParams.every((key) => link[key] && link[key].trim().length);
    });
  }

};

module.exports = validateLink;
