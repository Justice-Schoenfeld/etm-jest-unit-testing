class ArtifactUtility{
    static extractIfNull(context, property, extractionFunction) {
        if (property === null){
            extractionFunction.call(context)
        }
    }

    static isUndefinedInXml(xml, property) {
        return xml.getElementsByTagName(property).length == 0;
    }
}

module.exports = ArtifactUtility;
