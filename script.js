/* =========================
   PEGAR ELEMENTOS DO HTML
========================= */

const botoes = document.querySelectorAll(
    ".categorias button"
);

const cards = document.querySelectorAll(
    ".card"
);

const busca = document.getElementById(
    "busca"
);


/* =========================
   FILTRO DAS CATEGORIAS
========================= */

botoes.forEach(botao => {

    botao.addEventListener(
        "click",
        () => {

            /* Remove o ativo de todos */

            botoes.forEach(b => {

                b.classList.remove("ativo");

            });


            /* Coloca ativo no botão clicado */

            botao.classList.add("ativo");


            /* Pega a categoria */

            const filtro =
                botao.dataset.filtro;


            /* Filtra os cards */

            filtrar(filtro);

        }
    );

});


/* =========================
   FUNÇÃO FILTRAR
========================= */

function filtrar(categoria) {

    const texto =
        busca.value
            .toLowerCase()
            .trim();


    cards.forEach(card => {

        const nome =
            card.dataset.nome;


        const tipo =
            card.dataset.categoria;


        const categoriaCorreta =
            categoria === "todas" ||
            tipo === categoria;


        const nomeCorreto =
            nome.includes(texto);


        if (
            categoriaCorreta &&
            nomeCorreto
        ) {

            card.style.display =
                "block";

        } else {

            card.style.display =
                "none";
        }

    });

}


/* =========================
   PESQUISA
========================= */

busca.addEventListener(
    "input",
    () => {

        const botaoAtivo =
            document.querySelector(
                ".categorias .ativo"
            );


        const categoria =
            botaoAtivo.dataset.filtro;


        filtrar(categoria);

    }
);


/* =========================
   INFORMAÇÕES DAS PLANTAS
========================= */

const detalhes = {

    jiboia: {

        titulo: "🌿 Jiboia",

        texto: `
            <p>
                A Jiboia é uma planta resistente
                e muito utilizada em ambientes internos.
            </p>

            <br>

            <p>
                ☀️ <strong>Luz:</strong>
                Prefere luz indireta.
            </p>

            <p>
                💧 <strong>Rega:</strong>
                Regue quando o solo estiver começando
                a ficar seco.
            </p>

            <br>

            <p>
                💡 <strong>Dica:</strong>
                Evite deixar o solo encharcado.
            </p>
        `
    },


    aloe: {

        titulo: "🌵 Aloe Vera",

        texto: `
            <p>
                A Aloe Vera, também conhecida como
                babosa, é uma planta suculenta.
            </p>

            <br>

            <p>
                ☀️ <strong>Luz:</strong>
                Gosta de bastante luminosidade.
            </p>

            <p>
                💧 <strong>Rega:</strong>
                Precisa de pouca água.
            </p>

            <br>

            <p>
                💡 <strong>Dica:</strong>
                Espere o solo secar antes de regar
                novamente.
            </p>
        `
    },


    girassol: {

        titulo: "🌻 Girassol",

        texto: `
            <p>
                O girassol é uma planta conhecida
                por suas flores grandes e amarelas.
            </p>

            <br>

            <p>
                ☀️ <strong>Luz:</strong>
                Precisa de bastante sol.
            </p>

            <p>
                💧 <strong>Rega:</strong>
                Deve ser regular.
            </p>

            <br>

            <p>
                💡 <strong>Dica:</strong>
                Prefira locais externos bem iluminados.
            </p>
        `
    },


    costela: {

        titulo: "🌿 Costela-de-Adão",

        texto: `
            <p>
                A Costela-de-Adão é uma planta
                tropical com folhas grandes.
            </p>

            <br>

            <p>
                ☀️ <strong>Luz:</strong>
                Prefere luz indireta.
            </p>

            <p>
                💧 <strong>Rega:</strong>
                Mantenha o solo levemente úmido.
            </p>

            <br>

            <p>
                💡 <strong>Dica:</strong>
                Limpe as folhas para retirar a poeira.
            </p>
        `
    },


    suculenta: {

        titulo: "🌵 Suculenta",

        texto: `
            <p>
                As suculentas armazenam água
                em suas folhas.
            </p>

            <br>

            <p>
                ☀️ <strong>Luz:</strong>
                Gostam de bastante luminosidade.
            </p>

            <p>
                💧 <strong>Rega:</strong>
                Precisam de pouca água.
            </p>

            <br>

            <p>
                💡 <strong>Dica:</strong>
                Evite excesso de água.
            </p>
        `
    },


    lavanda: {

        titulo: "💜 Lavanda",

        texto: `
            <p>
                A lavanda é uma planta aromática
                conhecida por suas flores roxas.
            </p>

            <br>

            <p>
                ☀️ <strong>Luz:</strong>
                Gosta de bastante sol.
            </p>

            <p>
                💧 <strong>Rega:</strong>
                Regue moderadamente.
            </p>

            <br>

            <p>
                💡 <strong>Dica:</strong>
                Prefira locais bem iluminados
                e com boa ventilação.
            </p>
        `
    }

};


/* =========================
   ABRIR MODAL
========================= */

function abrirModal(planta) {

    const dados =
        detalhes[planta];


    document.getElementById(
        "modalTitulo"
    ).textContent =
        dados.titulo;


    document.getElementById(
        "modalConteudo"
    ).innerHTML =
        dados.texto;


    document.getElementById(
        "modal"
    ).style.display =
        "flex";

}


/* =========================
   FECHAR MODAL
========================= */

function fecharModal() {

    document.getElementById(
        "modal"
    ).style.display =
        "none";

}


/* =========================
   CLICAR FORA DO MODAL
========================= */

document.getElementById(
    "modal"
).addEventListener(
    "click",
    event => {

        if (
            event.target.id === "modal"
        ) {

            fecharModal();

        }

    }
);


/* =========================
   FECHAR COM ESC
========================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            fecharModal();

        }

    }
);
