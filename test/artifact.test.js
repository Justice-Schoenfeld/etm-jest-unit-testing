const getXML = require('./testUtility')
const Artifact = require('../src/artifact');
const ArtifactUtility = require('../src/artifactUtility')

// const { beforeEach, afterEach } = require('node:test');


describe('Artifact class', () => {
    describe('good xml file', () => {
        let goodXml = getXML('goodNote.xml');
        let goodObject = new Artifact(goodXml, ArtifactUtility);

        test('can read title', () => {
            expect(goodObject.title).toBe("Reminder");
        })

        test('can set title', () => {
            goodObject.title = 'ALERT!!';
            expect(goodObject.title).toBe('ALERT!!');
        })

        test('can read body', () => {
            expect(goodObject.body).toBe("Don't forget me this weekend!");
        })
    })

    describe('bad xml file', () => {
        let badXml = getXML('badNote.xml');
        let badObject = new Artifact(badXml, ArtifactUtility);

        test('reading title returns undefined', () => {
            expect(badObject.title).toBe(undefined);
        })

        test('attempting to set title when undefined raises error', () => {
            const t = () => {
                badObject.title = 'blah';
            }
            expect(t).toThrow(Error);
            expect(t).toThrow('Title is undefined, cannot set undefined property');
        })

        test('reading body retuns undefined', () => {
            expect(badObject.body).toBe(undefined);
        })
    })
    
})
