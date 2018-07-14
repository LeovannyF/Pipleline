const expect = require('chai').expect;
const pipeline = require('../src/pipeline.js');

describe('pipeline', () => {
  it('does pipeline func exist', () => {
    expect(pipeline).to.be.ok;
  });
  it('it sets', ()=>{
    expect(pipeline('set 1')).to.equal(1);
  });
  it('it sets and multiply', ()=>{
    expect(pipeline('set 1 | mult 21')).to.equal(21);
  });
  it('it sets and multiply and adds', ()=>{
    expect(pipeline('set 1 | mult 21 | add 2')).to.equal(23);
  });
});
