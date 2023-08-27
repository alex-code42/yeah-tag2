import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  console.log("wir loggen die id: ",id);

  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");
    console.log("product",product);

    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(product);
  }
  
  if (request.method === "PUT") {
    const jokeToUpdate = await Joke.findByIdAndUpdate(id, {
      $set: request.body,
    });
    // Find the joke by its ID and update the content that is part of the request body!
    response.status(200).json(jokeToUpdate);
    // If successful, you'll receive an OK status code.
  }
}