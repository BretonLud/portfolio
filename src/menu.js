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

    check.checked = false; 

    check.addEventListener('click' , function(){

       

        if (check.checked == true){
        
            menu.style.visibility = "visible";
            menu.style.opacity = "1";
            menu.style.transitionDuration = "0.5s";
            logo.style.borderBottomLeftRadius = "0";
            logo.style.borderBottomRightRadius = "0";
            logo.style.transitionDuration = "0.5s";
            mobile.style.backgroundColor = "white";
            mobile.style.transitionDuration = "0.5s"

            presentation.onclick = function(){
                menu.style.visibility = "hidden";
                menu.style.opacity = "0";
                menu.style.transitionDuration = "0.5s";
                check.checked = false;
                logo.style.borderBottomLeftRadius = "1em";
                logo.style.borderBottomRightRadius = "1em";
                mobile.style.backgroundColor = "#0D1277";
            }
            
            skills.onclick = function(){
                menu.style.visibility = "hidden";
                menu.style.opacity = "0";
                menu.style.transitionDuration = "0.5s";
                check.checked = false;
                logo.style.borderBottomLeftRadius = "1em";
                logo.style.borderBottomRightRadius = "1em";
                mobile.style.backgroundColor = "#0D1277";
            }
        
            project.onclick = function(){
                menu.style.visibility = "hidden";
                menu.style.opacity = "0";
                menu.style.transitionDuration = "0.5s";
                check.checked = false;
                logo.style.borderBottomLeftRadius = "1em";
                logo.style.borderBottomRightRadius = "1em";
                mobile.style.backgroundColor = "#0D1277";
            }
        
            contact.onclick = function(){
                menu.style.visibility = "hidden";
                menu.style.opacity = "0";
                menu.style.transitionDuration = "0.5s";
                check.checked = false;
                logo.style.borderBottomLeftRadius = "1em";
                logo.style.borderBottomRightRadius = "1em";
                mobile.style.backgroundColor = "#0D1277";
            }

            function reportWindowSize() {

                var screenObj = window.innerWidth;
 
                if (screenObj > 768){
 
                     menu.style.flexDirection = "row";
                     menu.style.opacity = "1";
                     menu.style.visibility = "visible";

                     presentation.onclick = function(){
                        menu.style.opacity = "1";
                        menu.style.visibility = "visible";
                    }
                    
                    skills.onclick = function(){
                        menu.style.opacity = "1";
                        menu.style.visibility = "visible";
                    }
                
                    project.onclick = function(){
                        menu.style.opacity = "1";
                        menu.style.visibility = "visible";
                    }
                
                    contact.onclick = function(){
                        menu.style.opacity = "1";
                        menu.style.visibility = "visible";
                    }
                } else {

                    check.checked = false;
                    menu.style.visibility = "hidden";
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

            menu.style.visibility = "hidden";
            logo.style.borderBottomLeftRadius = "1em";
            logo.style.borderBottomRightRadius = "1em";
            mobile.style.backgroundColor = "#0D1277";
            menu.style.opacity = "0";
            menu.style.transitionDuration = "0.5s";
            
            function reportWindowSize() {

               var screenObj = window.innerWidth;

               if (screenObj > 768){

                    menu.style.visibility = "visible";
                    menu.style.opacity = "1";
                    menu.style.flexDirection = "row";
                    presentation.onclick = function(){
                        menu.style.opacity = "1";
                        menu.style.visibility = "visible";
                    }
                    
                    skills.onclick = function(){
                        menu.style.opacity = "1";
                        menu.style.visibility = "visible";
                    }
                
                    project.onclick = function(){
                        menu.style.opacity = "1";
                        menu.style.visibility = "visible";
                    }
                
                    contact.onclick = function(){
                        menu.style.opacity = "1";
                        menu.style.visibility = "visible";
                    }

               } else {
                    menu.style.visibility = "hidden";
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
    })    
} else {

    function reportWindowSize() {

       var screenObj = window.innerWidth;
        
        if (screenObj <= 768){

            menu.style.visibility ="hidden";
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
                    menu.style.visibility = "visible";
                    menu.style.transitionDuration = "1s";
                    logo.style.borderBottomLeftRadius = "0";
                    logo.style.borderBottomRightRadius = "0";
                    logo.style.transitionDuration = "1s";
                    mobile.style.backgroundColor = "white";
                    mobile.style.transitionDuration = "1s"
                        
                } else if (check.checked == false) {
                
                    menu.style.visibility = "hidden";
                    menu.style.flexDirection = "column";
                    menu.style.opacity = "0";
                    menu.style.transitionDuration = "1s";
                    check.checked = false; 
                    logo.style.borderBottomLeftRadius = "1em";
                    logo.style.borderBottomRightRadius = "1em";
                    mobile.style.backgroundColor = "#0D1277";
                }
                
                presentation.onclick = function(){
                    menu.style.visibility = "hidden";
                    menu.style.opacity = "0";
                    menu.style.transitionDuration = "1s";
                    check.checked = false;
                    logo.style.borderBottomLeftRadius = "1em";
                    logo.style.borderBottomRightRadius = "1em";
                    mobile.style.backgroundColor = "#0D1277";
                }
            
                skills.onclick = function(){
                    menu.style.visibility = "hidden";
                    menu.style.opacity = "0";
                    menu.style.transitionDuration = "1s";
                    check.checked = false;
                    logo.style.borderBottomLeftRadius = "1em";
                    logo.style.borderBottomRightRadius = "1em";
                    mobile.style.backgroundColor = "#0D1277";
                }
            
                project.onclick = function(){
                    menu.style.visibility = "hidden";
                    menu.style.opacity = "0";
                    menu.style.transitionDuration = "1s";
                    check.checked = false;
                    logo.style.borderBottomLeftRadius = "1em";
                    logo.style.borderBottomRightRadius = "1em";
                    mobile.style.backgroundColor = "#0D1277";
                }
            
                contact.onclick = function(){
                    menu.style.visibility = "hidden";
                    menu.style.opacity = "0";
                    menu.style.transitionDuration = "1s";
                    check.checked = false;
                    logo.style.borderBottomLeftRadius = "1em";
                    logo.style.borderBottomRightRadius = "1em";
                    mobile.style.backgroundColor = "#0D1277";
                }
            })    
        
        } else if (screenObj > 768) {
        
            check.checked = false;
            menu.style.flexDirection = "row";
            menu.style.opacity = "1";
            menu.style.visibility = "visible";
            
              
                presentation.onclick = function(){
                    menu.style.opacity = "1";
                    menu.style.visibility = "visible";
                    
                }
            
                skills.onclick = function(){
                    menu.style.opacity = "1";
                    menu.style.visibility = "visible";
                    
                }
            
                project.onclick = function(){
                    menu.style.opacity = "1";
                    menu.style.visibility = "visible";
                }
            
                contact.onclick = function(){
                    menu.style.opacity = "1";
                    menu.style.visibility = "visible";
                }
        
        }

    }    

    window.onresize = reportWindowSize;
}

