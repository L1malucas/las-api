const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../swagger.json");

const ENV = process.env.NODE_ENV;

module.exports = () => {
  const app = express();
  const TEXTO = "# LAS - Licenciamento de Ambulantes de Salvador";
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  consign().include("src/controllers").into(app);
  app.get("/", (_requisicao, resposta) => {
    resposta.status(200).send(TEXTO);
  });
  // eslint-disable-next-line no-unused-vars
  app.use((err, _req, res, _next) => {
    if (err.erroApp) {
      res.status(400).send(err.erroApp);
    } else if (ENV !== "production") {
      res.status(500).send({ Error: err });
    } else {
      res.status(500).send({ error: "Algo deu errado..." });
    }
  });

  return app;
};
