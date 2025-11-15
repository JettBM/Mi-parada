import { Request, Response } from 'express';
import UserModel from '../model/user.model';


class UserController {
    private userModel: UserModel

    constructor(){
        this.userModel = new UserModel
    }

    createUser = async (req: Request, res: Response)=> {
       try {
        const { name, email } = req.body;

        if(!name || !email){
            return res.status(400).json({
                error: "name or email required"
            });
        }

        const user = await this.userModel.addUser({name, email})

            res.status(201).json({
            message: "User added",
            user
        });
       } catch (error: any) {
                res.status(500).json({
                message: "unable to add user",
                details: error.message
            })
       }
   
    }

    getUsers = async (req: Request, res: Response) => {
        try {
            const users = await this.userModel.getUsers();

            res.status(200).json({
                count: users.length,
                users
            })

        } catch (error: any) {
            res.status(500).json({
                error: "Unable to get users",
                details: error.message
            })
        }
    }

    getUserByID = async (req: Request, res: Response) => {

        try {
            const { id } = req.params;

            if(!id){
                return res.status(400).json({
                    message: "invalid ID"
                });
            }

            const user = await this.userModel.getUserByID(id);

            if(!user){
                return res.status(404).json({
                    error: "user not found"
                })
            }

            res.status(200).json({
                message: "user found",
                user
            })
        } catch (error: any) {
            res.status(500).json({
                error: "unable to process request",
                details: error.message
            })
        }
    }

    updateUser = async (req: Request, res: Response) => {
       try {
            const { id } = req.params

            if(!id){
            return res.status(400).json({
                message: "invalid id"
                });
            }

            const { name, email } = req.body

            if(!name && !email){
            return res.status(400).json({
                message: "at least ONE of the fields are required"
                });
            }

            const user = await this.userModel.updateUser(id, name, email)

            if(!user){
                return res.status(404).json({
                    message: "user not found"
                });
            }

            res.status(200).json({
            message: "user updated",
            user
        });
       } catch (error: any) {
        res.status(500).json({
            error: "unable to process request",
            details: error.message
        });
       }
    }

    deleteUser = async (req: Request, res: Response) => {
        try {

            const { id } = req.params;

            if(!id){
            return res.status(400).json({
                message: "invalid id"
            });
            }

            await this.userModel.removeUser(id);

            res.status(200).json({
            message: 'id removed',
            id
        });

        } catch (error: any) {
            res.status(500).json({
                error: 'unable to process request',
                details: error.message
            });
        }
    }
}

export default UserController;