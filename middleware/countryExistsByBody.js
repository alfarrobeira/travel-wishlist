import connPool from "../db/pg.js";

// check if country with spec. alpha2code or alpha3code in request body already exists in the list
const countryExistsByBody = (req, res, next) => {
  const { alpha2code, alpha3code } = req.body;
  const query = "SELECT * FROM countries WHERE alpha2code=$1 OR alpha3code=$2";

  connPool.query(query, [alpha2code, alpha3code])
    .then(({ rowCount }) => { 
      if (rowCount === 0) 
        // OK -> forward to next middleware, so country can be added
        return next();

        // do NOT call next(), so that new country is not inserted
        return res.send("Country exists already!");
      })
      .catch((e) => next(e));
};

export default countryExistsByBody;
