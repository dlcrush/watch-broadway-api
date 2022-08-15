import express from "express";
import { ShowService } from "../services/show.service";

export class ShowsController {
  protected service: ShowService;

  constructor() {
    this.service = new ShowService();
  }

  async all(req: express.Request, res: express.Response) {
    res.send({
      data: {
        shows: await this.service.getAllShows()
      }
    });
  }

  async create(req: express.Request, res: express.Response) {
    await this.service.createShow({
      id: req.body.id,
      name: req.body.name,
      image_src: req.body.image_src,
      hidden: req.body.hidden === true
    });

    res.send({
      data: {
        status: 'OK'
      }
    });
  }

  async update(req: express.Request, res: express.Response) {
    await this.service.updateShow(req.params.id, {
      id: req.body.id,
      name: req.body.name,
      image_src: req.body.image_src,
      hidden: req.body.hidden === true
    });

    res.send({
      data: {
        status: 'OK'
      }
    });
  }

  async get(req: express.Request, res: express.Response) {
    res.send({
      data: {
        show: await this.service.getShow(req.params.id)
      }
    });
  }
}
