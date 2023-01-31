import React from "react";
import { Container } from "./style";

export default function Pokemon({ data }) {
  return <Container>{data.name}</Container>;
}
