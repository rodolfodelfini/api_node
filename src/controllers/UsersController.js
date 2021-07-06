const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const keysecret  = process.env.SECRET;

module.exports = (app) => {
    const { UsersModel } = app.src.models;

    const list = async (req, res) => {
        const results = await UsersModel.findAll();
        return results;
    };

    const store = async (req, res) => {

        let password_req = req.body.password
        password = bcrypt.hashSync(password_req, 10)
        console.log(password);

        const { name, email, status } = req.body;
        const results = await UsersModel.create({ name, email, password, status });
        return { "message": "Usuário criado com sucesso", "user": email }
    };

    const login = async (req, res) => {

        const user = await UsersModel.findOne({ where: { usuario: req.body.usuario } });

        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }

        const passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if (!passwordIsValid) {
            return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!"
            });
        }

        const token = jwt.sign({ id: user.id_user }, keysecret, {
            expiresIn: '30m'
        });


        return {username: user.nome, email: user.email, accessToken: token };
    };

    // const load = async (req, res) => {
    //     const results = await UsersModel.findAll();
    //     return res.json(results);
    // };

    // const update = async (req, res) => {
    //     const results = await UsersModel.findAll();
    //     return res.json(results);
    // };

    // const remove = async (req, res) => {
    //     const results = await UsersModel.findAll();
    //     return res.json(results);
    // };

    return {
        list,
        store,
        login,
        // load,
        // update,
        // remove,
    };

}

function createJWT(id) {
    return jwt.sign({ id }, process.env.SECRET, { expiresIn: '30m' })
}