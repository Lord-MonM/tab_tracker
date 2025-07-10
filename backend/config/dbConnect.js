import mongoose from "mongoose";

const dbConnect = async () => {
  try {
   const connect = await mongoose.connect(process.env.TABTRACKER_DB_URI);
   console.log(
     `Database connected: ${connect.connection.host}, ${connect.connection.name}`
   );
   
  } catch (error) {
   console.log(error);
   process.exit(1)
  }
}

export default dbConnect;