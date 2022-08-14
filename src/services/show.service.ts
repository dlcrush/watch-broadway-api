import { show } from "../models/show";
import { ShowRepository } from "../repositories/show.repository";

export class ShowService {
  protected repo: ShowRepository;

  constructor() {
    this.repo = new ShowRepository();
  }

  async getAllShows(): Promise<show[]> {
    return this.repo.getAllShows();
  }

  async updateShow(id: string, show: show): Promise<void> {
    if (show.id !== id) {
      throw new Error("Cannot change show id.");
    }

    await this.repo.updateShow(show);
  }

  async createShow(show: show): Promise<void> {
    await this.repo.createShow(show);
  }
}