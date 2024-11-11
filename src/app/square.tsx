'use client'

import { FC } from "react";
import { randomValueFromEnum } from "./utils";

enum Ship {
    Small = "small",
    Destroyer = "destroyer",
    Submarine = "submarine",
    Aircraft = "aircraft",
    Battleship = "battleship",
}

enum Shot {
    Miss = "miss",
    Hit = "hit",
}

enum SquareValue {
    Nothing = "nothing",
    Small = Ship.Small,
    Destroyer = Ship.Destroyer,
    Submarine = Ship.Submarine,
    Aircraft = Ship.Aircraft,
    Battleship = Ship.Battleship,
    Miss = Shot.Miss,
    Hit = Shot.Hit,
}

export const randomSquareValue = () =>
    randomValueFromEnum(SquareValue) as SquareValue;


const SquareValueColorMap: Record<SquareValue, string> = {
    miss: 'gray',
    hit: 'red',
    small: 'dimgray',
    destroyer: 'steelblue',
    submarine: 'seagreen',
    aircraft: 'lightsalmon',
    battleship: 'indianred',
    nothing: 'transparent'
}

export class Square {
    position: [number, number];
    value: SquareValue;
    constructor(
        position: [number, number],
        value: SquareValue = SquareValue.Nothing
    ) {
        this.position = position;
        this.value = value;
    }
}

export const SquareRender: FC<{
    value: SquareValue
    position: [number, number]
    onClick?: () => void
}> = ({ value, onClick }) => {
    const background = SquareValueColorMap[value]
    return (
        <div
            className="square"
            style={{ background }}
            onClick={onClick}
        />
    )
}