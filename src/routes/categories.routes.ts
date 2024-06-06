import { Router, Request, Response } from "express";
import { Category } from "../model/Category";
import { CategoriesRepositoty } from "../repository/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepositoty()

const categories: Category[] = [];

categoriesRoutes.post("/", (request: Request, response: Response) => {
  const { name, description } = request.body

  categoriesRepository.create({ description, name })

  return response.status(201).send("OK");
})

export { categoriesRoutes }