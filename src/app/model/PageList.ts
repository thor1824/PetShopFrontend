export interface PageList<T> {
  data: T[];
  itemsTotal: number;
  itemsPrPage: number;
  pageIndex: number;
  pageTotal: number;
}
