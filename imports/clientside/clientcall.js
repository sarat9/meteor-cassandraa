

import { Meteor } from "meteor/meteor";
import { ReactiveVar } from 'meteor/reactive-var';
import './clientcall.html';

const cassandra = require('cassandra-driver');
const client = new cassandra.Client({contactPoints: ['127.0.0.1']});

Template.connectdb.helpers({
  connecting() {
  Meteor.call('init', (error, result) => {console.log('inside'); });
  console.log('init done');
   }
   });



   Template.hello.onCreated(function helloOnCreated() {
     // counter starts at 0
     this.showtext = new ReactiveVar('TextBoxData');
   });

   Template.hello.helpers({
     showtext() {
       return Template.instance().showtext.get();
     },
   });

Template.hello.events({
     'submit .new-task'(event, instance) {
       // Prevent default browser form submit
       event.preventDefault();

       // Get value from form element
       const target = event.target;
       const uid = target.userid.value;
       const pcontent = target.postcontent.value;
       const rel = target.relevance.value;
       instance.showtext.set(''+uid+'  '+pcontent+'  '+rel);
       Meteor.call('insertNewPost', uid, pcontent, rel, (error, result) => { console.log('inside'); });

       // Clear form
       target.userid.value = '';
       target.postcontent.value = '';
       target.relevance.value = '';


     },
   });
