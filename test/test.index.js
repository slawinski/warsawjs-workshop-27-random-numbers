"use strict";

const { expect } = require("chai");

const { arrOfRand, randNum } = require("../src/index");
const API = require("../src/index");

describe("arrOfRand", () => {
    it("should be defined", () => {
        expect(typeof arrOfRand).to.be.equal('function');
    });
    it("should return an array", () => {
        expect(Array.isArray(arrOfRand.call(API))).to.be.equal(true);
    });
    it("should default return array of 6", () => {
        expect(arrOfRand.call(API).length).to.be.equal(6);
    });
    it("should return array of 10", () => {
        expect(arrOfRand.call(API, 10).length).to.be.equal(10);
    });
    it("should return wtf", () => {
        const a = arrOfRand.call(API);
        const b = arrOfRand.call(API);
        expect(a).to.be.not.deep.equal(b);
    });
});

describe("randNum", () => {
    it("should return one random number", () => {
        expect(typeof randNum()).to.be.equal('number');
    });
    it("should return integer", () => {
        expect(Number.isInteger(randNum())).to.be.equal(true);
    });
    it("should return number within range 1-81", () => {
        expect(randNum()).to.be.within(1, 81);
    });
    it("should return number within range50-57", () => {
        expect(randNum(50, 57)).to.be.within(50, 57);
    });

    it("should return number within range 50-81", () => {
        expect(randNum(50)).to.be.within(50, 81);
    });
    it("should return number within range 1-150", () => {
        expect(randNum(null, 150)).to.be.within(1, 150);
    });
    it("should return number within range 1-150", () => {
        expect(randNum('300', '1500')).to.be.within(300, 1500);
    });

});
