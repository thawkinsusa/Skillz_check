const product= [
  {
    image: 'https://vignette.wikia.nocookie.net/totalwar/images/2/2b/TW3K_Sun_Ren.jpg/revision/latest/scale-to-width-down/300?cb=20180914174643',
    id: 1,
    name: 'Sun Ren',
    price: '1000',

}

]

let id  = 2




module.exports = {
//   updateProduct(req, res) {

//     let { id } = req.params;
//     let { image, name, price } = req.body

//     let updatedProduct = {
//         image,
//         name,
//         price
//     }

//     let index = product.findIndex(product => product.id === +id)

//     product[index] = { ...product[index], ...this.updatedProduct }


//     res.status(200).send(product)

// },
create: ( req, res ) => {
  const db = req.app.get('db');
 let {image, name, price} = req.body
  db.create_product(image, name, price)
    .then( () => res.sendStatus(200) )
    .catch( err => {
      res.status(500).send({err: "broken"});
      console.log(err)
    } );
},

getAll: ( req, res ) => {
  const db = req.app.get('db');

  db.get_inventory()
    .then( product => res.status(200).send( product ) )
    .catch( err => {
      res.status(500).send({err: "get is broken"});
      console.log(err)
    } );
}
  };