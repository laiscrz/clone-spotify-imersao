// Greeting = BOM DIA | BOA TARDE | BOA NOITE

// Obtém-se através do elemento com o ID "greeting"
const greetingElement = document.getElementById("greeting")

// Obtém-se a hora atual do sistema
const currentHour = new Date().getHours()

// Define a saudação com base na hora atual
if (currentHour >= 5 && currentHour < 12) {
    greetingElement.textContent = "Bom dia!"
} else if (currentHour >= 12 && currentHour < 18) {
    greetingElement.textContent = "Boa Tarde!"
} else {
    greetingElement.textContent = "Boa Noite!"
}
