import express from "express";
import { ShowService } from "../services/show.service";

export class ShowsController {
  protected service: ShowService;

  constructor() {
    this.service = new ShowService();
    console.log(this.service);
  }

  async all(req: express.Request, res: express.Response) {
    console.log('this.service', this);
    res.send({
      data: {
        shows: await this.service.getAllShows()
      }
    });
  }

  async create(req: express.Request, res: express.Response) {
    await this.service.createShow({
      id: req.body.id,
      name: req.body.name
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
      name: req.body.name
    });

    res.send({
      data: {
        status: 'OK'
      }
    });
  }
}