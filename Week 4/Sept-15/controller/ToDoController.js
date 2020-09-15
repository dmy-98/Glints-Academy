const ToDo = require('../model/ToDo');
const View = require('../view/View');

class ToDoController {
    static help() {
        View.help();
    }

    static list() {
        ToDo.list((err, datas) => {
            if (err) {
                View.error(err);
            } else {
                View.list(datas);
            }
        });
    }

    static add(params) {
        ToDo.add(params, (err, datas) => {
            if (err) {
                View.error(err);
            } else {
                View.message(datas);
            }
        });
    }

    static update(params) {
        ToDo.update(params, (err, datas) => {
            if (err) {
                View.error(err);
            } else {
                View.message(datas);
            }
        });
    }
    static delete(params) {
        ToDo.delete(params, (err, datas) => {
            if (err) {
                View.error(err);
            } else {
                View.message(datas);
            }
        });
    }
    static complete(params) {
        ToDo.complete(params, (err, datas) => {
            if (err) {
                View.error(err);
            } else {
                View.message(datas);
            }
        });
    }
    static uncomplete(params) {
        ToDo.uncomplete(params, (err, datas) => {
            if (err) {
                View.error(err);
            } else {
                View.message(datas);
            }
        });
    }
    static message() {
        View.message("Masukkan perintah yang benar trims.");
    }
}

module.exports = ToDoController;