const command = process.argv[2];
const params = process.argv.slice(3);
const ToDoController = require('./controller/ToDoController')

if (command == null) {
    ToDoController.help();
} else {
    switch (command) {
        case 'help':
            ToDoController.help();
            break;
        case 'list':
            ToDoController.list();
            break;
        case 'add':
            ToDoController.add(params);
            break;
        case 'update':
            ToDoController.update(params);
            break;
        case 'delete':
            ToDoController.delete(params);
            break;
        case 'complete':
            ToDoController.complete(params);
            break;
        case 'uncomplete':
            ToDoController.uncomplete(params);
            break;
        default:
            ToDoController.message();
            break;
    }
}