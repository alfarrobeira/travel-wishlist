import connPool from "../db/pg.js";

// check if country with spec. code in request query already exists in the list
const countryNotExistsByQuery = (req, res, next) => {
  const { code } = req.params;
  const query = "SELECT * FROM countries WHERE alpha2code=$1 OR alpha3code=$1";

  connPool.query(query, [code])
    .then(({ rowCount }) => { 
      if (rowCount === 1) 
        // OK -> forward to next middleware, so country can be displayed
        return next();

        // do NOT call next(), because country was not found
        return res.send("Country not found in list!");
      })
};

export default countryNotExistsByQuery;
