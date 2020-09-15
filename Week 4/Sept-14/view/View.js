class View {
    static list(datas) {
        // console.log(data);
        datas.forEach(data => {
            console.log(`${data.id}. ${data.task}, status : ${data.category?"Completed":"Uncompleted"}.`);
        });
    }
    static message(data) {
        console.log(data);
    }

    static help() {
        console.log(`Commands list :
        help\t\t: show all the commands
        list\t\t: show the datas
        add\t\t: add new activity
        update\t\t: update the activity
        delete\t\t: delete activity from the list
        complete\t: complete the activity
        uncomplete\t: uncomplete the activity`);
    }
}

module.exports = View;