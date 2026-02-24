
// function ultraSmoothScroll(target) {
//   const element = document.querySelector(target);
//   const top = element.getBoundingClientRect().top + window.scrollY;

//   window.scrollTo({
//     top: top,
//     behavior: "smooth"
//   });
// }




const smalltitles = document.querySelectorAll(".smalltitles");

const smallobserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("show", entry.isIntersecting);
  });
}, { threshold: 0.25 });

smalltitles.forEach(el => smallobserver.observe(el));


// const h1title = document.querySelector("h1");

// const h1observer = new IntersectionObserver((entries) => {
//   const entry = entries[0]; // only one element

//   if (entry.isIntersecting) {
//     h1title.classList.add("show");
//   }
// }, { threshold: 0.3 });

// h1observer.observe(h1title);


// const paragraph=document.querySelectorAll("p");
// const paragraphobserver=new IntersectionObserver((entries)=>{
//     entries.forEach(entry=>{
//         entry.target.classList.toggle("show",entry.isIntersecting);
//     });
// },{threshold:0.25});

// paragraph.forEach(el=>paragraphobserver.observe(el));


const section1=document.querySelector("#herosec1_container");
const sec1observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        const sec1p = entry.target.querySelector("p");
        const sec1h1 = entry.target.querySelector("h1");
        const sec1bookaclassbutton=entry.target.querySelector("#bookaclass");
        const sec1exploreservicesbutton=entry.target.querySelector("#exploreservices");
        const sec1happymembers=entry.target.querySelectorAll(".happymembers");
       
        if(entry.isIntersecting){
            sec1h1.classList.add("show");
            sec1p.classList.add("show");
            setTimeout(()=>{
                sec1happymembers.forEach(value=>{
                    value.classList.add("show")
                })
            },800);

            setTimeout(()=>{
                sec1bookaclassbutton.classList.add("show")
            },1000);
            
            setTimeout(()=>{
                sec1exploreservicesbutton.classList.add("show")
            },1000);
        }
        else{
            sec1h1.classList.remove("show");
            sec1p.classList.remove("show");
            sec1bookaclassbutton.classList.remove("show");
            sec1exploreservicesbutton.classList.remove("show");
            sec1happymembers.forEach(value=>{
                    value.classList.remove("show")
                })       
        }
    })
},{threshold:0.3})
sec1observer.observe(section1);


//ANIMATION FOR SEC 2 //
const section2=document.querySelector("#herosec2_container")
const observer= new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        const sec2p = entry.target.querySelector("p");
        const sec2secondpara=entry.target.querySelector("#herosec2_secondpara")
        const sec2h2 = entry.target.querySelector("h2");
        const sec2a=entry.target.querySelector("a");
        const sec2img=entry.target.querySelector("#philosophyimg")
        if(entry.isIntersecting){
            sec2h2.classList.add("show");
            setTimeout(()=>{
                sec2p.classList.add("show")
            },1000);
            setTimeout(()=>{
                sec2secondpara.classList.add("show")
            },1200);
            setTimeout(()=>{
                sec2a.classList.add("show")
            },1500);
            sec2img.classList.add("show");
        }
        else{
            sec2h2.classList.remove("show");
            sec2p.classList.remove("show");
            sec2a.classList.remove("show");
            sec2img.classList.remove("show")
            sec2secondpara.classList.remove("show")
        }  
    })
},{threshold:0.3})
observer.observe(section2);



// FOR SEC3 ANIMATION//
const section3=document.querySelector("#herosec3_container");
const sec3observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        const sec3p = entry.target.querySelector("p");
        const sec3h2 = entry.target.querySelector("h2");
        const sec3btn=entry.target.querySelector("#viewallservice");
        const sec3serviceboxes=entry.target.querySelectorAll(".serviceboxes")
        if(entry.isIntersecting){
            sec3h2.classList.add("show");
            setTimeout(()=>{
                sec3p.classList.add("show")
            },1000);
            
            setTimeout(()=>{
                sec3btn.classList.add("show")
            },1500);
            setTimeout(()=>{               
                entry.classList.add("show");
            },1000);
            sec3serviceboxes.forEach((entry,index)=>{
                setTimeout(()=>{               
                    entry.classList.add("show");
                },index*350);
                
            });

        }
        else{
            sec3h2.classList.remove("show");
            sec3p.classList.remove("show");
            sec3btn.classList.remove("show");
            sec3serviceboxes.forEach(entry=>{
                entry.classList.remove("show")});
            
        }
    })
},{threshold:0.3})
sec3observer.observe(section3);


//FOR HEROSEC4 ANIMATION//

const section4=document.querySelector("#herosec4_container");
const sec4observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        const sec4img1=entry.target.querySelector("#sec4_img1")
        const sec4img2=entry.target.querySelector("#sec4_img2")
        const classtype=entry.target.querySelectorAll(".classtype");
        const classname=entry.target.querySelectorAll(".classname");
        const classtime=entry.target.querySelectorAll(".classtime");
        const sec4btn=entry.target.querySelector("a")
        if(entry.isIntersecting){
            sec4img1.classList.add("show");
            sec4img2.classList.add("show");
            classtype.forEach(eachvalue=>{
                eachvalue.classList.add("show");
            });
            
            setTimeout(()=>{
                classname.forEach(value=>{
                    value.classList.add("show");
                })
            },800);
            setTimeout(()=>{
                classtime.forEach(value=>{
                    value.classList.add("show");
                })
            },1000);
            setTimeout(()=>{
                sec4btn.classList.add("show")
            },1500);

        }
        else{
            classtime.forEach(value=>{
                value.classList.remove("show");
            });
            classname.forEach(value=>{
                value.classList.remove("show");
            });
            sec4img1.classList.remove("show");
            sec4img2.classList.remove("show");
            classtype.forEach(eachvalue=>{
                eachvalue.classList.remove("show");
            });
            sec4btn.classList.remove("show")
        }
    })
},{threshold:0.3});
sec4observer.observe(section4);


// HEROSEC5 ANIMATION//

const section5=document.querySelector("#hero5_container");
const sec5observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        const sec5h2=entry.target.querySelector("h2");
        const sec5feedbackcontainer=entry.target.querySelector("#carousel_track");
        if(entry.isIntersecting){
            sec5h2.classList.add("show");
            sec5feedbackcontainer.classList.add("show");
        }
        else{
            sec5h2.classList.remove("show");
            sec5feedbackcontainer.classList.remove("show");

        }

    })
},{threshold:0.3});
sec5observer.observe(section5);

//FOR SEC6 ANIMATION//

const section6=document.querySelector("#herosec6_container");
const sec6observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        const sec6p = entry.target.querySelector("p");
        const sec6h2 = entry.target.querySelector("h2");
        const sec6bookyouerclassbutton=entry.target.querySelector("#bookyourclassbutton");
        const sec6contactusbutton=entry.target.querySelector("#contactusbutton");
       
        if(entry.isIntersecting){
            sec6h2.classList.add("show");
            sec6p.classList.add("show");
            setTimeout(()=>{
                sec6bookyouerclassbutton.classList.add("show")
            },1000);
            
            setTimeout(()=>{
                sec6contactusbutton.classList.add("show")
            },1300);
          
            

        }
        else{
            sec6h2.classList.remove("show");
            sec6p.classList.remove("show");
            sec6bookyouerclassbutton.classList.remove("show");
            sec6contactusbutton.classList.remove("show");       
        }
    })
},{threshold:0.3})
sec6observer.observe(section6);

// FOR LOCATION

const locationcontainerr=document.querySelector("#location_container");
const locobserver=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        const locationtitle= entry.target.querySelector("#findourlocation");
        const locationbagmati = entry.target.querySelector("#bagmati");
        const locationp=entry.target.querySelector("#ourlocationcaption");
        const locationimg=entry.target.querySelector("#ourlocationsmallcontainer");
       
        if(entry.isIntersecting){
            locationtitle.classList.add("show");
            locationbagmati.classList.add("show");
            locationp.classList.add("show");
            setTimeout(()=>{
                locationimg.classList.add("show")
            },1000);         
        }
        else{
            locationtitle.classList.remove("show");
            locationbagmati.classList.remove("show");
            locationp.classList.remove("show");
            locationimg.classList.remove("show"); 
        }
    })
},{threshold:0.3})
locobserver.observe(locationcontainerr);








