import express from "express";
import { PerformancesController } from "../../controllers/performances.controller";

const router = express.Router();
const controller = new PerformancesController();

router.get('/performances', (req, res) => controller.all(req, res));
router.get('/performances/:id', (req, res) => controller.get(req, res));
router.post('/performances', (req, res) => controller.create(req, res));
router.put('/performances/:id', (req, res) => controller.update(req, res));

export default router;
