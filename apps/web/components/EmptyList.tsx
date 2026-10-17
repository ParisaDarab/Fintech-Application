import React from "react";
import { Container } from "./Components";
import I18n from "@/lib/I18n/en.json";

type EmptyListProps = {
  text?: string;
};

export const EmptyList = ({ text = I18n.common.empty }) => {
  return (
    <Container $direction="row" className="bg-amber-300">
      <p className="bg-amber-600">{I18n.common.empty}</p>
    </Container>
  );
};
