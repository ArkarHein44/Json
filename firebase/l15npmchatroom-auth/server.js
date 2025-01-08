import express from 'express';

//=> Express server setup

const exapp = express();
exapp.use(express.static('dist'));
// server static files from the public folder

// start the express server
exapp.listen(8000, ()=>{
    console.log("server is running on http://localhost:8000");
});