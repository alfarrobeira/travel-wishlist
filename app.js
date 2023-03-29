import express from "express";
import countryRoutes from "./routes/countryRoutesDb.js";
import cors from "cors";
// tipp: "import" is asynchronous and has a smaller memory footprint than "require".
// "require" loads the whole file.

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use("/", countryRoutes);

app.get('/', (req, res) => {
    res.send('Hellooooo!')
  })

app.listen(PORT, () => {
    console.log("Server listening on port " + PORT);
})