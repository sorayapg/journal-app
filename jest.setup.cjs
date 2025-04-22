


const { TextEncoder, TextDecoder }  = require('util');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;


module.exports = require("whatwg-fetch");

require('dotenv').config({
    path: '.env.test',
});

jest.mock('./src/helpers/getEnvironments', () => ({
    getEnvironments : () => ({...process.env}),

}))