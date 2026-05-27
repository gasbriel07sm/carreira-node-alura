import moongose, { mongo} from "mongoose";

async function conectaMongoDB() {
  moongose.connect(process.env.DB_CONNECTION_STRING);
  return moongose.connection;
}

export default conectaMongoDB;