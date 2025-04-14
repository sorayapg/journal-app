import { getEnvironments } from("./src/helpers/getEnvironments");


module.exports = require("whatwg-fetch");

require('dotenv').config({
    path: '.env.test',
});

jest.mock('./src/helpers/getEnvironments', () => ({
    getEnvironments : () => ({...process.env}),

}))