

// window.onload = function() {

  

//   setTimeout(function() {
//       document.body.style.overflow = 'auto'; 

//   }, 12000);
// };



// cursor
let cursor = document.getElementById("cursor");
let cursoro = document.getElementById("cursoro");
let navi = document.getElementById("navi");
let lps = document.getElementById("lps");
let lps1 = document.getElementById("lps1");
let lps2 = document.getElementById("lps2");
let lps3 = document.getElementById("lps3");

navi.addEventListener("mousemove", function(e){
gsap.to(cursor,{
 x:e.x,
y:e.y,


})
})
navi.addEventListener("mouseenter", function(e){
  gsap.to(cursor,{
  scale:1,
  })
  })

navi.addEventListener("mouseleave", function(e){
  gsap.to(cursor,{
    scale:0,
 
  })
})
lps3.addEventListener("mouseenter", function(e){
  gsap.to(cursoro,{
opacity:1,

  })
  })

lps3.addEventListener("mousemove", function(e){
  gsap.to(cursoro,{
   x:e.x,
  y:e.y,
  
  
  })
  })
 
    
  lps3.addEventListener("mouseleave", function(e){
    gsap.to(cursoro,{
      opacity: 0,
      
   
   
    })
  })
  let sca = document.getElementById("sca");
  let sca11 = document.getElementById("sca11");
  let sca1 = document.getElementById("sca1");
  let sca2 = document.getElementById("sca2");
  sca.addEventListener("mouseenter", function(e){
    cursoro.innerHTML = "View 3D";
    gsap.to(cursoro,{
  scale:1,
color:"black",
backgroundColor: "#ffffff96",
  
    })
    })
  sca.addEventListener("mouseleave", function(e){
    cursoro.innerHTML = "";

      gsap.to(cursoro,{
scale:0.3,


        
     
     
      })
    })

    











    sca11.addEventListener("mouseenter", function(e){
      cursoro.innerHTML = "View 3D";
      gsap.to(cursoro,{
    scale:1,
  color:"black",
  backgroundColor: "#ffffff96",
    
      })
      })
    sca11.addEventListener("mouseleave", function(e){
      cursoro.innerHTML = "";
  
        gsap.to(cursoro,{
  scale:0.3,
  
  
          
       
       
        })
      })



      sca1.addEventListener("mouseenter", function(e){
        cursoro.innerHTML = "View 3D";
        gsap.to(cursoro,{
      scale:1,
    color:"black",
    backgroundColor: "#ffffff96",
      
        })
        })
      sca1.addEventListener("mouseleave", function(e){
        cursoro.innerHTML = "";
    
          gsap.to(cursoro,{
    scale:0.3,
    
    
            
         
         
          })
        })
  




        
    sca2.addEventListener("mouseenter", function(e){
      cursoro.innerHTML = "View 3D";
      gsap.to(cursoro,{
    scale:1,
  color:"black",
  backgroundColor: "#ffffff96",
    
      })
      })
    sca2.addEventListener("mouseleave", function(e){
      cursoro.innerHTML = "";
  
        gsap.to(cursoro,{
  scale:0.3,
  
  
          
       
       
        })
      })




let cursorin = document.getElementById("cursorin");







gsap.from(".circle",2,{
top:"-250%",
delay:0.5,
ease:"elastic.out",
});
gsap.to(".incircler",1,{

delay:1,
ease:"power4.inOut",
scale:1,

});
gsap.to(".incircle",1,{
  
  delay:1.5,
    ease:"power4.inOut",
    scale:1,
    
    });
    gsap.to(".circle",1,{

        delay:2,
        ease:"power4.inOut",
      rotation:360,
        
        });

gsap.to(".vide",2,{
    delay:4,
    display:"block",
});
gsap.fromTo(".explore",{
    duration:2.5,
    delay:3,
 left:"150%",
 scale:0.7,
 ease:"power4.inOut",
 border: "1px solid rgba(255, 255, 255, 0.476)",
},
{
    duration:1,
ease:"power4.inOut",
delay:3.5,
left:"50%",


}
);

gsap.to(".circle",1,{
    rotation:0,
     ease:"power4.inOut",
     delay:7.2,
   
    
 });
gsap.to(".loader-main",1,{
    delay:8.2,

    scale:0,
     ease:"power4.inOut",

})
gsap.to(".explore",1,{
 border: "0px",

    delay:9,
    scale:1,
     ease:"power4.inOut",

})
gsap.to(".px1",{
   top:"50%",
   delay:10,
duration:1,
ease:"elastic.out",
});
gsap.to(".px1",{
    top:"140%",
    delay:11,
 duration:1.2,
 ease:"elastic.out",
 });

 gsap.to(".px2",{
    top:"50%",
    delay:11.3,
 duration:1,
 ease:"elastic.out",
 });
 gsap.to(".px2",{
     top:"140%",
     delay:12.3,
  duration:1.2,
  ease:"elastic.out",
  });
  

  gsap.to(".none",{
      delay:13.3,
      height:"0vh",

      
    });
    
   let nope = document.querySelector(".none")
//     window.addEventListener("load", function(){
// nope.style.height = "0vh";
//   })
  window.onload = function() {

  

    setTimeout(function() {
      // nope.style.height = '0vh'; 
      // nope.style.transition = '0.3s'; 
      document.body.style.overflow = 'auto'; 
  
    }, 12000);
  };

let resp = gsap.matchMedia();
resp.add("(min-width:800px)", ()=>{

  gsap.set(".slidesm",{scale:6})



  let tl = gsap.timeline({
  
    scrollTrigger:{
      trigger:".hero",
  start:"top top",

  end:"bottom top",
  // end: "+=" + (window.innerHeight * 2),
  // anticipatePin: true,
  pin:true,
  scrub:4,
    }
  })
  
  tl.
  to(".videoabs",{
   opacity:0,
   
  
    
    
    },'samese')
  .to(".vidparent",{
  '--clip':"0%",
  // ease:"Power2.Out",
  
  
  },'same')
  .to(".slidesm",{
  scale:1,
  // ease:"Power2.Out",
  
  },'same')
  .to(".start",{
  xPercent:-20,
  stagger: .03,
  ease:Power4.Out
  
  },'sames')
  .to(".center",{
    xPercent:20,
    stagger: .03,
    // ease:Power4.Out
    
    },'sames')
    .to(".start",{
      delay:1,
   opacity:0,
   
      
      },'sames')
      .to(".center",{
     
   opacity:0,
     
        },'samese')
  
})



let respo = gsap.matchMedia();
respo.add("(max-width:800px)", ()=>{


  

  let tl = gsap.timeline({
  
    scrollTrigger:{
      trigger:".hero",
  start:"top top",
  // end:"bottom top",
  end: "+=" + (window.innerHeight * 3),
  // anticipatePin: true,
  pin:true,
  scrub:2,
    }
  })

  tl.
  to(".videoabs",{
   opacity:0,
  
  
    
    
    },'same')
  .to(".vidparent",{
  '--clip':"0%",
  // ease:"Power2.Out",
  
  
  },'same')
  .to(".start",{
  xPercent:-30,
  stagger: .03,
  ease:Power4.Out
  
  },'sames')
  .to(".center",{
    xPercent:30,
    stagger: .03,
    // ease:Power4.Out
    
    },'sames')

  
})







 let a = document.getElementById("a");
 let a_value = 100;
 let counter = 0;
 let ain = setInterval(()=> {
   if (counter == a_value) {
     clearInterval(ain);
   }else{
     counter += 1;
     a.innerHTML = counter + "%";
   }
 }, 60);





const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const frameCount = 200;
const images = [];
const imageSeq = { frame: 0 };


for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = `images/f/(${i + 1}).jpg`; 
    images.push(img);
}


gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
        trigger: ".scp",
        start: "top top", 
        end: "bottom top", 
        pin: true, 
        scrub:4,

       
     
      },
    onUpdate: render,
});

function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    const img = images[imageSeq.frame];
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;
    context.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
}

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
});





let isAnimating = false;
function splitTextIntoSpans(selector) {
  let elements = document.querySelectorAll(selector);
  elements.forEach(element => {
    let text = element.innerText;
    let splitText = text
      .split("")
      .map(function(char) {
        return `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`;
      })
      .join("");
    element.innerHTML = splitText;
  });
}


function initializeCards() {
  let cards = Array.from(document.querySelectorAll(".card"));
  gsap.to(cards, {
    y: i => -15 + 15 * i + "%",
    z: i => 15 * i,
    duration: 1,
    ease:"Power2.Out",
    stagger: -0.1
  });
}

document.addEventListener("DOMContentLoaded", () => {
  splitTextIntoSpans(".copy h1");
  initializeCards();
  gsap.set("h1 span", { y: -200 });
  gsap.set(".slider .card:last-child h1 span", { y: 0 });
});


document.addEventListener("click", () => {
 
  if (isAnimating) return;


  isAnimating = true;

  let slider = document.querySelector(".slider");
  let cards = Array.from(slider.querySelectorAll(".card"));
  let lastCard = cards.pop(); 
  let nextCard = cards[cards.length - 1]; 

  // Animation

  gsap.to(lastCard.querySelectorAll("h1 span"), {
    y: 200,
    duration: 0.75,
    ease:"Power2.Out",
  });

  gsap.to(lastCard, {
    y: "+=150%",
    duration: 0.75,
    ease:"Power2.Out",
    onComplete: () => {
     
      slider.prepend(lastCard);
      
      initializeCards();
     
      gsap.set(lastCard.querySelectorAll("h1"), { y: -200 });

      setTimeout(() => {
        isAnimating = false;
      }, 1000);
    }
  });

  gsap.to(nextCard.querySelectorAll("h1"), {
    y: 0,
    duration: 1,
    ease:"Power2.Out",
    stagger: 0.05
  });
});



var tc = gsap.timeline({scrollTrigger:{
  trigger:"#main",
  // markers:true,
  start:"38% 50%",
  end:"100% 50%",
  scrub:2,
  pin:true
}});
tc
.to(".text",{
  top: "-7%",
},'a')
.to("#card-one",{
  top: "35%",
},'a')
.to("#card-two",{
  top: "130%"
},'a')
.to("#card-two",{
  top: "42%"
},'b')
.to("#card-one",{
  width: "65%",
  height: "65vh"
},'b')
.to("#card-three",{
  top: "130%"
}, 'b')
.to("#card-three",{
  top: "50%"
}, 'c')
.to("#card-two",{
  width: "70%",
  height: "70vh"
},'c')

const image = document.getElementById('tyreWheel');
const parent = document.querySelector('.steerparent');

parent.addEventListener('mousemove', (e) => {
    const { width } = parent.getBoundingClientRect();
    const xPos = e.clientX;
    const rotation = (xPos / width) * 360; 
    
    image.style.transform = `rotate(${rotation}deg)`; 
});

parent.addEventListener('mouseleave', () => {
    image.style.transform = `rotate(0deg)`; 
});




