/* globals expect, describe, before, it */

const chai    = require('chai');
chai.use(require('chai-fs'));
const EPub = require('epub');
global.should = chai.should();
global.expect = chai.expect;
let metaData = {};

describe('ePub tests', () => {
  before(done => {
    const epub = new EPub('./assets/1.epub');
    epub.on('end', () => {
      metaData = epub.metadata;
      done();
    });
    epub.parse();
  });

  it('should be an object with keys and values', () => {
    console.log(metaData);
    expect(metaData).to.have.property('creator');
    expect(metaData.creator).to.not.equal('null');
    expect(metaData).to.have.property('creatorFileAs');
    expect(metaData).to.have.property('title');
    expect(metaData.title).to.not.equal('null');
    expect(metaData).to.have.property('language');
  });
});
