import Order, {IOrder} from "../database/models/Orders";

export const createOrder = async (_Order: IOrder) => {
    const newOrder = new Order();
    newOrder.name = _Order.name;
    newOrder.price = _Order.price;
    newOrder.size = _Order.size;
    await newOrder.save();
    return newOrder;
}

export const updateOrder = async (user: any, id: any, ) => {
    const updatedOrder = await Order.update(user, {where: id});
    return updatedOrder;
}

export const deleteOrder = async (id: any) => {
    const deleteOrder = await Order.destroy({where: id});
    return deleteOrder;
}