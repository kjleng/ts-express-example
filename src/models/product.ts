import { pool } from "../config/database";

type Product = {
  id: number;
  name: string;
  price: number;
}
export const getProducts = async (): Promise<Product[]> => {
  const sql = "SELECT id, name, price FROM products";
  try {
    const result = await pool.query<Product>(sql);

    return result.rows;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

