import { Router } from "express";
import { getProducts } from "../controllers/productController";

const router = Router();
router.get('/', getProducts);

// router.get('/:productID', getProduct)

// router.post('/', createProduct)

// router.put('/:productID', updateProduct)

// router.delete('/:productID', deleteProduct)

export default router;
