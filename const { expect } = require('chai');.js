const { expect } = require('chai');
const path = require('path');
const index = require(path.resolve(__dirname, 'index.js'));

// index.test.js

// Import the file to test

describe('index.js', () => {
    describe('batteryBatches', () => {
        it('should be an array with the correct values', () => {
            expect(index.batteryBatches).to.deep.equal([4, 5, 3, 4, 4, 6, 5]);
        });
    });

    describe('titleCased', () => {
        it('should return an array of title-cased tutorial names', () => {
            const expected = [
                "What Does The This Keyword Mean?",
                "What Is The Constructor Oo Pattern?",
                "Implementing Blockchain Web Api",
                "The Test Driven Development Workflow",
                "What Is Nan And How Can We Check For It",
                "What Is The Difference Between Stoppropagation And Preventdefault?",
                "Immutable State And Pure Functions",
                "What Is The Difference Between == And ===?",
                "What Is The Difference Between Event Capturing And Bubbling?",
                "What Is Jsonp?",
            ];
            expect(index.titleCased()).to.deep.equal(expected);
        });
    });
});