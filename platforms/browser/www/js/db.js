var db = null;
 
document.addEventListener('deviceready', function() {
  db = window.openDatabase("test", "1.0", "Test DB", 1000000);
  
  //create database
  db.transaction(function(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS PCs (id INTEGER, edition TEXT,charname TEXT)');
  }, function(error) {
    console.log('Transaction ERROR: ' + error.message);
  }, function() {
    console.log('Populated database OK');
  });

   db.transaction(function(tx) {
		var html = '<table><thead><th>ID</th><th>Edition</th><th>Name</th></thead><tbody>';
                tx.executeSql('SELECT * FROM PCs', [], function (tx, data) {
                    for (i = 0; i < data.rows.length; i++) {
                        html += '<tr><td>' + data.rows[i].id + '</td><td>' + data.rows[i].charname + '</td></tr>';
                    };
                    html += '</tbody></table>';
                    $('#TableData').html(html);
                });
	}, function(error) {
    console.log('Transaction ERROR: ' + error.message);
  }, function() {
    console.log('Displayed database OK');
  });
  
  
});

