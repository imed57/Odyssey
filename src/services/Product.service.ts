import Product, {IProduct} from "../database/models/Product";


export const createProduct = async (_product: IProduct) => {
    const newProduct = new Product();
    newProduct.name = _product.name;
    newProduct.price = _product.price;
    newProduct.rate = _product.rate;
    newProduct.description = _product.description;
    await newProduct.save();
    return newProduct;
}

export const updateProduct = async (user: any, id: any ) => {
    const updateProduct = await Product.update(user, {where: id});
    return updateProduct;
}

export const deleteProduct = async (id: any) => {
    const deleteproduct = await Product.destroy({where: id})
    return deleteproduct;
}
