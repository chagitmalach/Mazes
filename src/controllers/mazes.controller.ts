export class MazesController {

    mazeMatrix: Array<Array<number>>;
    result: Array<Array<number>>;
    endRow: number;
    endCol: number;
    rowLength: number;
    colLength: number;
    isComplete = false;

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

    solveMazeByDFS(mazeMatrix: Array<Array<number>>, startPoint: any, endPoint: any): Array<Array<number>> {

        this.checkParameters(mazeMatrix, startPoint, endPoint);

        this.mazeMatrix = mazeMatrix;

        this.rowLength = mazeMatrix.length;
        this.colLength = mazeMatrix[0].length;

        let i = startPoint.row;
        let j = startPoint.column;

        this.endRow = endPoint.row;
        this.endCol = endPoint.column;

        this.result = new Array<Array<number>>();

        for (let index = 0; index < this.rowLength; index++) {

            this.result[index] = new Array<number>();
            for (let indexCol = 0; indexCol < this.colLength; indexCol++) {
                this.result[index][indexCol] = 0;
            }
        }

        this.findWay(i, j);
        return this.result;
    }

    private findWay(i: number, j: number) {

        this.addPlace(i, j);

        if (i === this.endRow && j === this.endCol) {
            this.isComplete = true;
            return;
        }

        let ind = j;
        ind++;
        if (ind < this.colLength && !this.mazeMatrix[i][ind] && !this.result[i][ind]) {
            this.findWay(i, ind);
        }

        ind = i;
        ind++;
        if (ind < this.rowLength && !this.mazeMatrix[ind][j] && !this.result[ind][j]) {
            this.findWay(ind, j);
        }

        ind = j;
        ind--;
        if (ind >= 0 && !this.mazeMatrix[i][ind] && !this.result[i][ind]) {
            this.findWay(i, ind);
        }

        ind = i;
        ind--;
        if (ind >= 0 && !this.mazeMatrix[ind][j] && !this.result[ind][j]) {
            this.findWay(ind, j);
        }

        if (!this.isComplete) {

            this.removePlace(i, j);
        }
    }

    private addPlace(i: number, j: number) {

        this.result[i][j] = 1;
    }

    private removePlace(i: number, j: number) {

        this.result[i][j] = 0;
    }

    private checkParameters(mazeMatrix: Array<Array<number>>, startPoint: any, endPoint: any) {

    }

    private findMazeEntry(row: Array<string>): number {

        if (!row.length) {
            throw new Error('The columns in this row are undefined');
        }

        const indexEntry = row.indexOf(undefined);
        return indexEntry;
    }
}