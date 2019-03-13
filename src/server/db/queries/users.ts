import { Query } from "../index";

const findOneByEmail = async (email: string) =>
  Query(`SELECT * FROM users WHERE email = ?`, email);

const findOneById = async (id: number) =>
  Query(`SELECT * FROM users WHERE id = ${id} `);

const insert = async (columns: string, values: any[]) =>
  Query(`INSERT INTO users (${columns}) VALUE (?);`, values);

export default {
  findOneByEmail,
  findOneById,
  insert
};
