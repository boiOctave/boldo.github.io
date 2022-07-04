
                    // NAVBAR ON SCROLL COLOR 


                    const className = "inverted";
                    const scrollTrigger = 30;
                    const darkLogo =document.querySelector(".logo-dark")
                    const links =   document.querySelectorAll(".navlink")
                    const button =   document.querySelector(".submit-btn")
                     const navLinks =   document.querySelector(".nav-links")
                     const navMenu =   document.getElementById("navmenu")

                    window.onscroll = function() {
                      // We add pageYOffset for compatibility with IE.
                      if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
                        document.querySelector(".header-container ").classList.add(className);
                        darkLogo.style.display = "block"
                        // navClose.setAttribute(
                        //     "style", "display: none !important;")
                            navMenu.addEventListener("click", navClick=()=>{
                                navMenu.setAttribute(
                                    "style", "display: none !important;")
                                    navClose.setAttribute(
                                        "style", "display: block !important; color:rgba(10,38,64,1) !important;")
                            })
                            navClose.addEventListener("click", ()=>{
                                navClose.setAttribute(
                                    "style", "display: none !important;")
                                    navMenu.setAttribute(
                                        "style", "display: block !important; color:rgba(10,38,64,1) !important;")
                            })
                        navMenu.setAttribute(
                            "style", "color: rgba(10,38,64,1);")
                        button.setAttribute(
                            "style", "background: rgba(10,38,64,1); color:white;")
                            button.classList.add('white')
                        links.forEach(navlink=> {
                                navlink.style.color = "rgba(10,38,64,1)"
                        } )
                      } else {
                        document.querySelector(".header-container ").classList.remove(className);
                        darkLogo.style.display = ""
                        button.style.background= ""
                        button.classList.remove('white')
                        navMenu.style.color = ""
                        navMenu.addEventListener("click", navClick=()=>{
                            navMenu.setAttribute(
                                "style", "display: none !important;")
                                navClose.setAttribute(
                                    "style", "display: block !important; ")
                        })
                        navClose.addEventListener("click", ()=>{
                            navClose.setAttribute(
                                "style", "display: none !important;")
                                navMenu.setAttribute(
                                    "style", "display: block !important; color:white !important;")
                        })
                        button.style.color= ""
                        links.forEach(navlink=> {
                            navlink.style.color = ""
                    } )
                      }
                    };
                    

                     // NAVMENU SWITCH
                     
                     
                     const navClose =   document.getElementById("navclose")
                     navMenu.addEventListener("click", navClick=()=>{
                         navMenu.setAttribute(
        "style", "display: none !important;")
        navClose.setAttribute(
            "style", "display: block !important; color:rgba(10,38,64,1);")
            navLinks.classList.add("menuShow")
        })
        navClose.addEventListener("click", ()=>{
            navClose.setAttribute(
                "style", "display: none !important;")
                navMenu.setAttribute(
                    "style", "display: block !important;")
                    navLinks.classList.remove("menuShow")
            // navLinks.setAttribute(
            //     "style", "left: -600px !important; color:rgba(10,38,64,1);")
        })
        
        
        var screen = window.matchMedia("(min-width: 768px)")
        myFunction(screen) // Call listener function at run time
        screen.addListener(myFunction) // Attach listener function on state changes
        function myFunction(x) {
            if (x.matches) { // If media query matches
                navLinks.classList.remove("menuShow")
                if (window.getComputedStyle(navClose).display === "block") {
                    navClose.style.display=""
                    navMenu.setAttribute(
                        "style", "display: block !important; ")

                        //check window scroll
                        if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
                            navMenu.setAttribute(
                                "style", "display: block !important; color:rgba(10,38,64,1) !important;")
                        }
                  }
                // navClose.setAttribute(
                //     "style", "display: none !important;")
                //     navMenu.setAttribute(
                //         "style", "display: none !important;")
            } 
          }
        
        