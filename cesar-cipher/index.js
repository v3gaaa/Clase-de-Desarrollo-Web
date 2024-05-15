const readlineSync = require("readline-sync");
const fs = require("fs");
const path = require("path");


function cesarCipher(str , idx) {
    let result = "";
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (letter of str){
        let index = alphabet.indexOf(letter);
        letter = letter.toLowerCase();
        if (index !== -1){
            let newIndex = (index + idx) % 26;
            let newLetter = alphabet[newIndex];
            result += newLetter;
        }
    }
    return result;
}

function registerUser() {
    let name = readlineSync.question("Enter your username: ");
    let password = cesarCipher(readlineSync.question("Enter your password: "), 7);

    addUser(name,password);

    console.log("Welcome " + name);
    console.log("Password " + password);
}

function addUser(userName, password) {
    const filePath = path.join(__dirname, 'users.json');
    let users = [];
    fs.readFile(filePath, (err, data) => {
        if (err){
            users;
        }else{
            users = JSON.parse(data);
        }

        users.push({userName, password});
        fs.writeFile(filePath, JSON.stringify(users), (err) => {
            if(err){
                console.log("Error adding user");
            }else{
                console.log("User added");
            }
        })
    })
}

function login(){
    let userName = readlineSync.question("Enter your username: ");
    let password = readlineSync.question("Enter your password: ");

    const filePath = path.join(__dirname, 'users.json');
    fs.readFile(filePath, (err, data) => {
        if(err){
            console.log("Error reading file");
        }else{
            for (let userNames of JSON.parse(data)) {
                if(userName === userNames.userName && cesarCipher(password,7) === userNames.password){
                    console.log('Welcome', userName);
                }else{
                    console.log("Wrong user or password");
                }
            }
        }
    })
}

function mostrarMenu() {
    let opcion;
    do {
        opcion = readlineSync.question("Menú:\n1. Registrar usuario\n2. Iniciar sesión\n0. Salir\nIngrese una opción:");
        opcion = parseInt(opcion);

        switch (opcion) {
            case 1:
                registerUser();
                break;
            case 2:
                console.log("Iniciar sesión");
                login();
                break;
            case 0:
                console.log("Saliendo...");
                break;
            default:
                console.log("Opción no válida, por favor intente de nuevo.");
                break;
        }
    } while (opcion !== 0);
}

mostrarMenu();