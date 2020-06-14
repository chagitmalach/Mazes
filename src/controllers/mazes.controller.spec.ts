import { expect } from 'chai';
import 'mocha';

import { MazesController } from './mazes.controller';

describe('Mazes controller tests', () => {

    var mazeController = new MazesController();

    describe('SolveMaze tests', () => {

        it('mazeMatrix is null throw error maze is invalid', () => {

            var mazeMatrix = null;

            try {
                mazeController.solveMaze(mazeMatrix);
            }
            catch (err) {
                expect(err.message).eq('maze is invalid');
            }

        });

        it('mazeMatrix is undefined throw error maze is invalid', () => {

            var mazeMatrix = undefined;

            try {
                mazeController.solveMaze(mazeMatrix);
            }
            catch (err) {
                expect(err.message).eq('maze is invalid');
            }
        });

        it('mazeMatrix length in zero throw error maze is invalid', () => {

            var mazeMatrix = new Array<Array<string>>();

            try {
                mazeController.solveMaze(mazeMatrix);
            }
            catch (err) {
                expect(err.message).eq('maze is invalid');
            }
        });

        it('there no rows in maze throw error no rows in maze', () => {

            var mazeMatrix = new Array<Array<string>>();
            mazeMatrix[0] = new Array<string>();
           
            try {
                mazeController.solveMaze(mazeMatrix);
            }
            catch (err) {
                expect(err.message).eq('there are no rows in maze');
            }
        });

        it('there no entry in the first row throw error no entry in maze', () => {

            var mazeMatrix = new Array<Array<string>>();
            mazeMatrix[0] = new Array<string>();
            mazeMatrix[0][0] = "1";
            mazeMatrix[0][1] = "12";

            try {
                mazeController.solveMaze(mazeMatrix);
            }
            catch (err) {
                expect(err.message).eq('there is no entry in maze');
            }
        });
    });
});