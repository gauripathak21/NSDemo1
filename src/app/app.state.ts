import { Product } from './component/product/product.model';

export interface AppState {
  readonly product: Product[];
}