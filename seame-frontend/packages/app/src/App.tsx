import { initializeApp } from "firebase/app";
import { getFunctions, httpsCallable } from "firebase/functions";
import React, { useEffect, useState } from "react";
import { css } from "@emotion/css";
import { Card, SearchBar, SearchItem } from "@seame-frontend/core";
import { firebaseConfig } from "./config";

const app = initializeApp(firebaseConfig);
const functions = getFunctions(app, "asia-northeast1");
const seame_search = httpsCallable(functions, "seame_search");

function App() {
  const [searchResults, setSearchResults] = useState<SearchItem[]>();
  const [searchText, setSearchText] = useState<string>();
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };
  // FIXME: move to hooks
  useEffect(() => {
    const search = async () => {
      const results = await seame_search({ query: searchText });
      if (results) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setSearchResults(results.data.items);
      } else {
        setSearchResults([]);
      }
    };
    search();
  }, [searchText]);

  return (
    <div className={style}>
      <div className={imgStyle}>
        <img src="/assets/logo330.png" alt="logo"/>
      </div>
      <SearchBar id="app" placeholder="Input..." autoFocus={true} onChange={onChange} />
      {searchResults?.map((res) => (
        <Card key="item" title={res.title} url={res.url} />
      ))}
    </div>
  );
}

const style = css`
  /* centering */
  padding-top: 10%;
  padding-left: 10%;
  padding-right: 10%;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
`;

const imgStyle = css`
  padding: 10px;
  text-align: center;
`;

export default App;
