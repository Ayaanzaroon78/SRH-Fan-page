const players = [
    {
      name: "Pat Cummins (Captain)",
      role: "Bowler",
      img: "cummins.jpg",
      achievements: "17 wickets in IPL 2025. Led SRH with pace and precision.",
      backAchievement: "Led Australia to multiple ICC titles. In IPL 2025, turned games with crucial wickets and smart bowling changes."
    },
    {
      name: "Heinrich Klaasen",
      role: "Wicketkeeper-Batsman",
      img: "klaasen.jpg",
      achievements: "430+ runs in IPL 2025. Striker of the season.",
      backAchievement: "Hit the fastest century in SRH history. Master of spin and pace alike. SRH’s go-to finisher."
    },
    {
      name: "Abhishek Sharma",
      role: "All-Rounder",
      img: "abhishek.jpg",
      achievements: "Explosive opener with 480+ runs in 2025.",
      backAchievement: "Gave blistering starts in powerplays. Played match-winning knocks vs MI and KKR."
    },
    {
      name: "Travis Head",
      role: "Batsman",
      img: "head.jpg",
      achievements: "3 explosive fifties in IPL 2025.",
      backAchievement: "Australian dynamo. Known for fearless batting in chases. Delivered high run rates for SRH."
    },
    {
      name: "Bhuvneshwar Kumar",
      role: "Bowler",
      img: "bhuvi.jpg",
      achievements: "13 wickets in 2025. Swing master.",
      backAchievement: "Veteran seamer. Controlled the powerplay overs with swing and experience."
    },
    {
      name: "T. Natarajan",
      role: "Bowler",
      img: "natarajan.jpg",
      achievements: "Yorker specialist. 16 wickets in IPL 2025.",
      backAchievement: "Master of death overs. Bowled crucial final overs under pressure and turned matches around."
    }
  ];
  
  const playerList = document.getElementById("playerList");
  
  players.forEach(player => {
    const card = document.createElement("div");
    card.className = "flip-card";
  
    card.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <div class="role-tag">${player.role}</div>
          <img src="${player.img}" alt="${player.name}">
          <h3>${player.name}</h3>
          <p>${player.achievements}</p>
        </div>
        <div class="flip-card-back">
          <h3>${player.name}</h3>
          <h4>Role: ${player.role}</h4>
          <p>${player.backAchievement}</p>
        </div>
      </div>
    `;
  
    playerList.appendChild(card);
  });
  
  

  const slideshowImages = [
    "gallery1.jpeg",
    "gallery2.jpeg",
    "gallery3.jpeg",
    "gallery4.jpeg",
    "gallery5.jpeg"
  ];
  
  let currentImage = 5;
  const slideshowImg = document.getElementById("slideshowImage");
  
  setInterval(() => {
    currentImage = (currentImage + 1) % slideshowImages.length;
    slideshowImg.src = slideshowImages[currentImage];
  }, 3000); 
  
