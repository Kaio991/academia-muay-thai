const express = require("express");
const ejs = require("ejs");
const path = require("path");

const app = express();

app.set("view engine","ejs")
app.set("views", path.join(__dirname, "views"));


app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    const dadosCt = {
    Professor: "Rodrigo Alencar",
    Cargo: "Professor", 
    Formacao: "Formado em Educação Física | Atleta | Professor",
    foto: {
        banner: "/img/alunos-ct.jpeg",
        perfil: "/img/foto-professor.jpeg",
        time: "/img/foto-treino.jpeg", 
        chute: "/img/foto-sparmig.jpeg",
        logo: "/img/tigre.jpeg"
    }
}
    res.render("index",{dados:dadosCt})
});

app.use((req,res)=>{
    res.status(404).send("Essa pagina não existe no ct")
});

const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`Servidor rodando em ${port}`);
});