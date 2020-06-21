export class MazesController {

    solveMaze(mazeMatrix: Array<Array<string>>): Array<string> {

        if (!mazeMatrix || !mazeMatrix.length) {
            throw new Error("Maze is invalid");
        }

        const entryColumnIndex = this.findMazeEntry(mazeMatrix[0]);

        if (entryColumnIndex === -1) {
            throw new Error("There is no entry in maze");
        }

        const lastRowIndex = mazeMatrix.length - 1;
        const exitColumnIndex = this.findMazeEntry(mazeMatrix[lastRowIndex]);

        if (exitColumnIndex === -1) {
            throw new Error("There is no exit in maze");
        }

        const result = new Array<string>();
        return result;
    }

    private findMazeEntry(row: Array<string>): number {

        if (!row.length) {
            throw new Error('The columns in this row are undefined');
        }

        const indexEntry = row.indexOf(undefined);
        return indexEntry;
    }
}