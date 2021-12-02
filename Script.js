var login;
var banco = [];

const user = {
    name :'admin@1234.com',
    password : 123
}

const userName = document.getElementById('userName')
const userPassword = document.getElementById('userPassword');
const button = document.getElementById('button');
const themeError = 'theme-input-error';
const msgError = document.querySelector('.msg-error')

button.addEventListener('click', login);

function login() {
    const { name, password } = user

    if(userName.value && userPassword.value != "") {

            // Se usuario e senha corretos renderize proxima pagina
        if(name == userName.value && password == userPassword.value){
            setTimeout(() => {
                location.href = ".\Users\Felipe Pinheiro\Desktop\PETESTQ\Menu.html"
            }, 2000)
        }else {
            // Se não mostre msg error costumize os campos
            if(userName.value != name || userPassword.value != password){
                msgError.innerHTML = 'Usuário ou senha incorretos'
                userName.classList.add(themeError);
                userPassword.classList.add(themeError);
            }   
        };
    };
};

// Se o campo input receber o click limpe o evento chama a função limpar classe error
document.querySelector('input').addEventListener('click', clearClassError);
function clearClassError() {
    msgError.innerHTML = "";
    userName.classList.remove(themeError);
    userPassword.classList.remove(themeError);
}

/* Percorre as propriedades da inputfilds após o evento verifica se há campos invalid 
chama a função validatefils que vai apontar com a bolha msg de erro qual campo esta com erro*/
const inputFilds = document.querySelectorAll('[required]');
for(const fild of inputFilds){
    fild.addEventListener('invalid', validateFilds);
}

function validateFilds(event){
   const fild = event.target;
   
   function verifyErrorFild() {
    let findError = false;
    
        //bolha msg de error vai pegar o campo com erro
        for (const error in fild.validity){
            if(error !== 'customError' && fild.validity[error]){
                findError = true;
            }   
        };
        return findError;
    };
    const error = verifyErrorFild();
};

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
});