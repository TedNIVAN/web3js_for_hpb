var chai = require('chai');
var web3_hpb = require('../index');
var web3_hpb = new web3_hpb();
var testMethod = require('./helpers/test.method.js');

var method = 'getStorageAt';


var tests = [{
    args: ['0x47d33b27bb249a2dbab4c0612bf9caf4c1950855', 2],
    formattedArgs: ['0x47d33b27bb249a2dbab4c0612bf9caf4c1950855', '0x2', web3_hpb.hpb.defaultBlock],
    result: '0x47d33b2',
    formattedResult: '0x47d33b2',
    call: 'hpb_'+ method
},{
    args: ['0x47d33b27bb249a2dbab4c0612bf9caf4c1950855', 2, 0],
    formattedArgs: ['0x47d33b27bb249a2dbab4c0612bf9caf4c1950855', '0x2', '0x0'],
    result: '0x47d33b27bb249a2dbab4c0612bf9caf4747d33b27bb249a2dbab4c0612bf9cafd33b27bb249a2dbab4c0612bf9caf4c1950855',
    formattedResult: '0x47d33b27bb249a2dbab4c0612bf9caf4747d33b27bb249a2dbab4c0612bf9cafd33b27bb249a2dbab4c0612bf9caf4c1950855',
    call: 'hpb_'+ method
},{
    args: ['0x47d33b27bb249a2dbab4c0612bf9caf4c1950855', 0xb, 0x0],
    formattedArgs: ['0x47d33b27bb249a2dbab4c0612bf9caf4c1950855', '0xb', '0x0'],
    result: '0x47d33b27bb249a2dbab4c0612bf9caf4747d33b27bb249a2dbab4c0612bf9cafd33b27bb249a2dbab4c0612bf9caf4c1950855',
    formattedResult: '0x47d33b27bb249a2dbab4c0612bf9caf4747d33b27bb249a2dbab4c0612bf9cafd33b27bb249a2dbab4c0612bf9caf4c1950855',
    call: 'hpb_'+ method
}, {
    args: ['0x47d33b27bb249a2dbab4c0612bf9caf4c1950855', 0xb, 'latest'],
    formattedArgs: ['0x47d33b27bb249a2dbab4c0612bf9caf4c1950855', '0xb', 'latest'],
    result: '0x47d33b27bb249a2dbab4c0612bf9caf4747d33b27bb249a2dbab4c0612bf9cafd33b27bb249a2dbab4c0612bf9caf4c1950855',
    formattedResult: '0x47d33b27bb249a2dbab4c0612bf9caf4747d33b27bb249a2dbab4c0612bf9cafd33b27bb249a2dbab4c0612bf9caf4c1950855',
    call: 'hpb_'+ method
}];

testMethod.runTests('hpb', method, tests);
