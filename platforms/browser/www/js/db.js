var db = null;
 
document.addEventListener('deviceready', function() {
  db = window.sqlitePlugin.openDatabase({name: 'demo.db', location: 'default'});
  console.log(navigator.notification);
  
  db.transaction(function(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS DemoTable (name, score)');
    tx.executeSql('INSERT INTO DemoTable VALUES (?,?)', ['Alice', 101]);
    tx.executeSql('INSERT INTO DemoTable VALUES (?,?)', ['Betty', 202]);
  }, function(error) {
    console.log('Transaction ERROR: ' + error.message);
  }, function() {
    navigator.notification.alert('Populated database OK',alertDismissed,'Message', 'Clear');
  });
  
});
