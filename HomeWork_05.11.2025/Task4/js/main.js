import { products } from "./products.js";
import { loadProducts } from "./script.js";

const app = () =>
{
    loadProducts(products);
};

app();