

import { Meteor } from "meteor/meteor";

// let cassandraHost = (Meteor.settings.cassandra && Meteor.settings.cassandra.host) || "127.0.0.1:9042";
// let client = new cassandra.Client({contactPoints: [cassandraHost]});

  const cassandra = require('cassandra-driver');
  const client = new cassandra.Client({contactPoints: ['127.0.0.1:9042']});

let keyspace = function () {
    return ("CREATE KEYSPACE IF NOT EXISTS simplex WITH replication = {'class' : 'SimpleStrategy', 'replication_factor' : 3};");
}

let tables = function () {
    return ("CREATE TABLE IF NOT EXISTS simplex.posts " +
    " (userid bigint, time timestamp, relevance bigint, postcontent text," +
    " PRIMARY KEY ((userid), relevance, time)) " +
    " WITH CLUSTERING ORDER BY (relevance DESC);");
}

let insert = function (userId, postContentJson, relevance) {
    relevance = relevance || Math.floor(Math.random() * (30 - 1)) + 1;

    var command = 'INSERT INTO simplex.posts (userid, time, relevance, postcontent) ' +
        'values (' + userId + ', ' + Date.now() + ', ' + relevance + ', ' + "'" + JSON.stringify(postContentJson) + "'" + ');';

    return command;
}

let getPostsForUserSortedByRelenvance = function (userId) {
    return "SELECT * FROM simplex.posts;";
}


//
var cassandraExecSync =  Meteor.wrapAsync(client.execute, client);

//}
Meteor.methods({
  init: function () {
      var cassConnectSync = Meteor.wrapAsync(client.connect, client);

      try {
          console.log('starting cassandra');
          cassConnectSync();
          console.log('Connected to cassandra cluster with hosts:');
          cassandraExecSync(keyspace());
          cassandraExecSync(tables());

      } catch (err) {
          console.log("error when initializing cassandra");
          console.log(err);
      }
  },
  insertNewPost: function (userId, postContentJson, relevance) {
      var insertCommand = insert(userId, postContentJson, relevance);
      client.execute(insertCommand, function (err){
          if (err){
              console.log("error inserting: " + insertCommand);
              console.log(err);
          }
      })
  },
  getPostsForUserSortedByRelenvance: function (userId) {
      try {
          var posts = cassandraExecSync(getPostsForUserSortedByRelenvance(userId));
          return posts.rows.map(function(row) {
              return JSON.parse(row.postcontent);
          });
      } catch (err){
          console.log("error getting posts for user " + userId);
      }
  }
});
