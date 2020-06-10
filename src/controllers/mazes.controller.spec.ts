import { expect } from 'chai';
import 'mocha';

import { MazesController } from './mazes.controller';

describe('Mazes controller tests', () => {

    var mazeController = new MazesController();

    describe('SolveMaze tests', () => {

        it('mazeMatrix is null return undefined', () => {

            var mazeMatrix = null;

            var result = mazeController.solveMaze(mazeMatrix);

            expect(result).to.undefined;
        });

        it('mazeMatrix is undefined return undefined', () => {

            var mazeMatrix = undefined;

            var result = mazeController.solveMaze(mazeMatrix);

            expect(result).to.undefined;
        });

        it('mazeMatrix length in zero return undefined', () => {

            var mazeMatrix = new Array<Array<string>>();

            var result = mazeController.solveMaze(mazeMatrix);

            expect(result).to.undefined;
        });

    });
});