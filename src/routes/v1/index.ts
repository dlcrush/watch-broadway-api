import express from "express";
import shows from './shows.route';
import performances from "./performances.route";
const router = express.Router();

router.use('/', shows);
router.use('/', performances);

export default router;
