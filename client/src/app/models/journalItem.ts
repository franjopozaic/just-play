import { Song } from './song';

export interface JournalItem {
  tags: string[];
  note: string;
  songs: Song[];
}
