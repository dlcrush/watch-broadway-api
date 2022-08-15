import { PerformanceService } from "../services/performance.service";
import express from "express";

export class PerformancesController {
  protected service: PerformanceService;

  constructor() {
    this.service = new PerformanceService();
  }

  async all(req: express.Request, res: express.Response) {
    res.send({
      data: {
        performances: await this.service.getAllPerformances()
      }
    });
  }

  async get(req: express.Request, res: express.Response) {
    res.send({
      data: {
        performance: await this.service.getPerformance(+req.params.id)
      }
    });
  }

  async create(req: express.Request, res: express.Response) {
    await this.service.createPerformance({
      show_id: req.body.show_id,
      name: req.body.name,
      description: req.body.description,
      duration: req.body.duration,
      thumbnail_src: req.body.thumbnail_src,
      video_src: req.body.video_src,
      hidden: req.body.hidden === true
    });

    res.send({
      data: {
        status: 'OK'
      }
    });
  }

  async update(req: express.Request, res: express.Response) {
    await this.service.updatePerformance(+req.params.id, {
      id: req.body.id,
      show_id: req.body.show_id,
      name: req.body.name,
      description: req.body.description,
      duration: req.body.duration,
      thumbnail_src: req.body.thumbnail_src,
      video_src: req.body.video_src,
      hidden: req.body.hidden === true
    });

    res.send({
      data: {
        status: 'OK'
      }
    });
  }
}
