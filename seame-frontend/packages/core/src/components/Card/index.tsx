import * as React from "react";
import { css } from "@emotion/css";
import { backgroundColorFocus, fontSizeLarge } from "../../constants";

type Props = {
  title: string;
  url: string;
};

export const Card = ({ title, url }: Props) => {
  return (
    <div className={style}>
      <a href={url}>
        <p>{title}</p>
      </a>
    </div>
  );
};

const style = css`
  margin: 2px;
  padding: 2px;
  padding-left: 20px;
  border-radius: 3px;
  font-size: ${fontSizeLarge};
  &:hover {
    background-color: ${backgroundColorFocus};
  }
  &:focus {
    background-color: ${backgroundColorFocus};
  }

  a:link,
  a:visited,
  a:hover,
  a:active {
    color: inherit;
    text-decoration: none;
  }
`;
