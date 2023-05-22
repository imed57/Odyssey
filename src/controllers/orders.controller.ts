import { Request, Response } from "express";
import Order from "../database/models/Orders";
import {createOrder, deleteOrder, updateOrder} from "../services/Order.service";

// findall
export async function getAll(req: Request, res: Response) {
  try {
    const Orders = await Order.findAll();
    res.status(200).send(JSON.stringify(Orders))
  } catch (err:any) {
    res.status(400).json({ message: err.message })
  }
}

// Findwithid
export async function getById(req: Request, res: Response) {
  try {
    const id = req.params;
    const Orders = await Order.findAll({where: id});
    res.json(Orders);
  } catch (err:any) {
    res.status(400).json({ message: err.message })
  }
}

// Create
export async function create(req: Request, res: Response) {
  try {
    const newOrder = await createOrder(req.body);
    res.json(newOrder);
  } catch (err) {
    res.status(409).send({ message: 'a problem occurs when you wanted to create a new Order' })
  }
}

// Update
export async function updateById(req: Request, res: Response) {
  try {
    const updatedOrder = await updateOrder(req.body, req.params);
    res.status(200).json(updatedOrder)
  } catch (err:any) {
    res.status(400).json({ message: err.message })
  }
}

// Delete
export async function deleteById(req: Request, res: Response) {
  try {
    res.json(deleteOrder(req.params));
  } catch (err:any) {
    res.status(400).send({ message: err.message })
  }
}