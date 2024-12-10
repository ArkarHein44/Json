

import express from 'express';

// =>Express Server Setup 

// third party module from npm 

const exapp = express();

// server static file from the 'src' folder 
exapp.use(express.static('dist'));

// start the express server by define port 
exapp.listen(8000,()=>{
	console.log("server is running on http://localhost:8000");
});

