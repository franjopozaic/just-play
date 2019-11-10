import { Piece } from "./models";

export class DummyDB {
  pieces: Piece[];

  constructor() {
    this.pieces = [
      { id: 1, links: [], note: "Sviraj", tags: [], title: "Jebeno" }
    ];
  }

  getAll() {
    return this.pieces;
  }

  getPiece(id: number) {
    return this.pieces.find(x => (x.id = id));
  }

  savePiece(piece: Piece) {
    this.pieces.push(piece);
  }
}
