export interface Repos {
  id: number;
  name: string;
  url: string | null;
  private: boolean;
  html_url: string;
  description: null;
  fork: boolean;
  homepage: string | null;
  language: string;
  has_wiki: boolean;
  archived: boolean;
  disabled: boolean;
  license: null;
  topics: any[];
  visibility: string;
  default_branch: string;
  screenshot: string;
}
