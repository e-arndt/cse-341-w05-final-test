const swaggerAutogen = require('swagger-autogen')();
const production = process.env.NODE_ENV === 'production';

const doc = {
    info: {
        title: 'Holiday Party Manager',
        description: 'A simple API to help manage holiday parties'
    },
  
/* ******************************************
 * Trying to see if this change will automatically
 * update the swagger.json file on render.com -vy
 * 
 * Had to remove host and schemes to get it to work on render
 * 
 * host: production
    ? 'cse-341-w05-final-test.onrender.com'
    : 'localhost:3000',
    schemes: production ? ['https']: ['http' ],
 *******************************************/
  
    tags: [
    {
      name: 'Gifts',
      description: 'Endpoints for managing gifts'
    },
    {
      name: 'Food',
      description: 'Endpoints for managing dishes/food'
    }
  ]
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);