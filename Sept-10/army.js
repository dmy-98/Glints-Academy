class Army {
    constructor(name, type, level = 4) {
        this._name = name;
        this._type = type;
        this._level = level;
    }

    //Get
    get name() {
        return this._name;
    }
    get type() {
        return this._type;
    }
    get level() {
        return this._level;
    }

    //Set
    set name(name) {
        this._name = name;
    }
    set setLevel(level) {
        this._level = level;
    }
    set setType(type) {
        this._type = type;
    }

    //Method
    talk() {
        console.log(`My name is ${this.name}. I am ${this.type}, level ${this.level}`);
    }
    training() {
        const maxLevel = 10;
        if (this.level < maxLevel) {
            this.setLevel = this.level + 1;
            console.log(`${this.name} level up!`);
        } else {
            console.log(`${this.name} reach maximum level`);
        }
    }
};



module.exports = Army;