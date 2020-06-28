export class MazesController {

    mazeMatrix: Array<Array<string>>;
    mazeWay: Array<string>;

    solveMaze(mazeMatrix: Array<Array<string>>): Array<string> {

        if (!mazeMatrix || !mazeMatrix.length) {
            throw new Error('Maze is invalid');
        }

        this.mazeMatrix = mazeMatrix;
        const entryColumnIndex = this.findMazeEntry(0, '0');

        if (entryColumnIndex === -1) {
            throw new Error('There is no entry in maze');
        }

        const exitColumnIndex = this.findMazeEntry(mazeMatrix.length - 1, '2');

        if (exitColumnIndex === -1) {
            throw new Error('There is no exit in maze');
        }

        this.mazeWay = new Array<string>();

        this.findWay(0, entryColumnIndex, 1);
        return this.mazeWay;
    }

    private findMazeEntry(rowIndex: number, searchBlockNumber: string): number {

        const row = this.mazeMatrix[rowIndex];

        if (!row.length) {
            throw new Error('The columns in this row are undefined');
        }

        let indexEntry = -1;

        row.forEach((col, ind) => {

            if (col.indexOf(searchBlockNumber) === -1)
                indexEntry = ind;
        });

        return indexEntry;
    }

    private findWay(row: number, col: number, blockNumber: number) {

        if (this.mazeMatrix.length === row ||
            this.mazeMatrix[row].length === col ||
            this.mazeMatrix[row][col].indexOf(blockNumber.toString()) !== -1) {
            return this.findWay(row, col, ++blockNumber);
        }

        this.mazeWay.push(`${row},${col}`);

        if (blockNumber === 0 || blockNumber === 2) {

            return this.findWay(++row, col, blockNumber);
        }

        if (blockNumber === 1 || blockNumber === 3) {

            return this.findWay(row, ++col, blockNumber);
        }

    }
}