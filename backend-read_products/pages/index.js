import ProductList from "../components/ProductList";
import styled from "styled-components";
import ProductForm from "../components/ProductForm";
import useSWR from "swr";
import { useState } from "react";



const Heading = styled.h1`
  text-align: center;
  color: var(--color-nemo);
`;



export default function HomePage() {
  
  const [formHeading, setFormHeading] = useState("Add a new Fish"); // Set your default form heading
  const products = useSWR("/api/products");

  async function handleAddProduct(event) {


    event.preventDefault();
    // const products = useSWR("/api/products");
    console.log("i print my products in the form",products);


    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);
    console.log("i print my Data",productData);

    const response = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(productData),
      headers: {
        "Content-Type": "application/json",
      },
    });


    if (response.ok) {
      await response.json();
      products.mutate();
      event.target.reset();
    } else {
      console.error(`Error: ${response.status}`);
    }
  
  }
  

  return (
    <>
    <ProductForm onSubmit={handleAddProduct} formHeading={formHeading}/>
      <Heading>
        <span role="img" aria-label="A fish">
          🐠
        </span>
        Easy Fish Shop
      </Heading>
      <ProductList />
    </>
  );
}
