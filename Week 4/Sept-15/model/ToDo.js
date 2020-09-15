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

    static list(cb) {
        fs.readFile('./data.json', 'utf8', (err, datas) => {
            if (err) {
                cb(err, null);
            } else {
                const parseData = JSON.parse(datas);
                cb(null, parseData);
            }
        });
    }

    static add(params, cb) {
        this.list((err, datas) => {
            if (err) {
                cb(err, null);
            } else {
                const task = params[0];

                const nextId = datas[datas.length - 1].id + 1;
                const tempObject = {
                    id: nextId,
                    task: task,
                    status: false,
                    tag: [],
                    created_at: new Date(),
                    completed_at: null
                }
                datas.push(tempObject);

                this.save(datas);
                cb(err, `Task '${task}' has been created!`);
            }
        });

    }

    static update(params, cb) {
        this.list((err, datas) => {
            if (err) {
                cb(err, null);
            } else {
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
                cb(null, `'${taskBefore}' has been changed to '${task}'!`);
            }
        });
    }

    static delete(params, cb) {
        this.list((err, datas) => {
            if (err) {
                cb(err, null);
            } else {
                const id = Number(params[0]);
                let task;

                datas.forEach(data => {
                    if (data.id === id) {
                        task = data.task;
                    }
                });

                const tempData = datas.filter((data) => data.id !== id);

                this.save(tempData);
                cb(null, `'${task}' has been removed!`);
            }

        });
    }

    static complete(params, cb) {
        this.list((err, datas) => {
            if (err) {
                cb(err, null);
            } else {
                const id = Number(params[0]);
                let task;

                datas.forEach(data => {
                    if (data.id === id) {
                        task = data.task;
                        data.status = true;
                        data.completed_at = new Date()
                    }
                });

                this.save(datas);
                cb(null, `'${task}' has been completed!`);
            }
        });

    }

    static uncomplete(params, cb) {
        this.list((err, datas) => {
            if (err) {
                cb(err, null);
            } else {
                const id = Number(params[0]);
                let task;

                datas.forEach(data => {
                    if (data.id === id) {
                        task = data.task;
                        data.status = false;
                        data.completed_at = null;
                    }
                });

                this.save(datas);
                cb(null, `'${task}' has been uncompleted!`)
            }
        });

    }

    static save(data) {
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 2));
    }
}

module.exports = ToDo;