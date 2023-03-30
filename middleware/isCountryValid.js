// validate info provided in the request body
const isCountryValid = (req, res, next) => {
  const { name, alpha2code, alpha3code } = req.body;
  let valid = true;

  // validate
  if (!name || !alpha2code || !alpha3code || alpha2code.length!==2 || alpha3code.length!==3)
    valid = false;

  if (valid)
    // OK -> forward to next middleware, so country can be edited
    return next();

    // do NOT call next(), because validation failed
    return res.send("Country not valid!");
};

export default isCountryValid;
