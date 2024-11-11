'use client'

import './battleship.css';
import { Board, BoardRender } from './board';

const DEFAULT_WIDTH = 20;
const DEFAULT_HEIGHT = DEFAULT_WIDTH;

const board = new Board(DEFAULT_WIDTH, DEFAULT_HEIGHT);

export default function Home() {
  return (
    <main>
      <BoardRender squares={board.squares} onSquareClick={board.handleSquareClick} />
    </main>
  );
}
