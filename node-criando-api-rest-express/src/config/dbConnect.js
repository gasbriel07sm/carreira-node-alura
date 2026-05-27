import mongoose, { mongo} from "mongoose";

async function conectaMongoDB() {
  mongoose.set('strictQuery', true); 
  mongoose.connect(process.env.DB_CONNECTION_STRING);
  return mongoose.connection;
}

export default conectaMongoDB;