import { PerformanceRepository } from "../repositories/performance.repository";
import { show } from "../models/show";
import { ShowRepository } from "../repositories/show.repository";

export class ShowService {
  protected repo: ShowRepository;
  protected performanceRepo: PerformanceRepository;

  constructor() {
    this.repo = new ShowRepository();
    this.performanceRepo = new PerformanceRepository();
  }

  async getAllShows(): Promise<show[]> {
    return (await this.repo.getAllShows()).map(s => this.transform(s));
  }

  async getShow(id: string): Promise<show|undefined> {
    const show = await this.repo.get(id);

    if (! show) {
      return;
    }

    show.performances = await this.performanceRepo.getPerformancesByShowId(show.id);

    return this.transform(show);
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

  protected transform(show: show): show {
    return {... show, hidden: !!show.hidden};
  }
}
