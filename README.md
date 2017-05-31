# meteor-cassandraa
Using Meteor JS with Cassandra for Database Operations instead of MongoDB

------------------------------------------------------------------------------------------------------------------------------------------


<b> <h4> Development :  </h4> </b>
<h3>

git clone https://github.com/sarat9/meteor-cassandraa.git

cd meteor-cassandraa

meteor npm install

meteor npm install --save cassandra-driver

meteor

</h3>

 App running at: http://localhost:3000/
 
 
------------------------------------------------------------------------------------------------------------------------------------------

<h4><b> ISSUES </b></h4>
As Mentioned in one of the references,
You can use any database you want with Meteor, but you'll lose three of the seven key benefits of the framework:

1-Database Everywhere. Use the same transparent API to access your database from the client or the server.

2-Latency Compensation. On the client, use prefetching and model simulation to make it look like you have a zero-latency connection to the database.

3-Full Stack Reactivity. Make realtime the default. All layers, from database to template, should make an event-driven interface available.
Use Meteor Methods to expose functions on the client to create, read, update and delete records in other databases.

If you want to integrate another datastore like Cassandra more tightly with Meteor, you would probably start with Meteor's mongo-livedata module.
Meteors mongo-livedata uses a "builtin" mongoDB library, database, collection and setup handled by the meteor/node runtime itself.

Meteor does not directly support other databases by now when it comes to using the Collections API. But it should be possible to write an own connector which implements Collections.
Meteor is in an early state right now - so be aware that API and best pactises may still change fundamentally!


------------------------------------------------------------------------------------------------------------------------------------------


Reference:


https://medium.com/@guyavraham/connecting-meteor-to-cassandra-for-a-news-feed-ef56488bc231
https://stackoverflow.com/questions/21679103/meteor-js-possible-with-cassandra-instead-of-mongdb
https://stackoverflow.com/questions/12817891/meteor-and-a-different-sort-of-database
