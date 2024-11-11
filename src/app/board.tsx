'use client'

import { FC } from "react";
import { randomSquareValue, Square, SquareRender } from "./square";

export class Board {
    private size: [number, number];
    private _squares: Square[][];
    constructor(width: number, height: number) {
        this.size = [Math.ceil(width), Math.ceil(height)];
        this._squares = Array.from(
            { length: this.height }, (_, y) =>
            Array.from({ length: this.width }, (_, x) =>
                new Square([x, y], randomSquareValue())
            )
        );
    }

    get width() {
        return this.size[0]
    }
    get height() {
        return this.size[1]
    }

    handleSquareClick = (square: Square) =>
        () => {
            const [x, y] = square.position;
            square.value = randomSquareValue();
            this._squares[y][x] = square;
        }

    get squares() {
        return this._squares;
    }
}

export const BoardRender: FC<{
    squares: Square[][]
    onSquareClick: (square: Square) => () => void,
}> = ({
    squares,
    onSquareClick
}) => {
        return (<div className="board">
            {squares.map(
                (line, y) => (
                    <div className="line" key={y}>
                        {
                            line.map(
                                (square, x) =>
                                    <SquareRender
                                        key={`${x}-${y}`}
                                        value={square.value}
                                        position={square.position}
                                        onClick={onSquareClick(square)}
                                    />
                            )
                        }
                    </div>
                )
            )}
        </div>)
    }