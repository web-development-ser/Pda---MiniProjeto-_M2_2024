// Acesso a LocalStorage:
const OBJ_LOCAL = JSON.parse(localStorage.getItem('API_DATA_SET'));
/*
const API_DATA = {
    "teste@gg" : [{
        id : 9999, user : "teste@gg", key : 1700, status : false,
        setPassword : function (pass) {
            if (pass == this.key) {
                this.status = true;
            } else {
                this.status = false;
            };
        }
    },
    {name : "", age : 21}],
    "teste@gs" : [{
        id : 9999, user : "teste@gg", key : 1701, status : false,
        setPassword : function (pass) {
            if (pass == this.key) {
                this.status = true;
            } else {
                this.status = false;
            };
        }
    },
    {name : "", age : 23}
]}; */

// ________________________________________________________
// Entrega o acesso ao usuario:
const message = document.getElementById('message');
const CHECK_ACESS = (x_boolean) => {
    if (x_boolean) {
        message.innerText = "Bem vindo(a)! Reedirecionando...";
        setTimeout (() => {
            window.location.href = './assets/edit_data.html';
        }, 3000);
    } else {
        message.innerText = "E-mail ou Senha invalidos!";
    };
};

const STATUS = (user) => {
    if (user === "") return;
    OBJ_LOCAL[user][user][0].setPassword = function (pass) {
        if (pass == this.key) {
            this.status = true;
        } else {
            this.status = false;
        };
    };
};
// Valida o usuario, antes de ativar o login:
const CHECK = (user, password) => {
    if ((user === "") && (password === "") || (OBJ_LOCAL && OBJ_LOCAL.length > 0)) {
        message.innerText  = "Há campos vazios!";
        return;
    };

    for (const key in OBJ_LOCAL) {
        if (key == user && password !== "") {
            STATUS (user);
            OBJ_LOCAL[user][user][0].setPassword(password);
            return OBJ_LOCAL[user][user][0].status;
        } else {
            message.innerText = "E-mail ou Senha invalidos!";
        };
    };
};

// Recupera os valores via DOM:
const dataLogin = (CHECK, CHECK_ACESS) => {
    const email = document.getElementById('email_login').value;
    const password = document.getElementById('password_login').value;
    const TO_CHECK = CHECK(email, password, message);
    CHECK_ACESS(TO_CHECK);
};

// Evento JS 'click':
document.getElementById('entrar_login').addEventListener('click', () => {
    dataLogin(CHECK, CHECK_ACESS);
});