import { AxiosInstance } from 'axios';

export interface Movie {
    id?: string;
    [key: string]: any; // This allows for flexible properties until we define them
  }

export type ApiInstance = AxiosInstance;
