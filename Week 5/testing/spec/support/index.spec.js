const { sum } = require("../../index.js");

describe("here i test some function",function(){
    it('Test if the parameters are numbers, should return summtion correctly', ()=>{
        expect(sum(5,6).toBe(11))
        expect(sum(5,6)).toBeGreaterThan(10)
    })

    it('Test if the params are negative numbers ,should return negative numbers',()=>{
        expect(sum(-3,-2)).toBe(-5)
    })

    it('Test if the params are negative numbers ,should return negative numbers 2',()=>{
        expect(sum(-3,-2)).toBeLessThanOrEqual(-4)
    })

    it('Test if params are string ,should throw error',()=>{
        expect(function(){sum('Ali , omar')}).toThrow()
    })
})