export * from './ajax';


window.addEventListener('load', function (){
    let btn = document.querySelector("#btn");
    btn.addEventListener('click', sendData);
})

function sendData(){
    event.preventDefault();
    let form = document.querySelector('#myform');
    let data = new FormData(form);
    let response = document.querySelector('.response');

    let mail = document.querySelector("#email")
    let name = document.querySelector("#name")
    let objet = document.querySelector("#objet")
    let message = document.querySelector("#message")

    if(mail.validity.valid && name.validity.valid && objet.validity.valid && message.validity.valid ) {
        let text = message.value
        let regex = new RegExp('<\/?(.|\s|\S)*?>')
        let pseudo = name.value
        let subject = objet.value


        if(regex.test(text) === false && regex.test(pseudo) === false && regex.test(subject) === false) {

            let httpRequest = new XMLHttpRequest();
            httpRequest.open('POST', "mysql/mailContact.php");
            httpRequest.send(data);
            httpRequest.onreadystatechange = function () {

                if (httpRequest.readyState === 4 && httpRequest.status === 200) {

                    let obj = JSON.parse(httpRequest.response);
                    response.innerHTML = '<div id="resultat" class="' + obj.Response + '">' + obj.Message + '</div>';
                    response.classList.add("open")
                    let result = document.querySelector('#resultat')
                    if (result.classList.contains('success') ) {
                        setTimeout(function(){form.reset();},3000);
                    }
                } else {
                    response.innerHTML="<div class='err'>Impossible d'envoyer le mail</div>"
                }
            }
        } else {
             response.innerHTML="<div class='err'>Les balises ne sont pas autorisées</div>"
        }
    }
    else {
        response.innerHTML="<div class='err'>Merci de remplir les champs</div>"
    }
}