const mongoose = require('mongoose');
const { deleteOne } = require('../src/user');


mongoose.connect('mongodb://localhost/user_test');

mongoose.connection
    .once('open', ()=> console.log('Good to go'))
    .on('error', (error)=>{
        console.warn('Warning', errore);
    });

beforeEach((done)=>{

    mongoose.connection.collections.users.drop(()=>{
        
        done();
    });
});