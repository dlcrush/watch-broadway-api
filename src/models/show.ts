import { performance } from "./performance";

export interface show {
  id: string;
  name: string;
  performances?: performance[];
  image_src?: string;
  hidden?: boolean;
}
