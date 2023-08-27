// import { products } from "../../../lib/products";
import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";


export default async function handler(request, response) {
  await dbConnect();
  try{
    if (request.method === "GET") {
      const product = await Product.find();
      return response.status(200).json(product);
      }
   } catch (error) {
    console.log(error);
    return response.status(405).json({ error: error.message });
    }
  

  // if (request.method === "POST") {
  //   try {
  //     const productData = request.body;
  //     // We're declaring jokeData to contain the body of our request sent by our form that we haven't created yet.
  //     // The body of our request might contain data in a variety of formats, but is typically an object.
  //     const product = new Product(productData);
  //     // Utilizing our Joke scheme, we're creating a new joke.
  //     // At this point we're sanitizing our data according to the schema of our Joke model.
  //     await product.save();
  //     // We've created a new joke, now we're calling save() to have mongoose insert a new document into our database.
  
  //     // The three lines above are functionally the same as:
  //     // Joke.create(request.body)
  //     // It's just a somewhat less opaque way.
  
  //     response.status(201).json({ status: "Product created" });
  //   } catch (error) {
  //     console.log(error);
  //     response.status(400).json({ error: error.message });
  //   }
  // }
}
