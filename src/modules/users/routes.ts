import { Express, Router } from "express";
import { UserController } from "./controllers/user.controller";

export class Routes {
  private routeController: UserController;

  constructor(router: Router, routeController: UserController) {
    this.routeController = routeController;
    this.configureRoutes(router);
  }

  private configureRoutes(router: Router) {
    router.post("/users", this.routeController.getUser);
  }
}