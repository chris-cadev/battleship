'use client'

import './battleship.css';
import { Board } from './board';

const DEFAULT_WIDTH = 10;
const DEFAULT_HEIGHT = DEFAULT_WIDTH;

export default function Home() {
  return (
    <main>
      <Board width={DEFAULT_WIDTH} height={DEFAULT_HEIGHT} />
      <Board width={DEFAULT_WIDTH} height={DEFAULT_HEIGHT} />
    </main>
  );
}
