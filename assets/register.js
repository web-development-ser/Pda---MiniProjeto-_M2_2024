// Controle de dados, vareavel simples:
let temp = {};

// Amazena no amasenamento local do navegador:
const ADD_LOCAL_SORAGE__ = (y_boolean, email_register) => {
    localStorage.setItem('API_DATA_SET', JSON.stringify(temp));
    const OBJ_LOCAL = JSON.parse(localStorage.getItem('API_DATA_SET'));
    console.log("Obj Local: ", OBJ_LOCAL);
    const situ = document.getElementById('situ');
    situ.innerText = "Cadastro realizado! Se não estiver preenchido completo, vá e edite depois...";
    situ.classList.replace("sua_classe", "situ");
    situ.classList.add("situ");

    setTimeout(() => {
        window.location.href = "../index.html";
    }, 3000)
    

    // localStorage.removeItem('API_DATA_SET')
};

// Avalia os dados:
const SET_DATA_DADOS__ = (API_DATA, email_register) => {
    temp[email_register] = API_DATA;
    console.log(temp);

    for (const key in temp) {
        if (email_register === key) {
            console.log("Ok, existe!");
            break;
        } else {
            console.log("Não existe!");
            temp[email_register] = API_DATA;
            console.log("AA", temp)
            return true;
        }
        // console.log("Email", temp[email_register][key][0].email_register);
        // console.log("AA", temp)
    }
};

// Lança os dados dentro de um Objeto: Organiza:
const ADD_DATA_CLASS = (DATA_boolean, user, id, insc_user, cep, email_register, password_register, password_register_two) => {
    if (!DATA_boolean) { return; };

    const API_DATA = {};
    
    API_DATA[email_register] = [{
        id: id,
        insc_user: insc_user,
        cep: cep,
        email_register: email_register,
        key: password_register,
        status: false
    }];

    console.log("Ok", DATA_boolean, API_DATA[email_register][0].status);
    console.log("Ok", DATA_boolean);

    const ADD_LOCAL = SET_DATA_DADOS__ (API_DATA, email_register);
    ADD_LOCAL_SORAGE__ (ADD_LOCAL, email_register);
};

// Checa a senha:
const CHECK_PASSWORD_EMAIL = (email, password, password_two) => {
    const regex = /[@.]/;
    const tamPass = password.length;
    if (regex.test(password) && password == password_two && tamPass >= 8 && regex.test(email)) {
        return true;
    } else {
        const situ = document.getElementById('situ');
        situ.innerText = "Informações pendentes!";
        situ.classList.add("sua_classe");
        return false;
    };
};

// Recuperação dos dados:
const dataLogin = (CHECK_PASSWORD_EMAIL, ADD_DATA_CLASS) => {
    const user = document.getElementById('user').value;
    const id = document.getElementById('id').value;
    const insc_user = document.getElementById('insc_user').value;
    const cep = document.getElementById('cep').value;

    const email_register = document.getElementById('email_register').value;
    const password_register = document.getElementById('password_register').value;
    const password_register_two = document.getElementById('password_register_two').value;

    const DATA_boolean = CHECK_PASSWORD_EMAIL(email_register, password_register, password_register_two);
    ADD_DATA_CLASS(DATA_boolean, user, id, insc_user, cep, email_register, password_register, password_register_two);
};

// Evento Js:
document.getElementById('register').addEventListener('click', () => {
    dataLogin(CHECK_PASSWORD_EMAIL, ADD_DATA_CLASS);
});