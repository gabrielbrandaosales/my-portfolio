import { Repos } from './repos';

export interface ScreenshotResponse {
  data: string;
  status: number;
  statusText: string;
}

export interface ReposWithURL {
  status: string;
  value: Repos;
}
