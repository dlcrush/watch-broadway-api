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
    await this.db.run('UPDATE shows SET show.name = ? AND show.image_src = ? AND show.hidden = ? WHERE show.id = ?', show.name, show.image_src, show.hidden, show.id);
  }

  async createShow(show: show): Promise<void> {
    await this.db.run('INSERT INTO shows(id, name, image_src, hidden) VALUES(?, ?, ?, ?)', show.id, show.name, show.image_src, show.hidden);
  }
}
