import React from "react";
import { Card } from "./style";

export default function Pokemon({ data }) {
  return <Card>{data.name}</Card>;
}
