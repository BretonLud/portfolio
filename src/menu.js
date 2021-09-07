export * from './menu';

//get id

const logo = document.getElementById("logo")
const menu = document.getElementById("menu")
const presentation = document.getElementById("1")
const skills = document.getElementById("2")
const project = document.getElementById("3")
const contact = document.getElementById("4")
const check = document.getElementById("mobile")

window.onresize = reportWindowSize;

function reportWindowSize() {
    
    const screenObj = window.innerWidth;

    if ( screenObj <= 768){

        menu.style.display = "none";

        check.addEventListener('click' , function(){

            presentation.onclick = function(){
                menu.style.display = "none";
                check.checked = false;
                logo.style.borderBottomLeftRadius = "1em";
                logo.style.borderBottomRightRadius = "1em";
            }
        
            skills.onclick = function(){
                menu.style.display = "none";
                check.checked = false;
                logo.style.borderBottomLeftRadius = "1em";
                logo.style.borderBottomRightRadius = "1em";
            }
        
            project.onclick = function(){
                menu.style.display = "none";
                check.checked = false;
                logo.style.borderBottomLeftRadius = "1em";
                logo.style.borderBottomRightRadius = "1em";
            }
        
            contact.onclick = function(){
                menu.style.display = "none";
                check.checked = false;
                logo.style.borderBottomLeftRadius = "1em";
                logo.style.borderBottomRightRadius = "1em";
            }

            if (check.checked == true){
                menu.style.display = "flex";
                menu.style.background = "white";
                menu.style.flexDirection = "column";
                menu.style.borderBottomLeftRadius = "1em";
                menu.style.borderBottomRightRadius = "1em";
                logo.style.borderBottomLeftRadius = "0";
                logo.style.borderBottomRightRadius = "0";        
            } else if (check.checked == false) {
                menu.style.display = "none";
                logo.style.borderBottomLeftRadius = "1em";
                logo.style.borderBottomRightRadius = "1em";
            }
        }) 
    } else {
        menu.style.display = "flex";
        menu.style.flexDirection = "row";
    }
}