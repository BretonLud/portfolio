export * from './menu';

//get id

const logo = document.getElementById("logo")
const menu = document.getElementById("menu")
const mobile = document.getElementById("mobile")
const presentation = document.getElementById("1")
const skills = document.getElementById("2")
const project = document.getElementById("3")
const contact = document.getElementById("4")
const check = document.getElementById("check")
const smallScreen = window.matchMedia("(max-width: 768px)").matches;
var screen = window.innerWidth

if (smallScreen) {

    check.addEventListener('click' , function(){

        

        if (check.checked == true){
        
           
            menu.style.opacity = "1";
            menu.style.transitionDuration = "1s";
            logo.style.borderBottomLeftRadius = "0";
            logo.style.borderBottomRightRadius = "0";
            logo.style.transitionDuration = "1s";
            mobile.style.backgroundColor = "white";
            mobile.style.transitionDuration = "1s"

            function reportWindowSize() {

                var screenObj = window.innerWidth;
 
                if (screenObj > 768){
 
                     menu.style.flexDirection = "row";
                     menu.style.opacity = "1";
                } else {

                    check.checked = false;
                    menu.style.opacity = "0";
                    menu.style.transitionDuration = "0s";
                    menu.style.flexDirection = "column";
                    logo.style.borderBottomLeftRadius = "1em";
                    logo.style.borderBottomRightRadius = "1em";
                    mobile.style.backgroundColor = "#0D1277";

                }
             }    
 
             window.onresize = reportWindowSize;
                
        } else if (check.checked == false) {

            logo.style.borderBottomLeftRadius = "1em";
            logo.style.borderBottomRightRadius = "1em";
            mobile.style.backgroundColor = "#0D1277";
            menu.style.opacity = "0";
            menu.style.transitionDuration = "1s";
            
            function reportWindowSize() {

               var screenObj = window.innerWidth;

               if (screenObj > 768){

                    menu.style.opacity = "1";
                    menu.style.flexDirection = "row";
               } else {
                    menu.style.flexDirection = "column";
                    menu.style.opacity = "0";
                    menu.style.transitionDuration = "0s";
                    check.checked = false; 
                    logo.style.borderBottomLeftRadius = "1em";
                    logo.style.borderBottomRightRadius = "1em";
                    mobile.style.backgroundColor = "#0D1277";
               }
            }    

            window.onresize = reportWindowSize;

           
        }

        presentation.onclick = function(){
            menu.style.opacity = "0";
            menu.style.transitionDuration = "1s";
            check.checked = false;
            logo.style.borderBottomLeftRadius = "1em";
            logo.style.borderBottomRightRadius = "1em";
            mobile.style.backgroundColor = "#0D1277";
        }
    
        skills.onclick = function(){
            menu.style.opacity = "0";
            menu.style.transitionDuration = "1s";
            check.checked = false;
            logo.style.borderBottomLeftRadius = "1em";
            logo.style.borderBottomRightRadius = "1em";
            mobile.style.backgroundColor = "#0D1277";
        }
    
        project.onclick = function(){
            menu.style.opacity = "0";
            menu.style.transitionDuration = "1s";
            check.checked = false;
            logo.style.borderBottomLeftRadius = "1em";
            logo.style.borderBottomRightRadius = "1em";
            mobile.style.backgroundColor = "#0D1277";
        }
    
        contact.onclick = function(){
            menu.style.opacity = "0";
            menu.style.transitionDuration = "1s";
            check.checked = false;
            logo.style.borderBottomLeftRadius = "1em";
            logo.style.borderBottomRightRadius = "1em";
            mobile.style.backgroundColor = "#0D1277";
        }
    })    
} else {

    function reportWindowSize() {

       var screenObj = window.innerWidth;
        
        if (screenObj <= 768){

            menu.style.opacity = "0";
            menu.style.transitionDuration = "0s";
            logo.style.borderBottomLeftRadius = "1em";
            logo.style.borderBottomRightRadius = "1em";
            logo.style.transitionDuration = "0s"
            mobile.style.backgroundColor = "#0D1277";
            mobile.style.transitionDuration = "0s";

            check.addEventListener('click' , function(){

                

                if (check.checked == true){
                    menu.style.background = "white";
                    menu.style.flexDirection = "column";
                    menu.style.borderBottomLeftRadius = "1em";
                    menu.style.borderBottomRightRadius = "1em";
                    menu.style.opacity = "1";
                    menu.style.transitionDuration = "1s";
                    logo.style.borderBottomLeftRadius = "0";
                    logo.style.borderBottomRightRadius = "0";
                    logo.style.transitionDuration = "1s";
                    mobile.style.backgroundColor = "white";
                    mobile.style.transitionDuration = "1s"
                        
                } else if (check.checked == false) {
        
                    menu.style.flexDirection = "column";
                    menu.style.opacity = "0";
                    menu.style.transitionDuration = "1s";
                    check.checked = false; 
                    logo.style.borderBottomLeftRadius = "1em";
                    logo.style.borderBottomRightRadius = "1em";
                    mobile.style.backgroundColor = "#0D1277";
                }
                
                presentation.onclick = function(){
                    menu.style.opacity = "0";
                    menu.style.transitionDuration = "1s";
                    check.checked = false;
                    logo.style.borderBottomLeftRadius = "1em";
                    logo.style.borderBottomRightRadius = "1em";
                    mobile.style.backgroundColor = "#0D1277";
                }
            
                skills.onclick = function(){
                    menu.style.opacity = "0";
                    menu.style.transitionDuration = "1s";
                    check.checked = false;
                    logo.style.borderBottomLeftRadius = "1em";
                    logo.style.borderBottomRightRadius = "1em";
                    mobile.style.backgroundColor = "#0D1277";
                }
            
                project.onclick = function(){
                    menu.style.opacity = "0";
                    menu.style.transitionDuration = "1s";
                    check.checked = false;
                    logo.style.borderBottomLeftRadius = "1em";
                    logo.style.borderBottomRightRadius = "1em";
                    mobile.style.backgroundColor = "#0D1277";
                }
            
                contact.onclick = function(){
                    menu.style.opacity = "0";
                    menu.style.transitionDuration = "1s";
                    check.checked = false;
                    logo.style.borderBottomLeftRadius = "1em";
                    logo.style.borderBottomRightRadius = "1em";
                    mobile.style.backgroundColor = "#0D1277";
                }
            })    
        
        } else {
            check.checked = false;
            menu.style.flexDirection = "row";
            menu.style.opacity = "1";
            
        }

    }    

    window.onresize = reportWindowSize;
}