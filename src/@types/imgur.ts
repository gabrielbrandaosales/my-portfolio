export interface URL {
  data: string;
  status: number;
  statusText: string;
  headers: URLHeaders;
  config: Config;
  request: Request;
}

export interface Config {
  transitional: Transitional;
  adapter: string[];
  transformRequest: null[];
  transformResponse: null[];
  timeout: number;
  xsrfCookieName: string;
  xsrfHeaderName: string;
  maxContentLength: number;
  maxBodyLength: number;
  env: Request;
  headers: ConfigHeaders;
  baseURL: string;
  method: string;
  url: string;
}

export interface Request {}

export interface ConfigHeaders {
  Accept: string;
}

export interface Transitional {
  silentJSONParsing: boolean;
  forcedJSONParsing: boolean;
  clarifyTimeoutError: boolean;
}

export interface URLHeaders {
  connection: string;
  'content-length': string;
  date: string;
  etag: string;
  'keep-alive': string;
}
