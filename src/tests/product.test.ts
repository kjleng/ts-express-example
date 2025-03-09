import { getProducts } from "../models/product";
import { pool } from "../config/database";

jest.mock("../config/database", () => ({
  pool: {
    query: jest.fn(),
  },
}));

describe("getProducts", () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => { });
  });

  afterAll(() => {
    (console.error as jest.Mock).mockRestore();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return a list of products", async () => {
    const mockProducts = [
      { id: 1, name: "Product A", price: 100 },
      { id: 2, name: "Product B", price: 200 },
    ];
    (pool.query as jest.Mock).mockResolvedValue({ rows: mockProducts });

    const result = await getProducts();
    expect(result).toEqual(mockProducts);
    expect(pool.query).toHaveBeenCalledWith("SELECT id, name, price FROM products");
    expect(pool.query).toHaveBeenCalledTimes(1);
  });

  it("should throw an error if the database query fails", async () => {
    const mockError = new Error("Database error");
    (pool.query as jest.Mock).mockRejectedValue(mockError);

    await expect(getProducts()).rejects.toThrow("Database error");
    expect(pool.query).toHaveBeenCalledTimes(1);
  });
})
