import express from "express";
import cors from "cors";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";
import path from "path";

const app = express();

app.set("trust proxy", 1);
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);
app.use(helmet());


//Routes

// app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/dashboard", dashboardRoutes);
// app.use("/api/v1/invoices", invoiceRoutes);
// app.use("/api/v1/products", productRoutes);
// app.use("/api/v1/reports", reportRoutes);
// app.use("/api/v1/sales", salesRoutes);
// app.use("/api/v1/users", userRoutes);





export default app;