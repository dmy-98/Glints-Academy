const pool = require('./config/connection');

const tasksTableSql = `
CREATE TABLE tasks(
    id SERIAL PRIMARY KEY,
    tasks VARCHAR(255),
    status VARCHAR(50),
    tag VARCHAR(50),
    created_at VARCHAR(6),
    completed_at VARCHAR(6)
);
`;

pool.query(tasksTableSql, (err, data) => {
    if (err) {
        throw err;
    } else {
        console.log(`Table "tasks" created successfully`);
        pool.end();
    }
});