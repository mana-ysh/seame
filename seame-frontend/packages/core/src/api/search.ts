import algoliasearch from "algoliasearch";

export interface SearchResponse {
  items: SearchItem[];
}

export interface SearchItem {
  title: string;
  url: string;
}

type AlgoliaHit = {
  title: string;
  url: string;
};

export async function request(
  query: string,
  app_id: string,
  api_key: string,
  index_name: string
): Promise<SearchResponse> {
  const client = algoliasearch(app_id, api_key);
  const index = client.initIndex(index_name);
  const response = await index.search<AlgoliaHit>(query);
  const items: SearchItem[] = [];
  response.hits.forEach((hit) => {
    items.push({
      title: hit.title,
      url: hit.url,
    });
  });
  return {
    items: items,
  };
}
