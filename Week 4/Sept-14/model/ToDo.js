const fs = require('fs');

class ToDo {
    constructor(id, task, status, tag, created_at, completed_at) {
        this.id = id;
        this.task = task;
        this.status = status;
        this.tag = tag;
        this.created_at = created_at;
        this.completed_at = completed_at;
    }

    static list() {
        const data = fs.readFileSync('./data.json', 'utf8');
        const parseData = JSON.parse(data);

        // let tempData = [];
        // parseData.forEach(data => {
        //     const { id, task, status, tag, created_at, completed_at } = data;
        //     tempData.push(new ToDo(id, task, status, tag, new Date(created_at), new Date(completed_at)));
        // });

        // console.log(parseData);

        return parseData;
    }
    static add(params) {
        const datas = this.list();
        const task = params[0];

        const nextId = datas[datas.length - 1].id + 1;
        const tempObject = {
            id: nextId,
            task: task,
            status: false,
            tag: [],
            createdAt: new Date(),
            completedAt: null
        }
        datas.push(tempObject);

        this.save(datas);
        return `Task '${task}' has been created!`
    }

    static update(params) {
        const datas = this.list();
        const id = Number(params[0]);
        const task = params[1];
        let taskBefore;

        datas.forEach(data => {
            if (data.id === id) {
                taskBefore = data.task;
                data.task = task;
            }
        });
        this.save(datas);
        return `'${taskBefore}' has been changed to '${task}'!`
    }

    static delete(params) {
        const datas = this.list();
        const id = Number(params[0]);
        let task;

        datas.forEach(data => {
            if (data.id === id) {
                task = data.task;
            }
        });

        const tempData = datas.filter((data) => data.id !== id);

        this.save(tempData);
        return `'${task}' has been removed!`;
    }

    static complete(params) {
        const datas = this.list();
        const id = Number(params[0]);
        let task;

        datas.forEach(data => {
            if (data.id === id) {
                task = data.task;
                data.status = true;
            }
        });

        this.save(datas);
        return `'${task}' has been completed!`
    }

    static uncomplete(params) {
        const datas = this.list();
        const id = Number(params[0]);
        let task;

        datas.forEach(data => {
            if (data.id === id) {
                task = data.task;
                data.status = false;
            }
        });

        this.save(datas);
        return `'${task}' has been uncompleted!`
    }

    static save(data) {
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
    }
}

module.exports = ToDo;