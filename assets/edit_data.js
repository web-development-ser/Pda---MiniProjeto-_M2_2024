// Controle de dados, vareavel simples:
const message = document.getElementById('message');
let temp = {};
let dataHTML_DOM = '';
console.log(dataHTML_DOM)

// _________________________________________
const ESPELHO_DATA = () => {
    const data_dados = document.getElementById('data_dados');
    data_dados.innerHTML = "";
    
    const OBJ_LOCAL = JSON.parse(localStorage.getItem('API_DATA_SET'));
    // console.log("USER< ESPELHO_DATA: ", OBJ_LOCAL[dataHTML_DOM][dataHTML_DOM])

    data_dados.innerHTML = `
    <p>${OBJ_LOCAL[dataHTML_DOM][dataHTML_DOM][0].user}</p>
    <p>${OBJ_LOCAL[dataHTML_DOM][dataHTML_DOM][0].id}</p>
    <p>${OBJ_LOCAL[dataHTML_DOM][dataHTML_DOM][0].insc_user}</p>
    <p>${OBJ_LOCAL[dataHTML_DOM][dataHTML_DOM][0].cep}</p>
    `;
};




// Amazena no amasenamento local do navegador:
const ADD_LOCAL_SORAGE__ = (y_boolean, email_register) => {
    const OBJ_LOCAL = JSON.parse(localStorage.getItem('API_DATA_SET'));
    /*let atual = OBJ_LOCAL[email_register] = temp;
    localStorage.setItem('API_DATA_SET', JSON.stringify(atual));

    OBJ_LOCAL[email_register] = temp;*/
    dataHTML_DOM = email_register;

    if (OBJ_LOCAL[email_register] == "") {
        console.log("Sem dados...");
        return;
    } else {
        console.log("Obj Local: ", OBJ_LOCAL[email_register]);
        console.log("COM")
    }

    const data_dados = document.getElementById('data_dados');
    for (const key in temp) {
        if (email_register == key) {
            console.log("Ok, existe!");
            ESPELHO_DATA();
            break;
        } else {
            console.log("Não existe!");
            // temp[email_register] = API_DATA;
            console.log("AA", temp);
            break
        }
        // console.log("Email", temp[email_register][key][0].email_register);
        // console.log("AA", temp)
    }

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
let x = 0;
const ADD_DATA_CLASS = (DATA_boolean, user, id, insc_user, cep, email_register, password_register, password_register_two) => {
    if (!DATA_boolean) { return; };

    const API_DATA = {};
    
    API_DATA[email_register] = [{
        user: user,
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
document.getElementById('register_edit').addEventListener('click', () => {
    dataLogin(CHECK_PASSWORD_EMAIL, ADD_DATA_CLASS);
});