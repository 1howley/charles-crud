
import { db } from "../database.js";

const getUsers = (req, res) => {

    const searchTerm = req.query.search;

    const q = `SELECT * FROM cliente WHERE LOWER(nome) LIKE LOWER('%${searchTerm}%') OR id = '${searchTerm}'`;

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    })
};

const setUser = (req, res) => {

    const q = `INSERT INTO  cliente ('nome', 'price', 'pay_date')`;

    const values = [
        req.body.nome,
        req.body.price,
        req.body.pay_date,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário cadastrado!");
    });
    
};

const deleteUser = (req, res) => {

    const q = `DELETE FROM cliente WHERE id = ?`;

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário Deletado!");
    });

};

export {getUsers, setUser, deleteUser};