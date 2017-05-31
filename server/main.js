import { Meteor } from 'meteor/meteor';
import '../imports/serverside/servermethod.js';


Meteor.startup(() => {
  // code to run on server at startup


});



//Initializing just from server

//
// Meteor.startup(() => {
//   // code to run on server at startup

//call from method (alternative)
//// Meteor.call('init', (error, result) => {console.log(inside); });
//// console.log('init done');

//   const cassandra = require('cassandra-driver');
//   const client = new cassandra.Client({contactPoints: ['127.0.0.1:9042']});
//
//   client.connect(function (err) {
//     console.log("cp"+err);
// });
//   //const query = 'select * from  hints';
// const query = 'CREATE TABLE IF NOT EXISTS simplex.sarat ' +
// ' (userid bigint, time timestamp, relevance bigint, postcontent text,' +
// ' PRIMARY KEY ((userid), relevance, time)) ' +
// ' WITH CLUSTERING ORDER BY (relevance DESC) ';
//
// client.execute(query, function(err, result) {
//   if(err){console.log("error: " + err);}
//   console.log('success: ');
// });
//
//
// });
