import useSWR from "swr";
import { useRouter } from "next/router";
import { StyledLink } from "../Link/Link.styled";
import { StyledList } from "./ProductList.styled";

export default function ProductList() {
  const router = useRouter();
  const { data } = useSWR("/api/products");

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <StyledList>
      {data.map((product) => (
        <li key={product._id}>
          <StyledLink
    href={`/${product._id}`}
          >
            {product.name}
          </StyledLink>
        </li>
      ))}
    </StyledList>
  );
}
