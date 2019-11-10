export type Piece = {
  id: number;
  title: string;
  note: string;
  tags: Tag[];
  links: Link[];
};

type Tag = string;
type Link = string;
