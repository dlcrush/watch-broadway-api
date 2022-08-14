import dotenv from "dotenv";
import express from "express";
import routes from "./routes/v1";
import cors from 'cors';
import compression from 'compression';

dotenv.config();

const port = process.env.SERVER_PORT;

const app = express();

app.use(cors());
app.use(compression());

app.use('/api/v1', routes);

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${ port }`);
});
