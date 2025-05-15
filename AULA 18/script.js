
document.getElementById("subtitulo").innerHTML = "Esse é meu segundo programa JavaScript";    

/*document.getElementById("resposta").innerHTML =
window.confirm("Você está gostando do curso?");*/

document.getElementById("resposta").innerHTML = "A idade digitada foi:" +
window.prompt("qual sua idade?");

function abrepagina() 
{
    window.open("AulaJS2.html", "_blank");
}

function enviadados()
{
    document.getElementById("inputusuario").innerHTML = "Nome emviado foi:" + window.prompt("Digite seu nome:")
}

function exibedados()
{
    window.alert("Nome digitado foi:" + document.getElementById("nome").value)
}