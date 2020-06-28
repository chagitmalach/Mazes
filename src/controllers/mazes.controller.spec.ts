import { expect } from 'chai';
import 'mocha';

import { MazesController } from './mazes.controller';

describe('Mazes controller tests', () => {

    var mazeController = new MazesController();

    describe('SolveMaze tests', () => {

        it('mazeMatrix is null throw error', () => {

            var mazeMatrix = null;

            try {
                mazeController.solveMaze(mazeMatrix);
            }
            catch (err) {
                expect(err.message).eq('Maze is invalid');
            }

        });

        it('mazeMatrix is undefined throw error', () => {

            var mazeMatrix = undefined;

            try {
                mazeController.solveMaze(mazeMatrix);
            }
            catch (err) {
                expect(err.message).eq('Maze is invalid');
            }
        });

        it('mazeMatrix length in zero throw error', () => {

            var mazeMatrix = new Array<Array<string>>();

            try {
                mazeController.solveMaze(mazeMatrix);
            }
            catch (err) {
                expect(err.message).eq('Maze is invalid');
            }
        });

        it('there no rows in maze throw error', () => {

            var mazeMatrix = new Array<Array<string>>();
            mazeMatrix[0] = new Array<string>();

            try {
                mazeController.solveMaze(mazeMatrix);
            }
            catch (err) {
                expect(err.message).eq('The columns in this row are undefined');
            }
        });

        it('there no entry in the first row throw error', () => {

            var mazeMatrix = new Array<Array<string>>();
            mazeMatrix[0] = new Array<string>();
            mazeMatrix[0][0] = "01";
            mazeMatrix[0][1] = "012";

            try {
                mazeController.solveMaze(mazeMatrix);
            }
            catch (err) {
                expect(err.message).eq('There is no entry in maze');
            }
        });

        it('the columns in the last row are undefined throw error', () => {

            var mazeMatrix = new Array<Array<string>>();
            mazeMatrix[0] = new Array<string>();
            mazeMatrix[0][0] = "01";
            mazeMatrix[0][1] = "12";
            mazeMatrix[1] = new Array<string>();

            try {
                mazeController.solveMaze(mazeMatrix);
            }
            catch (err) {
                expect(err.message).eq('The columns in this row are undefined');
            }
        });

        it('there no entry in the first row throw error no entry in maze', () => {

            var mazeMatrix = new Array<Array<string>>();
            mazeMatrix[0] = new Array<string>();
            mazeMatrix[0][0] = "01";
            mazeMatrix[0][1] = '12';
            mazeMatrix[1] = new Array<string>();
            mazeMatrix[1][0] = "12";
            mazeMatrix[1][1] = "123";

            try {
                mazeController.solveMaze(mazeMatrix);
            }
            catch (err) {
                expect(err.message).eq('There is no exit in maze');
            }
        });

        it('findWay', () => {

            var mazeMatrix = new Array<Array<string>>();
            mazeMatrix[0] = new Array<string>();
            mazeMatrix[0][0] = '023';
            mazeMatrix[0][1] = '0';
            mazeMatrix[0][2] = '02';
            mazeMatrix[0][3] = '02';
            mazeMatrix[0][4] = '';
            mazeMatrix[0][5] = '02';
            mazeMatrix[0][6] = '02';
            mazeMatrix[0][7] = '02';
            mazeMatrix[0][8] = '01';
            mazeMatrix[1] = new Array<string>();
            mazeMatrix[1][0] = '03';
            mazeMatrix[1][1] = '';
            mazeMatrix[1][2] = '0';
            mazeMatrix[1][3] = '012';
            mazeMatrix[1][4] = '23';
            mazeMatrix[1][5] = '012';
            mazeMatrix[1][6] = '03';
            mazeMatrix[1][7] = '02';
            mazeMatrix[1][8] = '1';
            mazeMatrix[2] = new Array<string>();
            mazeMatrix[2][0] = '123';
            mazeMatrix[2][1] = '13';
            mazeMatrix[2][2] = '23';
            mazeMatrix[2][3] = '0';
            mazeMatrix[2][4] = '02';
            mazeMatrix[2][5] = '01';
            mazeMatrix[2][6] = '13';
            mazeMatrix[2][7] = '03';
            mazeMatrix[2][8] = '12';
            mazeMatrix[3] = new Array<string>();
            mazeMatrix[3][0] = '03';
            mazeMatrix[3][1] = '12';
            mazeMatrix[3][2] = '03';
            mazeMatrix[3][3] = '12';
            mazeMatrix[3][4] = '013';
            mazeMatrix[3][5] = '13';
            mazeMatrix[3][6] = '123';
            mazeMatrix[3][7] = '13';
            mazeMatrix[3][8] = '013';
            mazeMatrix[4] = new Array<string>();
            mazeMatrix[4][0] = '13';
            mazeMatrix[4][1] = '03';
            mazeMatrix[4][2] = '2';
            mazeMatrix[4][3] = '01';
            mazeMatrix[4][4] = '13';
            mazeMatrix[4][5] = '23';
            mazeMatrix[4][6] = '01';
            mazeMatrix[4][7] = '13';
            mazeMatrix[4][8] = '13';
            mazeMatrix[5] = new Array<string>();
            mazeMatrix[5][0] = '13';
            mazeMatrix[5][1] = '23';
            mazeMatrix[5][2] = '01';
            mazeMatrix[5][3] = '13';
            mazeMatrix[5][4] = '23';
            mazeMatrix[5][5] = '01';
            mazeMatrix[5][6] = '13';
            mazeMatrix[5][7] = '3';
            mazeMatrix[5][8] = '12';
            mazeMatrix[6] = new Array<string>();
            mazeMatrix[6][0] = '123';
            mazeMatrix[6][1] = '03';
            mazeMatrix[6][2] = '12';
            mazeMatrix[6][3] = '23';
            mazeMatrix[6][4] = '02';
            mazeMatrix[6][5] = '12';
            mazeMatrix[6][6] = '13';
            mazeMatrix[6][7] = '23';
            mazeMatrix[6][8] = '01';
            mazeMatrix[7] = new Array<string>();
            mazeMatrix[7][0] = '03';
            mazeMatrix[7][1] = '12';
            mazeMatrix[7][2] = '03';
            mazeMatrix[7][3] = '01';
            mazeMatrix[7][4] = '03';
            mazeMatrix[7][5] = '01';
            mazeMatrix[7][6] = '13';
            mazeMatrix[7][7] = '013';
            mazeMatrix[7][8] = '13';
            mazeMatrix[8] = new Array<string>();
            mazeMatrix[8][0] = '23';
            mazeMatrix[8][1] = '02';
            mazeMatrix[8][2] = '12';
            mazeMatrix[8][3] = '123';
            mazeMatrix[8][4] = '13';
            mazeMatrix[8][5] = '23';
            mazeMatrix[8][6] = '12';
            mazeMatrix[8][7] = '23';
            mazeMatrix[8][8] = '12';

            try {
                mazeController.solveMaze(mazeMatrix);
            }
            catch (err) {
                expect(err.message).eq('There is no exit in maze');
            }
        });
    });
});
