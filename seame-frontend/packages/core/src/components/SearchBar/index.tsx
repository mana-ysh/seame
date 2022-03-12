import * as React from "react";
import { css } from "@emotion/css";
import { fontColorMain } from "../../constants";

type Props = {
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

// FIXME: show icon
export const SearchBar = ({ id, placeholder, onChange }: Props) => (
  <div className={style}>
    <input
      id={id}
      type={"search"}
      placeholder={placeholder}
      inputMode={"search"}
      onChange={onChange}
    />
  </div>
);

const style = css`
  color: ${fontColorMain};
  font-size: large;
`;
