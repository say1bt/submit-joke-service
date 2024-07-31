const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const { swaggerSpec } = require("./src/configs/config");
const bodyParser = require("body-parser");
const jokeRoutes = require("./src/routes/joke_routes");
const { connectToDatabase } = require("./src/utils/database_utils");

const env = process.env.NODE_ENV || "dev";
dotenv.config({ path: `.env.${env}` });

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

connectToDatabase();

app.use("/api", jokeRoutes);

const PORT = process.env.SERVER_PORT || 3002;

app.listen(PORT, () => {
  console.log(`Moderate Joke Service on port ${PORT}`);
});
