const { Router } = require("express");
const {Product} = require('../db');

const router = Router();


/*----------------------------------------GETS------------------------------------------------------*/ 
router.get("/", async (req, res) => {
  const {name} = req.query

  try {
    let products = await Product.findAll()

    if(name){
      let especified = await products.filter(e => e.name.toLowerCase() === name.toLowerCase())
      if(especified.length){
        res.status(200).send(especified)
      }else{
        res.status(404).send('No encontramos lo que buscabas :(')
      }
    }else res.status(200).send(products)
  } catch (error) {
    res.status(404).send(error)
  } 
});

router.get("/:id", async (req, res) => {
    const {id} = req.params;
    try {
      let products = await Product.findAll()
      let product = await products.filter(e => e.id == id)

      if(product.length){
        res.status(200).send(product)
      }else{
        res.status(404).send('No encontramos ese producto :(')
      }
    } catch (error) {
      res.status(404).send(error)
    } 
  });


/*----------------------------------------POSTS------------------------------------------------------*/ 
router.post("/", async (req, res) => {
    const {name, image, minprice, categories, stock, variant, discount, description} = req.body;
    try {
        let product = await Product.create({
            name,
            image,
            minprice,
            categories,
            stock,
            /*a partir de aca son no obligatorias*/ 
            variant,
            description,
            discount
          });
      res.status(200).json(product)
    } catch (error) {
      res.status(404).send(error)
    } 
});

module.exports = router;
