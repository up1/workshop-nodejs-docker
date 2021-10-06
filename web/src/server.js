const express = require('express');
const mustacheExpress = require('mustache-express');
const os = require('os');
const { Pool } = require('pg');
//demo 
const app = express();
app.set('view engine', 'html');
app.engine('html', mustacheExpress()); 
app.set('views', __dirname);
app.use(express.static('src'));

app.get('/',function(req,res){
    res.json({ message: "Hello api with json" });
});

app.get('/pet', async function(req,res){
    const pool = new Pool({
        user: 'dockeruser',
        password: 'dockerpass',
        host: 'db',
        database: 'pets',
        port: 5432,
    })
    console.log("Connecting to DB");
    await pool.connect();
    console.log("Connected!");

    const imageId = getRandomInt(12) + 1;
    const sql = 'SELECT * FROM images WHERE imageid=$1';
    var values = [imageId];
    var result = await pool.query(sql, values);
    const url = result.rows[0].url;
    console.log(url);
    res.render('pet', {
            url: url,
            hostname: os.hostname()
        });
    await pool.end();
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

app.listen(80, '0.0.0.0');

console.log("Listening at 0.0.0.0:80");