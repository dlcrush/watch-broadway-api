import { sqlite } from "../lib/sqlite";
import { performance } from "../models/performance";

export class PerformanceRepository {
  protected db: sqlite;

  constructor() {
    this.db = new sqlite('src/db/watch_broadway.db');
  }

  async getAllPerformances(): Promise<performance[]> {
    return this.db.all('SELECT * FROM performances');
  }

  async getPerformance(id: number): Promise<performance|undefined> {
    return this.db.get('SELECT * FROM performances WHERE id = ?', id);
  }

  async getPerformancesByShowId(show_id: string): Promise<performance[]> {
    return this.db.all('SELECT * FROM performances WHERE show_id = ?', show_id)
  }

  async createPerformance(performance: Omit<performance, 'id'>): Promise<void> {
    return this.db.run('INSERT INTO performances(show_id, name, description, duration, thumbnail_src, video_src, hidden) VALUES(?,?,?,?,?,?,?)',
      performance.show_id, performance.name, performance.description, performance.duration, performance.thumbnail_src, performance.video_src, performance.hidden);
  }

  async updatePerformance(performance: performance): Promise<void> {
    return this.db.run('UPDATE performances SET name = ?, description = ?, duration = ?, thumbnail_src = ?, video_src = ?, hidden = ? WHERE id = ?',
      performance.name, performance.description, performance.duration, performance.thumbnail_src, performance.video_src, performance.hidden, performance.id);
  }
}
