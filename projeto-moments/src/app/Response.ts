export interface Response<T> {
  created_at: string;
  message?: string;
  data: T;
}
