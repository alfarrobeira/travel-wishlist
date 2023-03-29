import countries from "../countryList.js";

const getAllCountries = (req, res) => {
  if (countries)
    res.send(countries);
  else 
    res.send("No countries found.");
}

const addCountry = (req, res) => {
  console.log("POST Request: " + req.body);
  const { name, alpha2code, alpha3code } = req.body;
  const success = false;
  console.log("POST Request: " + req.body);

  if (countries && name && alpha2code && alpha3code)
    success = countries.push({ id: countries.length, name: name, alpha2code: alpha2code, alpha3code: alpha3code });

  if (success)
    res.status(201).json(countries[countries.length]);
  else 
    res.json({ error: "Country could not be added." });
}

const getCountry = (req, res) => {
  const code = req.params.code;
  const found = findCountry(code);

  if (found) 
    res.json(found);
  else 
    res.json({ error: "No country for provided code." });
}

const editCountry = (req, res) => {
  const code = req.params.code;
  const { name, alpha2code, alpha3code } = req.body;
  const found = findCountry(code);

  if (found) {
    // requires that all fields must be filled in
    if (name && alpha2code && alpha3code) {
      found.name = name;
      found.alpha2code = alpha2code;
      found.alpha3code = alpha3code;
}
    res.json(found);
  }
  else 
    res.json({ error: "Country could not be edited." });
}

const deleteCountry = (req, res) => {
  const code = req.params.code;
  const index = countries.findIndex(country => 
    country.alpha2code === code || country.alpha3code === code);

  if (index) {
    countries.splice(index, 1);
    res.json();
  }
  else 
    res.json({ error: "Country could not be deleted." });
}

// helper function to find country by country code
const findCountry = (code) => {
  return countries?.find((country) =>
    country.alpha2code === code || country.alpha3code === code);
}

export { getAllCountries, addCountry, getCountry, editCountry, deleteCountry };
