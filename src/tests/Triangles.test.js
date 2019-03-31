import { isMainThread } from 'worker_threads';
import * as TypeCheckers from '../helpers/TriangleTypeCheckers';

describe('Triangle is valid', () => {

    it('if sum of its two sides is greater than the third side', () => {
        expect(TypeCheckers.isValid(2, 3, 4)).toBe(true);
    });

    it('if all sides are greater than zero', () => {
        expect(TypeCheckers.isValid(-2, 3, 4)).toBe(false);
    });

    it('if none of sides are NaN', () => {
        expect(TypeCheckers.isValid(NaN, 3, 4)).toBe(false);
    });
});

describe('Triangle is Equilateral', () => {

    it('if all sides are equal', () => {
        expect(TypeCheckers.isEquilateral(1,2,2)).toBe(false);
        expect(TypeCheckers.isEquilateral(2,2,2)).toBe(true);
    })

});

describe('Triangle is Isosceles', () => {

    it('if only two sides are equal', () => {
        expect(TypeCheckers.isIsosceles(2,2,2)).toBe(false);
        expect(TypeCheckers.isIsosceles(2,3,4)).toBe(false);
        expect(TypeCheckers.isIsosceles(1,2,2)).toBe(true);
    })

});

describe('Triangle is Scalene', () => {

    it('if all three sides are different', () => {
        expect(TypeCheckers.isScalene(1,2,2)).toBe(false);
        expect(TypeCheckers.isScalene(2,3,4)).toBe(true);
    })

});