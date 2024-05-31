class Note extends Artifact {
    #to = null;
    #from = null;
    #steps = null;
    #stepsExtracted = false;

    constructor (xml, utilities) {
        super(xml, utilities)
    }

    #extractTo(){
        this.#to = (this.utils.isUndefinedInXml(this.xml, 'to')) ? undefined : this.xml.getElementsByTagName('to')[0];
    }

    get to(){
        this.utils.extractIfNull(this, this.#to, this.#extractTo);
        return (this.#to === undefined) ? undefined : this.#to.textContent;
    }

    set to(value){
        throw new Error('cannot set value of to');
    }

    #extractFrom(){
        this.#from = (this.utils.isUndefinedInXml(this.xml, 'from')) ? undefined : this.xml.getElementsByTagName('from')[0];
    }

    get from(){
        this.utils.extractIfNull(this, this.#from, this.#extractFrom);
        return (this.#from === undefined) ? undefined : this.#from.textContent;
    }

    set from(value){
        throw new Error('cannot set value of from');
    }

    #extractSteps(){
        this.#steps = (this.utils.isUndefinedInXml(this.xml, 'step')) ? undefined : this.xml.getElementsByTagName('step');
    }

    get steps(){
        this.utils.extractIfNull(this, this.#steps, this.#extractSteps);
        if (this.#steps !== undefined) {
            if (!this.#stepsExtracted) {
                this.#stepsExtracted = true;
                let tempSteps = []
                for (let step of this.#steps) {
                    tempSteps.push(new Step(step, this.utils));
                }
                this.#steps = tempSteps;
            }
            return this.#steps;
        } else {
            return undefined;
        }
        
    }

    set steps(value){
        throw new Error('cannot set value of from');
    }
}

module.exports = Note;