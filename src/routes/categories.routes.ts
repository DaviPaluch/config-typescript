import { Router, Request, Response } from "express";

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.get("/categories", (request: Request, response: Response) => {
  const { name, description } = request.params

  categories.push({ name, description })

  return response.status(201).send("name");
})

export { categoriesRoutes }