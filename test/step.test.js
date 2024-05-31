const getXML = require('./testUtility')
const Step = require('../src/step');
const ArtifactUtility = require('../src/artifactUtility')


describe('Step class', () => {
    let goodXml = getXML('goodNote.xml').getElementsByTagName('step')[0];
    console.log(goodXml);
    let goodObject = new Step(goodXml, ArtifactUtility);
    test('can get step number', () => {
        expect(goodObject.number).toBe("1")
    })
})