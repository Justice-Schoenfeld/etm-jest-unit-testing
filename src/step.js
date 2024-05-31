class Step {
    #number = null;
    #description = null;
    #outcome = null;
    
    constructor (xml, utilities) {
        this.xml = xml;
        this.updated = false;
        this.utils = utilities;
    }

    #extractNumber() {
        this.#number = (this.utils.isUndefinedInXml(this.xml, 'number')) ? undefined : this.xml.getElementsByTagName('number')[0];
    }

    get number() {
        this.utils.extractIfNull(this, this.#number, this.#extractNumber);
        return this.#number.textContent;
    }

    set number(newNumber) {
        this.utils.extractIfNull(this, this.#number, this.#extractNumber);
        this.updated = true;
        this.#number.textContent = newNumber;
    }

    #extractDescription() {
        this.#description = (this.utils.isUndefinedInXml(this.xml, 'description')) ? undefined : this.xml.getElementsByTagName('description')[0];
    }

    get description() {
        this.utils.extractIfNull(this, this.#description, this.#extractDescription);
        return this.#description.textContent;
    }

    set description(newDescription) {
        this.utils.extractIfNull(this, this.#description, this.#extractDescription);
        this.updated = true;
        this.#description.textContent = newDescription;
    }

    #extractOutcome() {
        this.#outcome = (this.utils.isUndefinedInXml(this.xml, 'outcome')) ? undefined : this.xml.getElementsByTagName('outcome')[0];
    }

    get outcome() {
        this.utils.extractIfNull(this, this.#outcome, this.#extractOutcome);
        return this.#outcome.textContent;
    }

    set outcome(newNumber) {
        this.utils.extractIfNull(this, this.#outcome, this.#extractOutcome);
        this.updated = true;
        this.#outcome.textContent = newNumber;
    }
}

module.exports = Step;