const yogasec1=document.querySelector("#yogafirstsec_container");
const yogafirstobserver=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        const smalltitle1=entry.target.querySelector("#smalltitle1");
        const smalltitle2=entry.target.querySelector("#smalltitle2");
        const firstsech1=entry.target.querySelector("h1");
        
        const firstsecp=entry.target.querySelector("p");
        const firstsecimg=entry.target.querySelector("#yogaimg")
        if(entry.isIntersecting){
            // smalltitles.classList.add("show")
            firstsech1.classList.add("show")
            firstsecp.classList.add("show")
            
            setTimeout(()=>{
                smalltitle1.classList.add("show")
            },1200)
            setTimeout(()=>{
                smalltitle2.classList.add("show")
            },1200)

            setTimeout(()=>{
                firstsecimg?.classList.add("show")
            },800)

          
        }
        else{
            firstsech1.classList.remove("show")
            firstsecp.classList.remove("show")
            firstsecimg?.classList.remove("show")
            smalltitle1.classList.remove("show")
            smalltitle2.classList.remove("show")

        }

    })
},{threshold:0.3})
yogafirstobserver.observe(yogasec1)



const yogasec2=document.querySelector("#exploreservicesstyle_container")
const yogasecondobserver=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        const secondsech2=entry.target.querySelector("h2")
        const secondsecp=entry.target.querySelector("p")
        // const yogastyleboxes=entry.target.querySelectorAll(".yogastyleboxes")
        if(entry.isIntersecting){
            secondsech2.classList.add("show");
            secondsecp.classList.add("show");
            // yogastyleboxes.forEach((entry,index)=>{
            //     setTimeout(()=>{               
            //         entry.classList.add("show");
            //     },index*350);
                
            // });
        }
        else{

            secondsech2.classList.remove("show")
            secondsecp.classList.remove("show")
            // yogastyleboxes.forEach(value=>{
            //     value.classList.remove("show")
            // })
        }
    })
},{threshold:0.3});
yogasecondobserver.observe(yogasec2);


const yogasec3=document.querySelector("#servicesbenefitsection");
const yogathirdobserver=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        const thirdsecsmalltitles=entry.target.querySelectorAll(".smalltitles")
        const thirdsech1=entry.target.querySelector("h2");
        const thirdsecp=entry.target.querySelector("#benefitparagraph")
        const thirdsecbenefit_cards=entry.target.querySelectorAll(".services_benefit_cards");
        if(entry.isIntersecting){
            thirdsecsmalltitles.forEach(value=>{
                value.classList.add("show")
            })
            thirdsech1.classList.add("show");
            setTimeout(()=>{
                thirdsecp.classList.add("show")
            },800)
            thirdsecbenefit_cards.forEach((entry,index)=>{
                setTimeout(()=>{               
                    entry.classList.add("show");
                },index*300);
            });

            
        }
        else{
            thirdsech1.classList.remove("show")
            thirdsecp.classList.remove("show")
            thirdsecsmalltitles.forEach(value=>{
                value.classList.remove("show")
            })
            thirdsecbenefit_cards.forEach(value=>{
                value.classList.remove("show")
            })
        
            
        }
    })
},{threshold:0.3})
yogathirdobserver.observe(yogasec3)



const servicessec4=document.querySelector("#servicesforsection_container")
const services4observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        const fourthsech2=entry.target.querySelector("h2")
        const fourthsecp=entry.target.querySelector("#servicesforparagraph")
        const fourthsecservicesfor=entry.target.querySelectorAll(".servicesCard")

        if(entry.isIntersecting){
            fourthsech2.classList.add("show")
            setTimeout(()=>{
                fourthsecp.classList.add("show")
            },500)
            fourthsecservicesfor.forEach((entry,index)=>{
                setTimeout(()=>{
                    entry.classList.add("show")
                },index*300);
            })
        }
        else{
            fourthsech2.classList.remove("show")
            fourthsecp.classList.remove("show")
            fourthsecservicesfor.forEach(value=>{
                value.classList.remove("show")
            })

        }
    })
},{threshold:0.3})
services4observer.observe(servicessec4)



const servicessec5=document.querySelector("#servicesoffers_main")
const services5observer=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        const fifthsech2=entry.target.querySelector("h2")
        const fifthsecp=entry.target.querySelector("p")
        const fifthofferrows=entry.target.querySelectorAll(".servicesOfferRow")

        if(entry.isIntersecting){
            fifthsech2.classList.add("show")
            setTimeout(()=>{
                fifthsecp.classList.add("show")
            },500)
            fifthofferrows.forEach((entry,index)=>{
                setTimeout(()=>{
                    entry.classList.add("show")
                },index*300);
            })
        }
        else{
            fifthsech2.classList.remove("show")
            fifthsecp.classList.remove("show")
            fifthofferrows.forEach(value=>{
                value.classList.remove("show")
            })

        }
    })
},{threshold:0.3})
services5observer.observe(servicessec5)


