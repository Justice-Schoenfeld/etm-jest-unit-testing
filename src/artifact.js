class Artifact{
    #title = null;
    #body = null;

    constructor(xml, utilities){
        this.xml = xml;
        this.updated = false;
        this.utils = utilities
    }

    #extractTitle() {
        this.#title = (this.utils.isUndefinedInXml(this.xml, 'title')) ?  undefined : this.xml.getElementsByTagName('title')[0];
    }

    get title() {
        this.utils.extractIfNull(this, this.#title, this.#extractTitle);
        return (this.#title === undefined) ? undefined : this.#title.textContent;
    }

    set title(newTitle) {
        this.utils.extractIfNull(this, this.#title, this.#extractTitle);
        if (this.#title !== undefined) {
            this.updated = true;
            this.#title.textContent = newTitle;
        } else {
            throw new Error('Title is undefined, cannot set undefined property');
        }

    }

    #extractBody() {
        this.#body = (this.utils.isUndefinedInXml(this.xml, 'body')) ? undefined : this.xml.getElementsByTagName('body')[0];
    }

    get body() {
        this.utils.extractIfNull(this, this.#body, this.#extractBody);
        return (this.#body === undefined) ? undefined : this.#body.textContent;
    }

}

module.exports = Artifact;