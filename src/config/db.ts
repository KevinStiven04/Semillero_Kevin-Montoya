import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        const url = 'mongodb+srv://kevinmontoya0614_db_user:Kevin142004%2A@semillero.ydmzc0v.mongodb.net/?appName=Semillero';

        const {connection} = await mongoose.connect(url);
        const urlTwo = `${connection.host}:${connection.port}`

        console.log(`MongoBD Concectado en el puerto: ${urlTwo}`);


    } catch (error){

        console.error(error);
    }



}