import request from "supertest";
import app from "../app";
import { getProducts as getAllProducts } from "../models/product";

jest.mock("../models/product");

const mockProducts = [{
  "id": 1,
  "name": "iPhone",
  "price": 800
},
{
  "id": 2,
  "name": "iPad",
  "price": 650
}];

describe("Product Controller", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should get all products", async () => {
    (getAllProducts as jest.Mock).mockResolvedValue(mockProducts);
    const response = await request(app).get("/api/products");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  })
})
