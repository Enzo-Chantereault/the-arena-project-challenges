"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.avoidTheWarriors = void 0;
class Coordinate {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    ;
}
;
/**
 * Always move straight ahead.
 * As soon as you encounter a warrior, take a side step to dodge them and resume your run.
 * You can represent your path as a map seen from above, stored in a two-dimensional array.
 * In this scenario, warriors are represented by 1s. Safe spaces are represented by 0s.
 * The beginning of the runway is always located at the bottom left.
 * The runway always ends at the top left.
 * If you are never forced to take a step sideways, return 0.
 * @param runway - a two-dimensional array
 * @returns the number of steps sideways you had to take to avoid the warriors
 */
const avoidTheWarriors = (runway) => {
    const startingPosition = new Coordinate(0, runway.length - 1);
    return avoidTheWarriorsRecurse(runway, startingPosition);
};
exports.avoidTheWarriors = avoidTheWarriors;
const avoidTheWarriorsRecurse = (runway, position) => {
    const isEnd = position.y == 0 && position.x == 0;
    const isEndOfLineOrWarriorAhead = position.y == 0 || runway[position.y - 1][position.x] === 1;
    if (isEnd) {
        return 0;
    }
    else if (isEndOfLineOrWarriorAhead) {
        const newPosition = new Coordinate(position.x == 0 ? position.x + 1 : position.x - 1, position.y);
        return 1 + avoidTheWarriorsRecurse(runway, newPosition);
    }
    const newPosition = new Coordinate(position.x, position.y - 1);
    return avoidTheWarriorsRecurse(runway, newPosition);
};
