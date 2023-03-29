import { Router } from "express";
import { getAllCountries, addCountry, getCountry, editCountry, deleteCountry } from "../controllers/countryControllerDb.js";

const countryRoutesDb = Router();

countryRoutesDb.route("/api/countries").get(getAllCountries);

countryRoutesDb.route("/api/countries").post(addCountry);

countryRoutesDb.route("/api/countries/:code").get(getCountry);

countryRoutesDb.route("/api/countries/:code").put(editCountry);

countryRoutesDb.route("/api/countries/:code").delete(deleteCountry);

export default countryRoutesDb;
