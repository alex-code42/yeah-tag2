import { StyledComments } from "./Comments.styled";

export default function Comments({ reviews }) {
  return (
    <>
    <StyledComments>
      <h3>Comments</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review._id}>
            <p>
              {review.rating}/5: {review.text}
            </p>
          </li>
        ))}
      </ul>
      </StyledComments>
    </>
  );
}
