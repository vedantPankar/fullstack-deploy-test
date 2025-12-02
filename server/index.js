import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:3000",
      // add production url
      "http://52.207.1.214:3000/",
    ],
    credentials: true,
  })
);

app.get("/api/message", (req, res) => {
  res.json({
    message: "Hello from chai aur code server",
  });
});

const PORT = 4000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
