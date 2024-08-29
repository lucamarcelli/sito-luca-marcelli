document.getElementById('myForm').addEventListener('submit', sendMail);

function sendMail(event) {
    event.preventDefault();

    emailjs.init({
        publicKey: "z6zUbc3j5ppKwUelx",
    });

    var params = {
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }


    const serviceID = "service_nbgcdra";
    const templateID = "template_a659v2d";

    emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("surname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);

        alert('Email inviata con successo!');

    }).catch((err) => console.log(err));
}