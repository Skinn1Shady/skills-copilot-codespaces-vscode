// Creat a web server
// 1. Import express
const express = require('express');
const app = express();
// 2. Create a web server
// 3. Create a route
app.get('/comments', (req, res) => {
    res.send('Comments page');
});
// 4. Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});