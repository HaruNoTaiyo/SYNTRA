function CriarForm(){
    document.getElementById("Form").innerHTML = "<form name='Personagem'><input type='text' name='Nick' id='Nome' placeholder='NickName'><button onclick='MostrarDados(event)'>Enviar</button></form>";
}

function MostrarDados(event){
    event.preventDefault();
    let nome = document.getElementById("Nome").value;
    document.getElementById("Form").innerHTML = `<h1>${nome}</h1>`
}