import express from 'express';
import axios from 'axios';

const app = express();
app.use(express.json())
const port = process.env.PORT || 3000;
const classes = [{
    age: 9
}, {
    age: 11
}, {
    age: 12
}, {
    age: 8
}]




// QUERY

app
    .route('/todo')
    .get((req, res) => {
        axios.get(`https://654f7637358230d8f0cd577c.mockapi.io/todo`).then(_res => {
            res.send(_res.data)
        }).catch(err => {
            res.status(500).send(err)
        })
    })
    .post((req, res) => {
        console.log(req.body)
        axios.post(`https://654f7637358230d8f0cd577c.mockapi.io/todo`, req.body).then(_res => {
            if (_res.status === 201 || _res.status === 200) {
                res.send('Thanh cong')
            } else {
                res.send('That bai')
            }
        }).catch(err => {
            res.status(500).send(err)
        })
    })
    

// PARAMS - SLUG

app.route('/todo/:id')
    .get((req, res) => {
        const { id } = req.params;
        axios.get(`https://654f7637358230d8f0cd577c.mockapi.io/todo`).then(_res => {
            const user = _res.data.find((item) => item.id == id)
            res.status(200).send(user);
        })
    })
    .put((req, res) => {
        const { id } = req.params;
        // const newBody = {
        //     "name":"Foo",
        //     "active":false,
        //     "username":"FooBar",
        //     "id":"4"
        // }
        const newBody = req.body;
        axios.put(`https://654f7637358230d8f0cd577c.mockapi.io/todo/${id}`, newBody).then(_res => {
            if (_res.status === 201 || _res.status === 200) {
                res.send('Thanh cong')
            } else {
                res.send('That bai')
            }
        })
    })
    .delete((req, res) => {
        const { id } = req.params;
        axios.delete(`https://654f7637358230d8f0cd577c.mockapi.io/todo/${id}`).then(_res => {
            if (_res.status === 201 || _res.status === 200) {
                res.send('Thanh cong')
            } else {
                res.send('That bai')
            }
        })
    })

// app.get('/:conditionAge', (req, res) => {
//     // findIndex, map, filter, find
//     const matchAge = classes.find((a, b) => a.age == req.params.conditionAge)
//     res.send(matchAge);
// });
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});