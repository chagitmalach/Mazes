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
            mazeMatrix[0][0] = "1";
            mazeMatrix[0][1] = "12";

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
            mazeMatrix[0][0] = "1";
            mazeMatrix[0][1] = undefined;
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
            mazeMatrix[0][0] = "1";
            mazeMatrix[0][1] = undefined;
            mazeMatrix[1] = new Array<string>();
            mazeMatrix[1][0] = "1";
            mazeMatrix[1][1] = "12";

            try {
                mazeController.solveMaze(mazeMatrix);
            }
            catch (err) {
                expect(err.message).eq('There is no exit in maze');
            }
        });
    });
});