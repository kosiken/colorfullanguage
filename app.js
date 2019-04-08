const express = require('express'),
app = express();
const {join} = require('path');
const router = require('./api.js')

app.use(express.static(join(__dirname,'public')))

  // Handle 404
  app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['http://localhost:3000']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
app.use('/api', router)

app.use('/undefined', (rq, rs)=> {
  rs.redirect('/logo.svg')
})
app.use(function(req, res) {
    res.status(404);
    if (req.accepts('html')) {
      if(/posts|create/.test(req.url)) res.sendFile(join(__dirname,'public/index.html'))
     else res.sendFile(join(__dirname,'public/notfound.html'))} 

});



app.listen(80, ()=>{
    console.log('listenting on http://localhost:80/')
})