const fs = require('fs');

class ToDo {
    constructor(id, task, tag, status, createdAt) {
        this.id = id;
        this.task = task;
        this.status = status;
        this.tag = tag;
        this.createdAt = createdAt;
        this.completedAt = completedAt;
    }

    static list() {
        const data = fs.readFileSync('./data.json', 'utf8');
        const parseData = JSON.parse(data);

        let tempData = [];
        parseData.forEach(data => {
            const { id, name, status, tag, createdAt, completedAt } = data;
            tempData.push(new Product(id, name, status, tag, new Date(createdAt), completedAt));
        });
        return tempData;
    }
    static add(params) {
        // console.log("List");
        const tasks = this.list();
        // const name = params[0];
        // const category = params[1];
        // const status = params[2];

        //Destructuring Array
        const [name, category, status] = params;

        const nextId = tasks[tasks.length - 1].id + 1;
        const tempObject = {
            id: nextId,
            name: name,
            status: (status === 'true'),
            tag: [],
            createdAt: new Date(),
            completedAt: null
        }
        tasks.push(tempObject);

        this.save(tasks);
        return `Product ${name} has been added.`
    }
    static delete(params) {
        // console.log("List");
        const tasks = this.list();
        const id = Number(params[0]);

        const tempData = tasks.filter((product) => product.id !== id);

        this.save(tempData);
        return `Id ${id} has been deleted`;
    }
    static update(params) {
        // console.log("List");
        const tasks = this.list();
        const id = Number(params[0]);
        const name = params[1];

        tasks.forEach(product => {
            if (product.id === id) {
                product.name = name;
            }
        });
        this.save(tasks);
        return `Id ${id} has been updated`
    }
    static save(data) {
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
    }
}

module.exports = ToDo;