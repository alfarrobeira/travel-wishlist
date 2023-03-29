import connPool from "../db/pg.js";

// GET
const getAllCountries = (req, res) => {
    const query = "SELECT * FROM countries";

    connPool.query(query, [])
        .then(({ rows }) => res.json(rows));
};

// POST
const addCountry = (req, res) => {
    const { name, alpha2code, alpha3code } = req.body;
    const query = "INSERT INTO countries (name, alpha2code, alpha3code) VALUES ($1, $2, $3) RETURNING *";

    connPool.query(query, [name, alpha2code, alpha3code])
        .then(({ rows }) => res.status(201).json(rows));
};

// GET
const getCountry = (req, res) => {
    const { code } = req.params;
    const query = "SELECT * FROM countries WHERE alpha2code=$1 OR alpha3code=$1";

    connPool.query(query, [code])
        .then(({ rows }) => res.json(rows));
};

// PUT
const editCountry = (req, res) => {
    const { code } = req.params;
    const { name, alpha2code, alpha3code } = req.body;
    const query = "UPDATE countries SET name=$2, alpha2code=$3, alpha3code=$4 WHERE alpha2code=$1 OR alpha3code=$1";

    connPool.query(query, [code, name, alpha2code, alpha3code])
        .then(({ rows }) => res.json(rows));
};

// DELETE
const deleteCountry = (req, res) => {
  const { code } = req.params;
  const query = "DELETE FROM countries WHERE alpha2Code=$1 OR alpha3code=$1";

  connPool.query(query, [code]).then(({ rows }) => res.json(rows));
};

export { getAllCountries, addCountry, getCountry, editCountry, deleteCountry };
