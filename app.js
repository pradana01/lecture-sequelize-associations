const express = require('express');
const app = express();
const port = 3000;
const {User, Task, UserProfile} = require('./models');

app.get('/', async (req, res) => {
    try {
        // ! CARA PERTAMA UNTUK MENDAPATKAN DATA YANG TERSAMBUNG
        // let user = await User.findByPk(4);
        // let userProfile = await UserProfile.findOne({
        //     where : {
        //         "UserId": user.id
        //     }
        // });
        // let tasks = await Task.findAll({
        //     where: {
        //         "UserId": user.id,
        //         status: false
        //     }
        // })
        // res.json({user, userProfile, tasks});

        // ! CARA KEDUA UNTUK MENDAPATKAN DATA YANG TERSAMBUNG
        let user = await User.findByPk(4);
        let userProfile = await user.getUserProfile();
        let tasks = await user.getTasks();
        res.json({user, userProfile, tasks});
    } catch (error) {
        res.send(error);
    }
})

app.listen(port, () => {
    console.log(`This app is listening on port: ${port}`)
})