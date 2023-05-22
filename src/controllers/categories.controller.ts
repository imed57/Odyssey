import { Request, Response } from "express";
import Category from "../database/models/Category";
import { createCategory, deleteCategory, updateCategory } from "../services/Category.service";

// findall
export async function getAll(req: Request, res: Response) {
  try {
    const Categorys = await Category.findAll();
    res.status(200).send(JSON.stringify(Categorys))
  } catch (err:any) {
    res.status(400).json({ message: err.message })
  }
}

// Findwithid
export async function getById(req: Request, res: Response) {
  try {
    const id = req.params;
    const Categorys = await Category.findAll({ where: id });
    res.json(Categorys);
  } catch (err:any) {
    res.status(400).json({ message: err.message })
  }
}

// Create
export async function create(req: Request, res: Response) {
  try {
    const newCategory = await createCategory(req.body);
    res.json(newCategory);
  } catch (err) {
    res.status(409).send({ message: 'a problem occurs when you wanted to create a new Category' })
  }
}

// Update
export async function updateById(req: Request, res: Response) {
  try {
    const Categorys =await updateCategory(req.body, req.params);
    res.status(200).json(Categorys)
  } catch (err:any) {
    res.status(400).json({ message: err.message })
  }
}

// Delete
export async function deleteById(req: Request, res: Response) {
  try {
    res.json(deleteCategory(req.params));
  } catch (err:any) {
    res.status(400).send({ message: err.message })
  }
}