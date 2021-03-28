const express = require('express');
const app = express();

// ESTOU DIZENDO PARA O EXPRESS USAR O EJS COMO VIEW ENGINE
app.set('view engine', 'ejs');

app.get("/:nome/:lang", (req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;

    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "Google, Inc.",
        inscritos: 8000
    });
});

app.listen(8080, () => {
    console.log("App rodando");
});