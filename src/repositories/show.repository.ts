import { sqlite } from "../lib/sqlite";
import { show } from '../models/show';

export class ShowRepository {
  protected db: sqlite;

  constructor() {
    this.db = new sqlite('src/db/watch_broadway.db');
  }

  async getAllShows(): Promise<show[]> {
    return this.db.all('SELECT * FROM shows');
  }

  async updateShow(show: show): Promise<void> {
    await this.db.run('UPDATE show SET show.name = ? WHERE show.id = ?', show.name, show.id);
  }

  async createShow(show: show): Promise<void> {
    await this.db.run('INSERT INTO show(id, name) VALUES(?, ?)', show.id, show.name);
  }
}
