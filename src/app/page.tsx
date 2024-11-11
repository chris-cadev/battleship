import './battleship.css';
import { BoardRender } from './board';

export default function Home() {
  return (
    <main>
      <BoardRender size={[10, 10]} />
    </main>
  );
}
