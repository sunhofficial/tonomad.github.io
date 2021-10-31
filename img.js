const img = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
const chooseimg = img[Math.floor(Math.random() * img.length)];
const bgimg = document.createElement("img");
bgimg.src = `img/${chooseimg}`;
document.body.appendChild(bgimg);
