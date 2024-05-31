const fs = require('fs')
const { JSDOM } = require('jsdom');

function getXML(fileName, verbose = false) {
    const xmlString = fs.readFileSync(`C:/Users/papaj/Documents/Work/Hill AFB/Code Examples/Javascript Unit Testing/Intermediate Example/test/${fileName}`, 'utf-8');

    // Create new JSDOM instance and extract window object from the jsdom instance.
    const { window } = new JSDOM();

    // Define a function to parse XML string to XML object
    function parseXML(xmlString) {
        const parser = new window.DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
        return xmlDoc;
    }

    // Convert XML string to XML object
    return parseXML(xmlString) 
}

module.exports = getXML;