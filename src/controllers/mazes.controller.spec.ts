import { expect } from 'chai';
import 'mocha';

import { MazesController } from './mazes.controller';

describe('Mazes controller tests', () => {

    var mazeController = new MazesController();

    // describe('SolveMaze tests', () => {

    //     it('mazeMatrix is null throw error', () => {

    //         var mazeMatrix = null;

    //         try {
    //             mazeController.solveMaze(mazeMatrix);
    //         }
    //         catch (err) {
    //             expect(err.message).eq('Maze is invalid');
    //         }

    //     });

    //     it('mazeMatrix is undefined throw error', () => {

    //         var mazeMatrix = undefined;

    //         try {
    //             mazeController.solveMaze(mazeMatrix);
    //         }
    //         catch (err) {
    //             expect(err.message).eq('Maze is invalid');
    //         }
    //     });

    //     it('mazeMatrix length in zero throw error', () => {

    //         var mazeMatrix = new Array<Array<string>>();

    //         try {
    //             mazeController.solveMaze(mazeMatrix);
    //         }
    //         catch (err) {
    //             expect(err.message).eq('Maze is invalid');
    //         }
    //     });

    //     it('there no rows in maze throw error', () => {

    //         var mazeMatrix = new Array<Array<string>>();
    //         mazeMatrix[0] = new Array<string>();

    //         try {
    //             mazeController.solveMaze(mazeMatrix);
    //         }
    //         catch (err) {
    //             expect(err.message).eq('The columns in this row are undefined');
    //         }
    //     });

    //     it('there no entry in the first row throw error', () => {

    //         var mazeMatrix = new Array<Array<string>>();
    //         mazeMatrix[0] = new Array<string>();
    //         mazeMatrix[0][0] = "1";
    //         mazeMatrix[0][1] = "12";

    //         try {
    //             mazeController.solveMaze(mazeMatrix);
    //         }
    //         catch (err) {
    //             expect(err.message).eq('There is no entry in maze');
    //         }
    //     });

    //     it('the columns in the last row are undefined throw error', () => {

    //         var mazeMatrix = new Array<Array<string>>();
    //         mazeMatrix[0] = new Array<string>();
    //         mazeMatrix[0][0] = "1";
    //         mazeMatrix[0][1] = undefined;
    //         mazeMatrix[1] = new Array<string>();

    //         try {
    //             mazeController.solveMaze(mazeMatrix);
    //         }
    //         catch (err) {
    //             expect(err.message).eq('The columns in this row are undefined');
    //         }
    //     });

    //     it('there no entry in the first row throw error no entry in maze', () => {

    //         var mazeMatrix = new Array<Array<string>>();
    //         mazeMatrix[0] = new Array<string>();
    //         mazeMatrix[0][0] = "1";
    //         mazeMatrix[0][1] = undefined;
    //         mazeMatrix[1] = new Array<string>();
    //         mazeMatrix[1][0] = "1";
    //         mazeMatrix[1][1] = "12";

    //         try {
    //             mazeController.solveMaze(mazeMatrix);
    //         }
    //         catch (err) {
    //             expect(err.message).eq('There is no exit in maze');
    //         }
    //     });
    // });

    describe('solveMazeByDFS tests', () => {

        // 1 0 1 1
        // 1 0 0 1
        // 1 0 1 1
        // 1 0 0 1
        // 1 1 0 1
        // 0 1
        // 4 2
        it('findWay1', () => {

            var mazeMatrix = new Array<Array<number>>();
            mazeMatrix[0] = new Array<number>();
            mazeMatrix[0][0] = 1;
            mazeMatrix[0][1] = 0;
            mazeMatrix[0][2] = 1;
            mazeMatrix[0][3] = 1;
            mazeMatrix[1] = new Array<number>();
            mazeMatrix[1][0] = 1;
            mazeMatrix[1][1] = 0;
            mazeMatrix[1][2] = 0;
            mazeMatrix[1][3] = 1;
            mazeMatrix[2] = new Array<number>();
            mazeMatrix[2][0] = 1;
            mazeMatrix[2][1] = 0;
            mazeMatrix[2][2] = 1;
            mazeMatrix[2][3] = 1;
            mazeMatrix[3] = new Array<number>();
            mazeMatrix[3][0] = 1;
            mazeMatrix[3][1] = 0;
            mazeMatrix[3][2] = 0;
            mazeMatrix[3][3] = 1;
            mazeMatrix[4] = new Array<number>();
            mazeMatrix[4][0] = 1;
            mazeMatrix[4][1] = 1;
            mazeMatrix[4][2] = 0;
            mazeMatrix[4][3] = 1;

            let result = mazeController.solveMazeByDFS(mazeMatrix, { row: 0, column: 1 }, { row: 4, column: 2 });

            const expectedResult = new Array<Array<number>>();
            expectedResult[0] = new Array<number>();
            expectedResult[0][0] = 0;
            expectedResult[0][1] = 1;
            expectedResult[0][2] = 0;
            expectedResult[0][3] = 0;
            expectedResult[1] = new Array<number>();
            expectedResult[1][0] = 0;
            expectedResult[1][1] = 1;
            expectedResult[1][2] = 0;
            expectedResult[1][3] = 0;
            expectedResult[2] = new Array<number>();
            expectedResult[2][0] = 0;
            expectedResult[2][1] = 1;
            expectedResult[2][2] = 0;
            expectedResult[2][3] = 0;
            expectedResult[3] = new Array<number>();
            expectedResult[3][0] = 0;
            expectedResult[3][1] = 1;
            expectedResult[3][2] = 1;
            expectedResult[3][3] = 0;
            expectedResult[4] = new Array<number>();
            expectedResult[4][0] = 0;
            expectedResult[4][1] = 0;
            expectedResult[4][2] = 1;
            expectedResult[4][3] = 0;

            expect(result).eq(expectedResult);
        });

        // 0 1 0 0
        // 0 0 1 1 
        // 1 0 0 1
        // 1 1 1 0
        it('findWay2', () => {
2
            var mazeMatrix = new Array<Array<number>>();
            mazeMatrix[0] = new Array<number>();
            mazeMatrix[0][0] = 0;
            mazeMatrix[0][1] = 1;
            mazeMatrix[0][2] = 0;
            mazeMatrix[0][3] = 0;
            mazeMatrix[1] = new Array<number>();
            mazeMatrix[1][0] = 0;
            mazeMatrix[1][1] = 0;
            mazeMatrix[1][2] = 1;
            mazeMatrix[1][3] = 1;
            mazeMatrix[2] = new Array<number>();
            mazeMatrix[2][0] = 1;
            mazeMatrix[2][1] = 0;
            mazeMatrix[2][2] = 0;
            mazeMatrix[2][3] = 1;
            mazeMatrix[3] = new Array<number>();
            mazeMatrix[3][0] = 1;
            mazeMatrix[3][1] = 1;
            mazeMatrix[3][2] = 1;
            mazeMatrix[3][3] = 0;


            let result = mazeController.solveMazeByDFS(mazeMatrix, { row: 0, column: 0 }, { row: 2, column: 2 });

            const expectedResult = new Array<Array<number>>();
            expectedResult[0] = new Array<number>();
            expectedResult[0][0] = 1;
            expectedResult[0][1] = 0;
            expectedResult[0][2] = 0;
            expectedResult[0][3] = 0;
            expectedResult[1] = new Array<number>();
            expectedResult[1][0] = 1;
            expectedResult[1][1] = 1;
            expectedResult[1][2] = 0;
            expectedResult[1][3] = 0;
            expectedResult[2] = new Array<number>();
            expectedResult[2][0] = 0;
            expectedResult[2][1] = 1;
            expectedResult[2][2] = 1;
            expectedResult[2][3] = 0;
            expectedResult[3] = new Array<number>();
            expectedResult[3][0] = 0;
            expectedResult[3][1] = 0;
            expectedResult[3][2] = 0;
            expectedResult[3][3] = 0;


            expect(result).eq(expectedResult);
        });
    });
});