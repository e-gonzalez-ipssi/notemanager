export interface Note {
  _id: number;
  title: string;
  author: string;
  anonym: boolean;
  tags: string[];
  text: string;
  image?: string;
  creation_date: string;
}
