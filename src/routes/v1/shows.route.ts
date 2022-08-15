import express from "express";
import { ShowsController } from "../../controllers/shows.controller";

const router = express.Router();
const controller = new ShowsController();

router.get('/shows', (req, res) => controller.all(req, res));
router.get('/shows/:id', (req, res) => controller.get(req, res));
router.post('/shows', (req, res) => controller.create(req, res));
router.put('/shows/:id', (req, res) => controller.update(req, res));

export default router;
