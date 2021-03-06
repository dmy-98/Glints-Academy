const ToDo = require('../model/ToDo');
const View = require('../view/View');

class ToDoController {
    static help() {
        View.help();
    }
    static list() {
        const list = ToDo.list();
        View.list(list);
    }
    static add(params) {
        const result = ToDo.add(params);
        View.message(result);
    }
    static update(params) {
        const result = ToDo.update(params);
        View.message(result);
    }
    static delete(params) {
        const result = ToDo.delete(params);
        View.message(result);
    }
    static complete(params) {
        const result = ToDo.complete(params);
        View.message(result);
    }
    static uncomplete(params) {
        const result = ToDo.uncomplete(params);
        View.message(result);
    }
    static message() {
        View.message("Masukkan perintah yang benar trims.");
    }
}

module.exports = ToDoController;