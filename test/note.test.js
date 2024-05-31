class Artifact {
    constructor(xml, utils) {
        this.xml = xml;
        this.utils = utils;
    }
};

const getXML = require('./testUtility')
// const Artifact = require('../src/artifact')
global.Artifact = Artifact;
const Note = require('../src/note');
const ArtifactUtility = require('../src/artifactUtility');

describe('Note class', () => {
    describe('good xml file', () => {
        let goodXml = getXML('goodNote.xml');
        let goodObject = new Note(goodXml, ArtifactUtility);

        test('can read to', () => {
            expect(goodObject.to).toBe("You");
        })

        test('trying to set to raises error', () => {
            const t = () => {
                goodObject.to = 'blah';
            }
            expect(t).toThrow(Error);
            expect(t).toThrow('cannot set value of to');
        })

        test('can read from', () => {
            expect(goodObject.from).toBe("Me");
        })
        
    })

    describe('bad xml file', () => {
        let badXml = getXML('badNote.xml');
        let badObject = new Note(badXml, ArtifactUtility);

        test('reading to returns undefined', () => {
            expect(badObject.to).toBe(undefined);
        })
        
    })
    
})
