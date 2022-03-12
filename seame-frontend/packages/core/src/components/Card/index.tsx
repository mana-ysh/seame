import * as React from "react";
import { css } from "@emotion/css";
import { backgroundColorHover } from "../../constants";

type Props = {
  title: string;
  url: string;
};

export const Card = ({ title, url }: Props) => {
  return (
    <div className={style}>
      <a href={url}>
        <h2>{title}</h2>
      </a>
    </div>
  );
};

const style = css`
  border-radius: 5px;
  &:hover {
    background-color: ${backgroundColorHover};
  }
  a:link,
  a:visited,
  a:hover,
  a:active {
    color: inherit;
    text-decoration: none;
  }
`;
