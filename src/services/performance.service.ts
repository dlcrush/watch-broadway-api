import { performance } from "../models/performance";
import { PerformanceRepository } from "../repositories/performance.repository";

export class PerformanceService {
  protected repo: PerformanceRepository;

  constructor() {
    this.repo = new PerformanceRepository();
  }

  getAllPerformances(): Promise<performance[]> {
    return this.repo.getAllPerformances();
  }

  getPerformance(id: number): Promise<performance|undefined> {
    return this.repo.getPerformance(id);
  }

  createPerformance(performance: Omit<performance, 'id'>): Promise<void> {
    return this.repo.createPerformance(performance);
  }

  updatePerformance(id: number, performance: performance): Promise<void> {
    if (id !== performance.id) {
      throw new Error('Cannot change id.');
    }

    return this.repo.updatePerformance(performance);
  }
}
