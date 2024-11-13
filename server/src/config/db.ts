import mongoose from "mongoose";

const conenctDb = async () => {
  if (process.env.MONGO_URI) {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI);

      console.log(
        `MongoDb Connected: ${conn.connection.host}`.bgGreen.underline.bold
      );
    } catch (e) {
      console.log(`MongoDb Connection Failed: ${e}`.bgRed.underline.bold);
    }
  }
};

export default conenctDb;
