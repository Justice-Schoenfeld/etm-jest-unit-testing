const getXML = require('./testUtility')
const Note = require('../src/note');
const ArtifactUtility = require('../src/artifactUtility');


// jest.mock('Artifact', () => {
//     return jest.fn().mockImplementation(() => {
//       return {
//         utils: 'hi'
//       };
//     });
//   });



// Mock the ParentClass
jest.mock('../src/artifact', () => {
    return class Artifact {
      constructor(xml, utils) {
        this.xml = xml;
        this.utils = utils;
      }
    };
  });




describe('Note class', () => {
    describe('good xml file', () => {
        let goodXml = getXML('goodNote.xml');
        let goodObject = new Note(goodXml, ArtifactUtility);

        test('can read to', () => {
            expect(goodObject.to).toBe("You");
        })
        
    })

    // describe('bad xml file', () => {
    //     let badXml = getXML('badNote.xml');
    //     let badObject = new Note(badXml, ArtifactUtility);

        
    // })
    
})
