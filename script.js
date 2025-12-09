// 25개 데이터 정의
const messageMap = { 
  1: "🦄 Hallo!! I hope you're enjoying your December with my little advent calendar 📅 And let’s guess what’s gonna pop up next before you click the date 💖",
  2: '🐧 Here is one of my favorite penguin videos! I will <a href="https://youtu.be/Z7PlUGbsXlQ?si=x2_c58q_LsMFTogj" target="_blank">share</a> it with you 📼(Tap the color)',
  3: '🐱 A song for you 🎶<br>▶️ <a href="https://www.tiktok.com/@thekiffness/video/7375090152751860998?is_from_webapp=1&sender_device=pc&web_id=7578458354767742482" target="_blank">PLAY</a>',
  4: '🐰 You definitely know I am obsessed with bunnies! What is your <span class="imgTrigger" data-img="img/puupuu.JPG">favorite</span> animal?',
  5: '🪴 Do you know what the iconic Christmas plant is? It is the poinsettia! 🎅 <span class="imgTrigger" data-img="img/poinsettia.jpg">Here’s what it looks like</span> ✨',
  6: 'If you want your life to feel cuter, you seriously need <span class="imgTrigger" data-img="img/mole.jpeg">Sylvanian Families</span> in it!',
  7: '🎦 <span class="videoTrigger" data-video="video/mars.mp4">PLAY</span><br>Happy Mars Day! ☄️ I just made this day up I’ll always support your dream 🚀 shoot for Mars!',
  8: '🪼 Find out what kind of jellyfish you are! <br><a href="https://www.proprofs.com/quiz-school/story.php?title=what-type-of-jellyfish-you-are-quiz" target="_blank">GO</a>',
  9: '▶️ <a href="https://youtu.be/kffacxfA7G4?si=Eduegu__V7ay_xBI" target="_blank">PLAY</a><br>🎧 This is definitely my go to song 🎵 don’t judge my taste ㅋㅋ ',
  10: '🍫 Desserts that go well with Christmas! Check the <a href="https://www.allrecipes.com/chocolate-mousse-for-beginners-recipe-8574786" target="_blank">RECIPE</a>',
  11: '🐶 What Kind Of Dog Are You? <br><a href="https://www.buzzfeed.com/chelseamarshall/what-kind-of-dog-are-you?utm_source=dynamic&utm_campaign=bfsharecopy" target="_blank">FIND OUT</a>',
  12: '🦛 My favorite hippo in the world! If you are curious, <br>🎬 <a href="https://youtu.be/vx5vpG6jEXI?si=voRjknCx0t_Th-Fa" target="_blank">WATCH</a>',
  13: '<a href="https://youtube.com/shorts/W8lVpogORpk?si=fHfBwJTq22kxVAuD" target="_blank">Baaaaaa!</a><br>🐑 Sending you cute power ',
  14: '🧸 My current favorite <span class="imgTrigger" data-img="img/seagull.jpg">Jellycat</span>💛',
  15: '🦙 <span class="imgTrigger" data-img="img/alpaca.jpeg">The Lucky Alpaca</span> 🦙',
  16: '🐨 Here’s my perfect winter tip 🌿<br>Eucalyptus helps you breathe so much better! If your nose gets stuffy, I really recommend it<br><a href="https://youtube.com/shorts/Ly4qVFpxqJE?si=mnLlNhLkfnRa7UkM" target="_blank">And koalas LOVE Eucalyptus</a>',
  17: '▶️ <a href="https://youtu.be/bfTv6A1Wn4k?si=fFDu1NNuGuR3y_zB" target="_blank">PLAY</a><br>🐘 Another one of my favorite songs for you 🎤',
  18: '🧠 There’s a phrase called <span class="imgTrigger" data-img="img/capybara.jpg">Capybara mindset</span><br>It refers to a way of thinking where you don’t care much about other people’s opinions or judgments and instead stay relaxed, unbothered, and comfortably indifferent to your surroundings so DO YOU DO!!❤️',
  19: '🥝 What type of fruit am I? <br><a href="https://www.buzzfeed.com/brokenlightbulb/fruit-personality-quiz?utm_source=dynamic&utm_campaign=bfsharecopy" target="_blank">FIND OUT</a>',
  20: '🐴 Which pony are you? <br><a href="https://www.buzzfeed.com/hazelyxlee/rainbow-buffet-my-little-pony?utm_source=dynamic&utm_campaign=bfsharecopy" target="_blank">FIND OUT</a>',
  21: "🐢 Turtles stand for a long, happy life in Korea 🇰🇷<br>So let’s stay healthy and live long together! 💜",
  22: '🐹 What Potato Chip Flavor Are You? 🥔<br><a href="https://www.buzzfeed.com/sarahaspler/what-potato-chip-flavor-matches-your-personality?utm_source=dynamic&utm_campaign=bfsharecopy" target="_blank">FIND YUM</a>',
  23: '⛄️ My favorite Christmas carol 🪩 What’s yours?<br><a href="https://youtu.be/EmhfdQlOiy0?si=p7dIJTP0vG2BQUWV" target="_blank">PLAY</a> 🧤',
  24: '🧀 <a href="https://photobooth-io.cc/index.html" target="_blank">Cheese-mas</a><br> Capture the Christmas Eve vibes! Photos last forever 🎞️',
  25: '🎄 <b>Merry Christmas! 🎁</b><br>💌 Your letter has arrived! 💌<br><span class="videoTrigger" data-video="video/letter.mp4">READ</span>'};

const items = Array.from({ length: 25 }, (_, i) => {
  const n = i + 1;
  return {
    id: n,
    thumb: `img/thumb-${n}.png`,
    detailImage: `img/detail-${n}.png`,
    text: messageMap[n] || ""
  };
});

// 요소 가져오기
const grid = document.getElementById("grid");
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");
const popupText = document.getElementById("popupText");
const popupClose = document.getElementById("popupClose");

// 1. 5×5 그리드 자동 생성
items.forEach((item) => {
  const btn = document.createElement("button");
  btn.className = "thumb";
  btn.dataset.id = item.id;

  const img = document.createElement("img");
  img.src = item.thumb;
  img.alt = `Day ${item.id}`;

  btn.appendChild(img);
  grid.appendChild(btn);
});

// 2. 썸네일 클릭 → 팝업 열기
grid.addEventListener("click", (event) => {
  const button = event.target.closest(".thumb");
  if (!button) return;

  const id = Number(button.dataset.id);
  const item = items.find((i) => i.id === id);

  // 이전에 만들어진 비디오 있으면 제거
  const oldVideo = document.querySelector(".popup-video");
  if (oldVideo) oldVideo.remove();

  // 이미지 다시 보이게
  popupImage.style.display = "block";

  // 팝업 내용 채우기
  popupImage.src = item.detailImage;
  popupText.innerHTML = item.text;
  popupText.style.display = "block";

  // 팝업 열기
  popup.classList.remove("hidden");
});

// 3. X 버튼 클릭 → 팝업 닫기
popupClose.addEventListener("click", () => {
  popup.classList.add("hidden");
});

// 4. 팝업 바깥 클릭 → 닫기
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.add("hidden");
  }
});

// 5. 팝업 안의 텍스트 클릭 → 이미지 변경
popupText.addEventListener("click", (e) => {
  if (!e.target.classList.contains("imgTrigger")) return;

  popupImage.src = e.target.dataset.img; // 이미지 변경
  popupText.style.display = "none"; // 텍스트 숨기기
});

// ⭐ 6. 팝업 안의 텍스트 클릭 → 비디오로 변경
popupText.addEventListener("click", (e) => {
  const target = e.target;
  if (!target.classList.contains("videoTrigger")) return;

  // 이미지 숨기기
  popupImage.style.display = "none";

  // 혹시 이미 비디오 있으면 제거
  const oldVideo = document.querySelector(".popup-video");
  if (oldVideo) oldVideo.remove();

  // 이미지 자리 뒤에 비디오 삽입
  popupImage.insertAdjacentHTML(
    "afterend",
    `
    <video class="popup-video" controls autoplay width="100%">
      <source src="${target.dataset.video}" type="video/mp4">
    </video>
    `
  );

  // 텍스트 숨기기
  popupText.style.display = "none";
});