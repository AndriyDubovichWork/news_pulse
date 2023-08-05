type MediaT = {
  type: string;
  subtype: string;
  caption: string;
  credit: string;
  url: string;
  height: number;
  width: number;
  'media-metadata': {
    url: string;
    width: number;
    height: number;
  }[];
};

type ArticleT = {
  abstract: string;
  adx_keywords: string;
  asset_id: number;
  byline: string;
  column: string | null;
  des_facet: string[];
  eta_id: number;
  geo_facet: string[];
  id: number;
  media: Media[];
  nytdsection: string;
  org_facet: string[];
  per_facet: string[];
  published_date: string;
  section: string;
  source: string;
  subsection: string;
  title: string;
  type: string;
  updated: string;
  uri: string;
  url: string;
};
