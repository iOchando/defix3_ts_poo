import path from "path";
import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
  openapi: "3.0.3",
  info: {
    title: "Defix3 - Api V2",
    description: "End Points for Defix3 API V2",
    contact: {
      email: "juanochando00@gmail.com",
    },
    version: "2.0.0",
  },
  servers: [
    {
      url: "https://defix3.com:3072/api/v2/",
    },
    {
      url: "http://localhost:3080/api/v2/",
    },
  ],
  tags: [
    {
      name: "Wallet",
      description:
        "EndPoints asociados a la creacion y funciones basicas de las wallets.",
    },
    {
      name: "User",
      description:
        "EndPoints asociados a la configuracion del perfil de los usuarios.",
    },
    {
      name: "2FA",
      description: "EndPoints asociados al 2FA.",
    },
    {
      name: "Balance",
      description: "EndPoints asociados al balance y Cryptomonedas",
    },
    {
      name: "General",
      description: "EndPoints variados",
    },
    {
      name: "Transaction",
      description: "EndPoints asociados a las transacciones.",
    },
    {
      name: "Swap",
      description: "EndPoints asociados a al Swap. Solo ETH y BSC",
    },
    {
      name: "TransactionHistory",
      description: "EndPoint ver el historial de Transactiones",
    },
    {
      name: "Frequent",
      description:
        "EndPoints para los usuarios frecuentes al hacer transferencias",
    },
    {
      name: "Subscription",
      description:
        "EndPoint para guardar correo de usuario que quiera recibir notificaciones de Defix3",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
  },
};

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: [path.join(__dirname, "../modules/**/{routes,routes.*}{.ts,.js}")],
};

export default swaggerJSDoc(swaggerOptions);
