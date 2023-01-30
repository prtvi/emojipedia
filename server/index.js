const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api', (req, res) => {
	res.json({ msg: 'Hi there!' });
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}!`));
