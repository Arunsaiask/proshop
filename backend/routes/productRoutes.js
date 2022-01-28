import express from "express";
const router = express.Router();
import asyncHandler from "express-async-handler";
import Product from "../models/ProductsModel.js";

///Desc @ fecth all products
///route /api/products/
//access public

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

///Desc @ fecth particular products
///route /api/products/
//access public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    //see if product exists
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("product not found");
    }
  })
);

export default router;
