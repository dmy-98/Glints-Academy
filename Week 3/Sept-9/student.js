class Student {
    constructor(studentId) {
        this._name = "";
        this._age = 0;
        this._dateOfBirth = "";
        this._gender = "";
        this._studentId = studentId;
        this._hobbies = [];
    }

    set name(name) {
        if (typeof name === "string") {
            this._name = name;
            console.log(`set '${name}' to Name`);
        } else {
            console.log(`'${name}' should a text`);
        }

    }

    set age(age) {
        if (typeof age === "number") {
            this._age = age;
            console.log(`set '${age}' to Age`);
        } else {
            console.log(`'${age}' should a number`)
        }
    }

    set dateOfBirth(dateOfBirth) {
        if (typeof dateOfBirth === "string") {
            this._dateOfBirth = dateOfBirth;
            console.log(`set '${dateOfBirth}' to Birth Date`);
        } else {
            console.log(`'${date}' should a text`);
        }
    }

    set gender(gender) {
        if (typeof gender === "string") {
            if (gender == "Male") {
                this._gender = gender;
                console.log(`set '${gender}' to Gender`);
            } else if (gender == "Female") {
                this._gender = gender;
                console.log(`set '${gender}' to Gender`);
            } else {
                console.log("Gender only receive 'Male' or 'Female'")
            }
        } else {
            console.log(`'${gender}' should a text`);
        }
    }

    addHobby(hobby) {
        if (typeof hobby === "string") {
            this._hobbies.push(hobby);
            console.log(`Add '${hobby}' to Hobby`);
        } else {
            console.log(`'${hobby}' should a text`);
        }
    }

    removeHobby(hobby) {
        let hobbyFound = false;
        if (typeof hobby === "string") {
            for (let i = 0; i < this._hobbies.length; i++) {
                if (hobby == this._hobbies[i]) {
                    this._hobbies.splice(i, 1)
                    hobbyFound = true;
                    console.log(`Remove '${hobby}' from Hobbies`);
                }
            }
            if (hobbyFound == false) {
                console.log(`'${hobby}' not found in hobbies`)
            }
        } else {
            console.log(`'${hobby}' should a text`);
        }
    }

    get data() {
        return `
        {
            Name: ${this._name},
            Age: ${this._age},
            Birth Date: ${this._dateOfBirth},
            Gender: ${this._gender},
            Student Id: ${this._studentId},
            Hobbies: ${this._hobbies}
        }`
    }
}

const satu = new Student('12345');
console.log(satu.data);
satu.name = "Daniel";
satu.age = 21;
satu.dateOfBirth = "17 Agustus 1998";
satu.gender = "Male";
satu.addHobby("Dancing");
satu.addHobby("Eating");
satu.addHobby("Listening Music");
console.log(satu.data);
satu.removeHobby("Eating")
console.log(satu.data);