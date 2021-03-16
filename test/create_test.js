const assert = require('assert');
const User = require('../src/user');


describe('Creating records',()=>{

    it('saves a user',()=>{
        const robin = new User({name:'Robin'});
        robin.save();
    })

});