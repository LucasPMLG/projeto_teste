function Logar() {
    let nome = document.getElementById("#username").value;
    let senha = document.getElementById("#password").value;

    if (nome == "admin" && senha == "123"){
        window.location.href = "index.html";
    } else {
        alert("Não foi possível logar. Credenciais incorretas")
    }
    
}