import dotenv from 'dotenv';
import express from 'express';
dotenv.config({
    path: "./secrets/.env"
});
const app = express();
app.get("/api", (req, res) => {
    return res.json({
        port: process.env.PORT,
        databaseUrl: process.env.DATABASE_URL,
    });
});
app.listen(process.env.PORT, () => {
    console.log("app is listening on PORT", process.env.PORT);
});
//# sourceMappingURL=index.js.map