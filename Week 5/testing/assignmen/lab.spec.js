const { createArray } = require("lab1.js");

describe("here i test some function",function(){
    it('test that the return value of type array',()=>{
        expect(createArray).toEqual(jasmine.any(Array))
    })
})

