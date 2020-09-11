class Barrack {
    constructor(slots) {
        this._slots = slots || [];
    }

    //get
    get slots() {
        return this._slots;
    }

    //methods
    recruit(army) {
        this._slots.push(army);
        console.log(`'${army.name}' recruited `)
    }
    summon() {
        console.log("----------------Summon Armies----------------")
        console.log(this.slots);
    }
    disband(name) {
        for (let i = 0; i < this.slots.length; i++) {
            if (this.slots[i].name == name) {
                this.slots.splice(i, 1);
                console.log(`'${name}' disbanded`);
            }
        }
    }
    group() {
        console.log("----------------Grouping----------------")
        let knight = [];
        let spearman = [];
        let archer = [];
        this.slots.forEach(army => {
            switch (army.type) {
                case "Knight":
                    knight.push(army);
                    break;
                case "Spearman":
                    spearman.push(army);
                    break;
                case "Archer":
                    archer.push(army);
                    break;
            }
        });

        let temp = {
            Knight: knight,
            Spearman: spearman,
            Archer: archer
        };
        console.log(temp);
    }
}

module.exports = Barrack;