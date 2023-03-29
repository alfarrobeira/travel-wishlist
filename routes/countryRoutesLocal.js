import { Router } from "express";
import { getAllCountries, addCountry, getCountry, editCountry, deleteCountry } from "../controllers/countryControllerLocal.js";

const countryRoutesLocal = Router();

countryRoutesLocal.route("/api/countries").get(getAllCountries);

countryRoutesLocal.route("/api/countries").post(addCountry);

countryRoutesLocal.route("/api/countries/:code").get(getCountry);

countryRoutesLocal.route("/api/countries/:code").put(editCountry);

countryRoutesLocal.route("/api/countries/:code").delete(deleteCountry);

export default countryRoutesLocal;
