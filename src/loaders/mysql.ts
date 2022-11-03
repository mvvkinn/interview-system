import config from "@config";
import mysql from "mysql2/promise";

export class Model<T> {
  private table: string;
  private connection: Promise<mysql.Connection>;

  constructor(table: string) {
    this.table = table;
    this.connection = mysql.createConnection(config.db);
  }

  async Create(data: object) {
    const sql = `INSERT INTO ${this.table} SET ?`;
    return await this.Query(sql, data);
  }

  async Update(data: object) {
    const sql = "UPDATE user SET ?";
    return await this.Query(sql, data);
  }

  async Read() {}

  async Delete() {}

  async findOne(data: object) {
    const sql = `SELECT * FROM ${this.table} WHERE ?`;

    const record = await this.Query(sql, data);
    const recordDTO: T = Object(record[0]);

    return { ...recordDTO };
  }

  async Query(sql: string, data?: object) {
    const db = await this.connection;
    //db.connect();

    const result = await db.query(sql, data);

    //db.end();

    return result;
  }
}
