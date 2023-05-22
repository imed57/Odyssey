import { Request, Response } from "express";
import Product from "../database/models/Product";
import { createProduct, deleteProduct, updateProduct } from "../services/Product.service";

// findall
export async function getAll(req: Request, res: Response) {
  try {
    const Products = await Product.findAll();
    res.status(200).send(JSON.stringify(Products))
  } catch (err:any) {
    res.status(400).json({ message: err.message })
  }
}

// Findwithid
export async function getById(req: Request, res: Response) {
  try {
    const id = req.params;
    const product = await Product.findAll({ where: id });
    res.json( product );
  } catch (err:any) {
    res.status(400).json({ message: err.message })
  }
}


// Create
export async function create(req: Request, res: Response) {
  try {
    const newProduct = await createProduct(req.body);
    res.json(newProduct);
  } catch (err) {
    res.status(409).send({ message: 'a problem occurs when you wanted to create a new Product' })
  }
}

// Update
export async function updateById(req: Request, res: Response) {
  try {
    const updateproduct = await updateProduct(req.body, req.params);
    res.status(200).json(updateproduct)
  } catch (err:any) {
    res.status(400).json({ message: err.message })
  }
}

// Delete
export async function deleteById(req: Request, res: Response) {
  try {
    res.json(deleteProduct(req.params));
  } catch (err:any) {
    res.status(400).send({ message: err.message })
  }
}
