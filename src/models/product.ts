import pool from "../config/database";

type Product = {
  id: number;
  name: string;
  price: number;
}
export const getProducts = async (): Promise<Product[]> => {
  try {
    const sql = "SELECT id, name, price FROM products";
    const result = await pool.query<Product>(sql);

    return result.rows;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

