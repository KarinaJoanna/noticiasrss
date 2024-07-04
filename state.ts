// state.ts
export interface NewsItem {
    id: string;
    title: string;
    description: string;
  }
  
  export interface RootState {
    news: NewsItem[];
  }