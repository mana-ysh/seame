import * as React from "react";
import { css } from "@emotion/css";
import { fontColorMain, fontSizeLarge } from "../../constants";

type Props = {
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  autoFocus?: boolean;
};

// FIXME: show icon
export const SearchBar = ({ id, placeholder, autoFocus, onChange }: Props) => (
  <div className={style}>
    <input
      id={id}
      type={"search"}
      placeholder={placeholder}
      inputMode={"search"}
      onChange={onChange}
      autoFocus={autoFocus}
    />
  </div>
);

const style = css`
  border: 1px solid lightgray;
  border-radius: 20px;

  :hover {
    box-shadow: 0 1px 3px 0 rgba(32, 33, 36, 0.28);
  }

  input {
    color: ${fontColorMain};
    font-size: ${fontSizeLarge};
    margin: 0.6em;
    flex: 1;
    width: 90%;
    border: 0;
    align-items: center;
  }

  input:focus {
    outline: none;
  }
`;
