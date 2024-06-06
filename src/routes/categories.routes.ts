import { Router, Request, Response } from "express";
import { Category } from "../model/Category";


const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post("/", (request: Request, response: Response) => {
  const { name, description } = request.body

  const category: Category = {
    name,
    description,
    created_at: new Date()
  }

  categories.push(category)
  return response.status(201).json({ category });
})

export { categoriesRoutes }