
//start sqllite
var myDB = window.sqlitePlugin.openDatabase({name: "mySQLite.db", location: 'default'});

//open DB
myDB.transaction(function(transaction) {
transaction.executeSql('CREATE TABLE IF NOT EXISTS phonegap_pro (id integer primary key, title text, desc text)', [],
	function(tx, result) {
		alert("Table created successfully");
	},
	function(error) {
		alert("Error occurred while creating the table.");
	});
});

//Add test values to DB
var title="sundaravel";
var desc="phonegap freelancer";
myDB.transaction(function(transaction) {
var executeQuery = "INSERT INTO phonegap_pro (title, desc) VALUES (?,?)";
transaction.executeSql(executeQuery, [title,desc]
, function(tx, result) {
alert('Inserted');
},
function(error){
alert('Error occurred');
});
});

//View Data
myDB.transaction(function(transaction) {
transaction.executeSql('SELECT * FROM phonegap_pro', [], function (tx, results) {
var len = results.rows.length, i;
$("#rowCount").append(len);
for (i = 0; i < len; i++){
$("#TableData").append("<tr><td>"+results.rows.item(i).id+"</td><td>"+results.rows.item(i).title+"</td><td>"+results.rows.item(i).desc+"</td></tr>");
}
}, null);
});