import { FC } from "react";
import { randomSquareValue, Square, SquareRender } from "./square";
import { randomValueFromEnum } from "./utils";

export class Board {
    private size: [number, number];
    private _squares: Square[][];
    constructor(width: number, height: number) {
        this.size = [Math.ceil(width), Math.ceil(height)];
        this._squares = Array.from({ length: this.height }, (_, y) =>
            Array.from({ length: this.width }, (_, x) => new Square([x, y], randomSquareValue()))
        );
    }

    get width() {
        return this.size[0]
    }
    get height() {
        return this.size[1]
    }

    getSquare(position: [number, number]) {
        const [x, y] = position;
        return this._squares[y][x];
    }

    get squares() {
        return this._squares;
    }
}

export const BoardRender: FC<{ size: [number, number] }> = ({ size: [width, height] }) => {
    const board = new Board(width, height)
    return (<div className="board">
        {board.squares.map(
            (line, y) => (
                <div className="line" key={y}>
                    {
                        line.map(
                            (square, x) => <SquareRender key={`${x}-${y}`} value={square.value} positon={square.position} />
                        )
                    }
                </div>
            )
        )}
    </div>)
}