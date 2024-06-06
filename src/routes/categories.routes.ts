import { Router, Request, Response } from "express";
import { Category } from "../model/Category";


const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post("/", (request: Request, response: Response) => {
  const { name, description } = request.body

  const category = new Category()

  Object.assign(category, {
    name,
    description,
    created_at: new Date(),
    id: 1 /* exemplo de id */
  })
  //Utilizamos o a função do JS -> Object; Otamos por uma escrita mais simples do a demonstrada:
  /*
  ex.01
  const category: Category = {
    name,
    description,
    created_at: new Date()
  }
  ex.02
  category.name=name;
  category.description=description;

  */

  categories.push(category)
  return response.status(201).json({ category });
})

export { categoriesRoutes }