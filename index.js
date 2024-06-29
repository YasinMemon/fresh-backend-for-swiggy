import express from "express";
import { foods } from "./data/food.js";
import { restaurants } from "./data/restaurants.js";
import cors from "cors";
import { pizza } from "./data/item.js";
import { products } from "./data/item.js";

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json(foods);
});

app.get("/restaurants", (req, res) => {
  res.json(restaurants);
});

app.get('/pizza', (req, res) =>{
  res.json(pizza);
})

app.get('/products', (req, res) => {
  res.json(products);
})

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Your App is Listening on ${port}`);
});
