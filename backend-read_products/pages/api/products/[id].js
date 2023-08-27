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
}