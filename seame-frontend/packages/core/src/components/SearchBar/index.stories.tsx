import * as React from "react";
import { SearchBar } from ".";

export default {
  title: "SearchBar",
  component: SearchBar,
};

export const Default = () => (
  <SearchBar
    id="default"
    placeholder="Search..."
    onChange={(event) => {
      console.log("changed: ", event);
    }}
  />
);
