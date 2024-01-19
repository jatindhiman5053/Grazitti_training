const db = openDatabase('mydb', '1.0', 'My Database', 2 * 1024 * 1024);


db.transaction(function (tx) {
    tx.executeSql(
        'CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY, first_name TEXT, last_name TEXT, age INTEGER)' 
    );
});


function addData() {
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const age = document.getElementById('age').value;

    db.transaction(function (tx) {
        tx.executeSql(
            'INSERT INTO people (first_name, last_name, age) VALUES (?, ?, ?)',[firstName, lastName, age],
            function () {
                alert('Data added successfully');
            },function (error) {
                alert('Error adding data: ' + error.message);
            }
        );
    });
}






// Function to display data in the table
function showData(event) {
    event.preventDefault(); // Prevent page refresh

    const tableBody = document.querySelector('#data_table tbody');
    tableBody.innerHTML = '';

    db.transaction(function(tx) {
        tx.executeSql('SELECT * FROM people', [], function(tx, results) {
            const len = results.rows.length;
            for (let i = 0; i < len; i++) {
                const row = results.rows.item(i);
                const deleteButton = `<button onclick="deleteRow(${row.id})">Delete</button>`;
                tableBody.innerHTML += `
                    <tr>
                        <td>${row.first_name}</td>
                        <td>${row.last_name}</td>
                        <td>${row.age}</td>
                        <td>${deleteButton}</td> <!-- Add the delete button here -->
                    </tr>
                `;
            }
        });
    });
}



// Function to delete a row by ID
function deleteRow(id) {
    db.transaction(function(tx) {
        tx.executeSql(
            'DELETE FROM people WHERE id = ?',
            [id],
            function() {
                alert('Row deleted successfully');
                showData(); // Refresh the table after deletion
            },
            function(error) {
                alert('Error deleting row: ' + error.message);
            }
        );
    });
}



document.getElementById('submit').addEventListener('click', addData);
// Attach event listener to the "Show" button
document.getElementById('show').addEventListener('click', function(event) {
    showData(event); // Pass the event parameter
});

