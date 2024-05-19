import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
// import socketIo from 'socket.io';

// const io = socketIo(server);

app.get('/', (req, res) => {
    res.send('Hello from Node.js!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});