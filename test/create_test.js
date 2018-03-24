'use strict';
var assert = require('assert');
const User = require('../src/user');

describe('crear usuarios', () =>{
    it('crea usuario',() => {
        const rogelio = new User({
            'name': 'rogelio'
        });
        rogelio.save();
    });
});