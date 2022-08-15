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

  async get(id: string): Promise<show|undefined> {
    return this.db.get('SELECT * from shows where id = ?', id);
  }

  async updateShow(show: show): Promise<void> {
    await this.db.run('UPDATE shows SET name = ?, image_src = ?, hidden = ? WHERE id = ?', show.name, show.image_src, +show.hidden, show.id);
  }

  async createShow(show: show): Promise<void> {
    await this.db.run('INSERT INTO shows(id, name, image_src, hidden) VALUES(?, ?, ?, ?)', show.id, show.name, show.image_src, show.hidden);
  }
}
