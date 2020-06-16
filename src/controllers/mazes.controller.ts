export class MazesController {

    solveMaze(mazeMatrix: Array<Array<string>>): Array<string> {

        if (!mazeMatrix || !mazeMatrix.length) {
            throw new Error('maze is invalid');
        }

        const entryColumnIndex = this.findMazeEntry(mazeMatrix[0]);

        if (entryColumnIndex === -1) {
            throw new Error("there is no entry in maze");
        }

        const result = new Array<string>();
        return result;
    }

    private findMazeEntry(firstRow: Array<string>): number {

        if (!firstRow.length) {
            throw new Error("there are no rows in maze");
        }

        const indexEntry = firstRow.indexOf(undefined);
        return indexEntry;
    }
}