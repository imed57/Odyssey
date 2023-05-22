import User, {IUser} from "../database/models/Users";


export const createUser = async (_User: IUser) => {  // create a user with the interface IUser from the model 
    const newUser = new User();
    newUser.surname = _User.surname;
    newUser.name = _User.name;
    newUser.email = _User.email;
    newUser.password = _User.password;
    newUser.phone = _User.phone;
    newUser.adress = _User.adress;
    newUser.city = _User.city;
    await newUser.save();
    return newUser;
}

export const updateUser = async (user: any, id: any, ) => {  // update a specific user by id
    const updateUser = await User.update(user, {where: id});  
    return updateUser;
}

export const deleteUser = async (id: any) => {  // delete a specific user by id
    const deleteUser = await User.destroy({where: id})  // use the destroy method from sequelize to delete a user
    return deleteUser;
}