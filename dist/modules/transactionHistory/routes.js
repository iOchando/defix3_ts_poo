"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
class Routes {
    constructor(router, controller) {
        this.controller = controller;
        this.configureRoutes(router);
    }
    configureRoutes(router) {
        /**
         * @swagger
         * /transaction-history/:
         *    post:
         *      tags:
         *        - TransactionHistory
         *      summary: Historico de transacciones.
         *      description: Obtener historico de transacciones de un usuario.
         *      requestBody:
         *          content:
         *            application/json:
         *              schema:
         *                type: "object"
         *                required: [defixId]
         *                properties: {
         *                  defixId: {
         *                    type: "string"
         *                  },
         *                  blockchain: {
         *                    type: "string"
         *                  },
         *                  coin: {
         *                    type: "string"
         *                  },
         *                  hash: {
         *                    type: "string"
         *                  },
         *                  type: {
         *                    type: "string"
         *                  },
         *                  year: {
         *                    type: "string"
         *                  }
         *                }
         *      responses:
         *        '200':
         *          description: Devuelve array de transacciones.
         *        '400':
         *          description: Bad Request.
         *        '500':
         *          description: Internal Server Error.
         */
        router.get("/transaction-history/", this.controller.getTransactionHistory);
    }
}
exports.Routes = Routes;