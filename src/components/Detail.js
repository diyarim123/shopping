/* eslint-disable */
import { useParams } from "react-router-dom";

export default function Detail() {
  const params = useParams();
  const numbers = Object.values(params)
    .map(Number)
    .filter((num) => num > 0 && !Number.isNaN(num));

  let content = "";
  if (numbers.length === 1) {
    content = `You are inside the first level with identity ${numbers[0]}`;
  } else if (numbers.length === 2) {
    if (numbers[1] === 0) {
      content = `You are inside the first level with identity ${numbers[0]}`;
    } else if (numbers[1] > 0) {
      content = `You are inside the first level with identity ${numbers[0]} and second level with identity ${numbers[1]}`;
    } else {
      content = "Invalid parameters";
    }
  } else if (numbers.length === 3) {
    content = `You are inside the first level with identity ${numbers[0]} and second level with identity ${numbers[1]} and third level with identity ${numbers[2]}`;
  } else {
    content = "Invalid parameters";
  }

  return <h1 className="text-3xl font-semibold text-rose-600 text-center my-[13rem]">{content}</h1>;
}
