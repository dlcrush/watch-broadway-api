import express from "express";
import shows from './shows.route';
const router = express.Router();

router.use('/', shows);

export default router;
