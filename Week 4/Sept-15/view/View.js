class View {
    static list(datas) {
        // console.log(data);
        datas.forEach(data => {
            console.log(`${data.id}. [${data.status?"X":" "}] ${data.task}`);
        });
    }
    static message(data) {
        console.log(data);
    }

    static help() {
        console.log(`Commands list :
        help\t\t\t: show all the commands
        list\t\t\t: show all tasks 
        add (task)\t\t: add new task
        update (id) (new-task)\t: update the task
        delete (id)\t\t: delete task from the list
        complete (id)\t\t: complete the task
        uncomplete (id)\t\t: uncomplete the task`);
    }
    static error(err) {
        console.log("Hasil Error", err);
    }

}

module.exports = View;