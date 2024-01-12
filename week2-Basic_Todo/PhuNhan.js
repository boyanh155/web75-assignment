import express from 'express';
import axios from 'axios';

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
const mockApiBaseUrl = 'https://654f7637358230d8f0cd577c.mockapi.io/todo';

// QUERY
app.route('/todo')
    .get(async (req, res) => {
        try {
            const response = await axios.get(`${mockApiBaseUrl}`);
            res.send(response.data);
        } catch (error) {
            res.status(500).send(error.message);
        }
    })
    .post(async (req, res) => {
        try {
            const response = await axios.post(`${mockApiBaseUrl}`, {
                name: req.body.name,
                active: req.body.active,
                username: req.body.username
            });

            if (response.status === 201 || response.status === 200) {
                res.send('Thành công');
            } else {
                res.send('Thất bại');
            }
        } catch (error) {
            res.status(500).send(error.message);
        }
    });

// PARAMS - SLUG
app.route('/todo/:id')
    .get(async (req, res) => {
        try {
            const response = await axios.get(`${mockApiBaseUrl}/${req.params.id}`);
            res.send(response.data);
        } catch (error) {
            if (error.response && error.response.status === 404) {
                res.status(404).send('Todo not found');
            } else {
                res.status(500).send(error.message);
            }
        }
    })
    .put(async (req, res) => {
        try {
            const response = await axios.put(`${mockApiBaseUrl}/${req.params.id}`, {
                name: req.body.name,
                active: req.body.active,
                username: req.body.username
            });
            if (response.status === 201 || response.status === 200) {
                res.send('Thành công');
            } else {
                res.send('Thất bại');
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                res.status(404).send('Todo not found');
            } else {
                res.status(500).send(error.message);
            }
        }
    })
    .delete(async (req, res) => {
        try {
            const response = await axios.delete(`${mockApiBaseUrl}/${req.params.id}`);
            if (response.status === 201 || response.status === 200) {
                res.send('Thành công');
            } else {
                res.send('Thất bại');
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                res.status(404).send('Todo not found');
            } else {
                res.status(500).send(error.message);
            }
        }
    });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
