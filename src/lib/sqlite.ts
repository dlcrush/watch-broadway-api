import { Database } from "sqlite3";

export class sqlite {
  protected db: Database;

  constructor(filename: string) {
    this.db = new Database(filename);
  }

  async all<T>(sql: string, ...params: any[]): Promise<T[]> {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (error: any, rows: T[]) => {
        console.log('error', error);
        if (error) {
          reject(error);
        }

        resolve(rows);
      });
    });
  }

  async get<T>(sql: string, ...params: any[]): Promise<T> {
    return new Promise((resolve, reject) => {
      this.db.get(sql, params, (error: any, row: T) => {
        if (error) {
          reject(error);
        }

        resolve(row);
      });
    });
  }

  async run(sql: string, ...params: any[]): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db.run(sql, params, (error: any) => {
        if (error) {
          reject(error);
        }

        resolve();
      });
    });
  }

}
