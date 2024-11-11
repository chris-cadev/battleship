import { useCallback, useState } from "react";
import { randomSquareValue, type SquareType, SquareRender } from "./square";

export const Board: React.FC<{ width: number; height: number }> = ({ width, height }) => {
    const [squares, setSquares] = useState<SquareType[][]>(() =>
        Array.from({ length: height }, (_, y) =>
            Array.from({ length: width }, (_, x) => ({ position: [x, y], value: randomSquareValue() })
            )
        )
    );

    const handleSquareClick = useCallback(
        (square: SquareType) => () => {
            const [x, y] = square.position;
            const updatedSquares = squares.map((row, rowIndex) =>
                row.map<SquareType>((s, colIndex) =>
                    rowIndex === y && colIndex === x
                        ? { position: [x, y], value: randomSquareValue() }
                        : s
                )
            );
            setSquares(updatedSquares);
        },
        [squares]
    );

    return (
        <div className="board">
            {squares.map((line, y) => (
                <div className="line" key={y}>
                    {line.map((square, x) => (
                        <SquareRender
                            key={`${x}-${y}`}
                            value={square.value}
                            position={square.position}
                            onClick={handleSquareClick(square)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};
