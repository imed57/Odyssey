import Category, {ICategory} from "../database/models/Category";


export const createCategory = async (_Category: ICategory) => {
    const newCategory = new Category();
    newCategory.name = _Category.name;
    await newCategory.save();
    return newCategory;
}

export const updateCategory = async (user: any, id: any, ) => {
    const updateCategory = await Category.update(user, {where: id});
    return updateCategory;
}

export const deleteCategory = async (id: any) => {
    const deleteCategory = await Category.destroy({where: id})
    return deleteCategory;
}