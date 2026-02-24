const tipText = document.querySelector("#tipText");

const healthtipscollection = [
  //  Yoga
  "Practicing yoga daily improves flexibility and body balance.",
  "Morning yoga helps boost energy and focus for the day.",
  "Yoga poses improve posture and reduce back pain.",
  "Slow yoga stretches help relax tight muscles.",
  "Regular yoga practice supports joint health and mobility.",

  //  Meditation
  "Meditation helps calm the mind and reduce daily stress.",
  "Even 5 minutes of meditation improves mental clarity.",
  "Deep breathing during meditation lowers anxiety levels.",
  "Meditation improves concentration and emotional control.",
  "Practicing mindfulness helps you stay present and positive.",

  //  Nutrition
  "Eating a balanced diet provides energy for daily activities.",
  "Including fruits and vegetables boosts immunity naturally.",
  "Drinking enough water supports digestion and skin health.",
  "Limiting junk food helps maintain a healthy body weight.",
  "Eating at regular times improves digestion and metabolism.",

  // 🏃 Fitness
  "Regular exercise strengthens muscles and bones.",
  "Daily walking improves heart health and circulation.",
  "Stretching before workouts helps prevent injuries.",
  "Consistency in workouts gives better long-term results.",
  "Light exercise improves mood and reduces fatigue.",

  //  Mental Health
  "Getting enough sleep improves mood and brain function.",
  "Taking short breaks helps reduce mental burnout.",
  "Positive thinking supports emotional well-being.",
  "Talking with loved ones reduces stress and loneliness.",
  "Spending time in nature improves mental peace.",
  //  Lifestyle
  "Maintaining good posture prevents neck and back pain.",
  "Reducing screen time helps protect eye health.",
  "Following a daily routine improves discipline and focus.",
  "Keeping a clean environment supports better health.",
  "Balancing work and rest prevents exhaustion.",

  //  Prevention & Care
  "Washing hands regularly reduces the risk of infections.",
  "Regular health checkups help detect problems early.",
  "Brushing twice a day protects teeth and gums.",
  "Using sun protection helps prevent skin damage.",
  "Avoiding smoking improves lung and heart health."
];

let placing = 0;

function showTipTyping() {
  const tip = healthtipscollection[placing];

  // set steps based on length (for smooth steps)
  tipText.style.setProperty("--steps", tip.length);

  // update text
  tipText.textContent = tip;

  // restart typing animation
  tipText.classList.remove("typing");
  void tipText.offsetWidth; // force reflow (restart animation)
  tipText.classList.add("typing");

  placing = (placing + 1) % healthtipscollection.length;
}

showTipTyping();
setInterval(showTipTyping, 4000);

let a=[]

let txt=document.querySelector("#firstn");

let submitbtn=document.querySelector("#submitbtn");

submitbtn.addEventListener("click",()=>{
    console.log(txt.value)
    a.push(txt.value)
    console.log(a)
})

