import { Router } from "express";
import { getAllCountries, addCountry, getCountry, editCountry, deleteCountry } from "../controllers/countryControllerDb.js";
import countryExistsByBody from "../middleware/countryExistsByBody.js";
import countryExistsByQuery from "../middleware/countryExistsByQuery.js";
import countryNotExistsByQuery from "../middleware/countryNotExistsByQuery.js";
import isCountryValid from "../middleware/isCountryValid.js";

const countryRoutesDb = Router();

countryRoutesDb.route("/").get(getAllCountries);

countryRoutesDb.route("/").post(countryExistsByBody, isCountryValid, addCountry);

countryRoutesDb.route("/:code").get(countryNotExistsByQuery, getCountry);

countryRoutesDb.route("/:code").put(countryExistsByQuery, countryExistsByBody, isCountryValid, editCountry);

countryRoutesDb.route("/:code").delete(deleteCountry);

export default countryRoutesDb;
