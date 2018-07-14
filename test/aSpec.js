const expect = require('chai').expect;
const obj = require('../src/Apipeline.js');


describe('pipeline', () => {
  it('does Apipeline func exist', () => {
    expect(obj.aPipeline).to.be.ok;
  });
  it('it logs out one set in finalArr', ()=>{
    expect(obj.aPipeline('set 1', obj.cb)).to.equal(1);
  });
  xit('it sets and multiply', ()=>{
    expect(pipeline('set 1 | mult 21')).to.equal(21);
  });
  xit('it sets and multiply and adds', ()=>{
    expect(pipeline('set 1 | mult 21 | add 2')).to.equal(23);
  });
});
