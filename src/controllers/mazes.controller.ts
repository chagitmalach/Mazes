export class MazesController {

    solveMaze(mazeMatrix: Array<Array<string>>): Array<string> {

        if (!mazeMatrix || !mazeMatrix.length) {
            return undefined;
        }

        const entryColumnIndex = this.findMazeEntry(mazeMatrix[0]);

        if (entryColumnIndex === -1) {
            throw new Error();
        }

        const result = new Array<string>();
        return result;
    }

    private findMazeEntry(firstRow: Array<string>): number {

        if (!firstRow.length) {
            throw new Error();
        }

        const indexEntry = firstRow.findIndex(val => val == undefined);
        return indexEntry;
    }
}