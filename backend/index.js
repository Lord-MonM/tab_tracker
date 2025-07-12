import dotenv from "dotenv";
import app from "./server.js";
import dbConnect from "./config/dbConnect.js";

dotenv.config();

dbConnect();

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
