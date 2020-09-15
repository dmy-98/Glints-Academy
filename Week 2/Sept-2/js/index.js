// Task 1: Prepare variable
// Prepare global variable for data

var posts = [{
    id: 1,
    title: "Salary Income",
    type: "Income",
    total: 5000000
}];
getData();

function createObject(titleValue, typeValue, totalValue) {
    //Untuk create object dari input
    var temp = {
        id: generateId() + 1,
        title: titleValue,
        type: typeValue,
        total: totalValue
    }

    return temp;
}

function generateId() {
    var id;
    if (posts.length == 0) {
        id = 0;
    } else {
        id = posts[posts.length - 1].id;
    }
    return id;
}

function submitHandler() {
    //get DOM
    var titleValue = document.getElementById('title').value;
    var typeValue = document.getElementById('type').value;
    var totalValue = document.getElementById('total').value;
    var data = createObject(titleValue, typeValue, totalValue);
    console.log(data);

    addData(data);
    getData();
    return false;
}

// Task 2: getData
// Code getData function to read the data from the global variable

function getData() {
    //get DOM
    var tableData = document.getElementById('table-data');
    tableData.innerHTML = "";

    if (posts.length === 0) {
        console.log("List Posts is empty")
    } else {
        console.log("List Post : ", posts);
        //Looping untuk mengambil task
        for (let i = 0; i < posts.length; i++) {
            let taskHTML = `
                <tr>
                    <td>${posts[i].title}</td>
                    <td>${posts[i].type}</td>
                    <td>${posts[i].total}</td>
                    <td><button class="btn btn-danger" onclick="deleteData(${posts[i].id})">Delete</button></td>
                </tr>
            `;
            tableData.insertAdjacentHTML('beforeend', taskHTML)
        }
    }
}

// Task 3: addData
// User can input the data

function addData(post) {
    //Untuk push ke dalam posts -> sudah berbentuk object
    posts.push(post);
    console.log(`"${post.title}" has been added!`)
}


// Task 4: deleteData
// User can delete post

function deleteData(idPost) {
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].id == idPost) {
            console.log(`Delete "${posts[i].title}"`);
            posts.splice(i, 1); // Splice(i,j) = Delete j object from index i 
        }
    }
    getData();
}


// Task 5: Split the files
// Developer can split the files(module.exports and require)