export interface CreateBookInterface {
  id?: string;
  title: string;
  category: string;
  authorId: number;
  penerbit?: string;
  thn_terbit?: number;
  image?: string;
  createdAt: Date | string;
  updateAt: Date | string;
}