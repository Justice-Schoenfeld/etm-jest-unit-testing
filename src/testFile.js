// const ArtifactUtility = require("./artifactUtility");

async function showXML() {
    let xml = await getXML("note.xml");
    console.log(xml);

    let noteObject = new Note(xml, ArtifactUtility);
    console.log('object', noteObject);
    console.log('xml', noteObject.xml);
    console.log('Title:', noteObject.title);
    console.log('Body:', noteObject.body)
    console.log('To:', noteObject.to);
    console.log('From:', noteObject.from);
    for (let step of noteObject.steps) {
        console.log('\tStep:', step.number, ':', step.description, '-', step.outcome);
    }
}


async function getXML(filePath) {
    return fetch(filePath)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(xmlText => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText,
                                            'text/xml');
        return xmlDoc;
    })
    .catch(error => {
        console.error(`There was a problem with
                       the fetch operation:`, error);
    });
}



