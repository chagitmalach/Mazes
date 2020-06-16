import { expect, assert } from 'chai';
import 'mocha';

import { MazesController } from './mazes.controller';

describe('Mazes controller tests', () => {

    var mazeController = new MazesController();

    describe('SolveMaze tests', () => {

        it('mazeMatrix is null throw error maze is invalid', () => {

            var mazeMatrix = null;

            const solveMazeFn = mazeController.solveMaze.bind(mazeController, mazeMatrix);

            expect(solveMazeFn).to.throw('maze is invalid');

        });

        it('mazeMatrix is undefined throw error maze is invalid', () => {

            var mazeMatrix = undefined;

            const solveMazeFn = mazeController.solveMaze.bind(mazeController, mazeMatrix);

            expect(solveMazeFn).to.throw('maze is invalid');
        });

        it('mazeMatrix length in zero throw error maze is invalid', () => {

            var mazeMatrix = new Array<Array<string>>();

            const solveMazeFn = mazeController.solveMaze.bind(mazeController, mazeMatrix);

            expect(solveMazeFn).to.throw('maze is invalid');
        });

        it('there no rows in maze throw error no rows in maze', () => {

            var mazeMatrix = new Array<Array<string>>();
            mazeMatrix[0] = new Array<string>();

            const solveMazeFn = mazeController.solveMaze.bind(mazeController, mazeMatrix);

            expect(solveMazeFn).to.throw('there are no rows in maze');
        });

        it('there no entry in the first row throw error no entry in maze', () => {

            var mazeMatrix = new Array<Array<string>>();
            mazeMatrix[0] = new Array<string>();
            mazeMatrix[0][0] = "1";
            mazeMatrix[0][1] = "12";

            const solveMazeFn = mazeController.solveMaze.bind(mazeController, mazeMatrix);

            expect(solveMazeFn).to.throw('there is no entry in maze');
          
        });
    });
});