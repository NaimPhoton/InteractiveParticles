// ====== PARTICLES ======

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];
const numParticles = 20;

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = (Math.random() - 0.5) * 2;
    this.speedY = (Math.random() - 0.5) * 2;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x <= 0 || this.x >= canvas.width) this.speedX *= -1;
    if (this.y <= 0 || this.y >= canvas.height) this.speedY *= -1;
  }

  draw() {
    ctx.fillStyle = "#EBBB68";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function init() {
  for (let i = 0; i < numParticles; i++) {
    particlesArray.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let particle of particlesArray) {
    particle.update();
    particle.draw();
  }
  requestAnimationFrame(animate);
}

// Resize event
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particlesArray.length = 0;
  init();
});

init();
animate();

// ====== HOVER ITEM ======

document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".item1");
  items.forEach((item) => {
    item.addEventListener("mouseover", function () {
      items.forEach((i) => i.classList.remove("active"));
      this.classList.add("active");
    });
  });
});

// ======= SLIDE INTERVAL ======

let currentSlide = 0;
let slideInterval;

const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-slide");

function autoSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function startSlide() {
  slideInterval = setInterval(autoSlide, 5000);
}

function stopSlide() {
  clearInterval(slideInterval);
}

startSlide();

track.addEventListener("mouseenter", stopSlide);
track.addEventListener("mouseleave", startSlide);

// ===== PEDDING =====

var childElement = document.querySelector("#body-how-we-do-it");
var currentElement = childElement;
var parentLevel = 7;
for (var i = 0; i < parentLevel; i++) {
  currentElement = currentElement.parentElement;
}
currentElement.classList.add("sticky-module-how-we-do-it");

// ==========================================================================

// const canvas1 = document.getElementById("canvas1");
// const ctx1 = canvas1.getContext("2d");
// canvas1.width = window.innerWidth;
// canvas1.height = window.innerHeight;

// // canvas1.width = 100;
// // canvas1.height = 100;
// let particleArray = [];

// let mouse = {
//   x: null,
//   y: null,
//   radius: 100,
//   scale: 1,
//   velocity: 0,
// };
// window.addEventListener("mousemove", function (e) {
//   mouse.x = e.x + canvas1.clientLeft / 2;
//   mouse.y = e.y + canvas1.clientTop / 2;
//   mouse.velocity = 1;
// });

// function updateMouseBubble() {
//   mouse.scale += (1 - mouse.scale) * 0.1;
//   mouse.velocity *= 0.95;
//   mouse.radius = 100 + Math.abs(mouse.velocity * 10);
// }

// function drawImage() {
//   let imageWidth = png.width;
//   let imageHeight = png.height;
//   const data = ctx1.getImageData(0, 0, imageWidth, imageHeight);
//   ctx1.clearRect(0, 0, canvas1.width, canvas1.height);

//   class Particle {
//     constructor(x, y, color) {
//       this.x = x + canvas1.width / 2.2 - png.width * 2;
//       this.y = y + canvas1.height / 1.5 - png.height * 1;
//       this.color = color;
//       this.size = 1.5;
//       this.baseX = this.x;
//       this.baseY = this.y;
//       this.density = Math.random() * 250 + 2;
//       this.velocityX = Math.random() * 0.5 - 0.25;
//       this.velocityY = Math.random() * 0.5 - 0.25;
//     }

//     draw() {
//       ctx1.beginPath();
//       ctx1.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//       ctx1.fillStyle = this.color;
//       ctx1.fill();
//       ctx1.closePath();
//     }

//     update() {
//       this.x += this.velocityX;
//       this.y += this.velocityY;

//       if (Math.abs(this.x - this.baseX) > 2) this.velocityX *= -1;
//       if (Math.abs(this.y - this.baseY) > 2) this.velocityY *= -1;

//       let dx = mouse.x - this.x;
//       let dy = mouse.y - this.y;
//       let distance = Math.sqrt(dx * dx + dy * dy);
//       let forceDirectionX = dx / distance;
//       let forceDirectionY = dy / distance;
//       const maxDistance = mouse.radius;
//       let force = (maxDistance - distance) / maxDistance;
//       if (force < 0) force = 0;

//       let directionX = forceDirectionX * force * this.density * 0.1;
//       let directionY = forceDirectionY * force * this.density * 0.1;

//       if (distance < mouse.radius) {
//         this.x -= directionX * 2;
//         this.y -= directionY * 2;
//       } else {
//         this.x -= (this.x - this.baseX) / 20;
//         this.y -= (this.y - this.baseY) / 20;
//       }

//       this.draw();
//     }
//   }

//   function init() {
//     particleArray = [];
//     for (let y = 0, y2 = data.height; y < y2; y++) {
//       for (let x = 0, x2 = data.width; x < x2; x++) {
//         if (data.data[y * 4 * data.width + x * 4 + 3] > 128) {
//           let positionX = x;
//           let positionY = y;
//           let color =
//             "rgb(" +
//             data.data[y * 4 * data.width + x * 4] +
//             "," +
//             data.data[y * 4 * data.width + x * 4 + 1] +
//             "," +
//             data.data[y * 4 * data.width + x * 4 + 2] +
//             ")";
//           particleArray.push(new Particle(positionX * 4, positionY * 4, color));
//         }
//       }
//     }
//   }

//   function animate() {
//     requestAnimationFrame(animate);
//     // ctx1.fillStyle = "#FBFBFB";
//     // ctx1.fillStyle = "#000000";
//     // ctx1.fillStyle = "transparent";
//     ctx1.fillRect(0, 0, canvas1.width, canvas1.height);

//     ctx1.beginPath();
//     ctx1.arc(mouse.x, mouse.y, mouse.radius * mouse.scale, 0, Math.PI * 2);
//     ctx1.fill();
//     ctx1.closePath();

//     updateMouseBubble();

//     for (let i = 0; i < particleArray.length; i++) {
//       particleArray[i].update();
//     }
//   }

//   init();
//   animate();

//   window.addEventListener("resize", function () {
//     canvas1.width = this.innerWidth;
//     canvas1.height = this.innerHeight;
//     init();
//   });
// }

// const png = new Image();
// png.src =
//   "data:image/png;base64,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";

// window.addEventListener("load", () => {
//   const scale = 0.25; // Sesuaikan skala gambar
//   const imgWidth = png.width * scale;
//   const imgHeight = png.height * scale;
//   ctx1.drawImage(png, 0, 0, imgWidth, imgHeight);
//   drawImage();
// });

// ===================================================================================

// document.addEventListener("DOMContentLoaded", function () {
//   const items = document.querySelectorAll(".item1");

//   // Array gambar dalam Base64
//   const imageSources = [
//     "data:image/png;base64,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",
//     "data:image/png;base64,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",
//     "data:image/png;base64,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",
//   ];

//   let currentImageIndex = 0; // Simpan index gambar yang sedang ditampilkan
//   const png = new Image();
//   png.src = imageSources[currentImageIndex];

//   items.forEach((item, index) => {
//     item.addEventListener("mouseover", function () {
//       items.forEach((i) => i.classList.remove("active"));
//       this.classList.add("active");

//       if (currentImageIndex !== index) {
//         // Ganti gambar hanya jika berbeda
//         currentImageIndex = index;
//         png.src = imageSources[index];

//         // Pastikan gambar baru dimuat sebelum di-render
//         png.onload = () => {
//           drawNewImage();
//         };
//       }
//     });
//   });

//   function drawNewImage() {
//     ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
//     const scale = 0.25; // Sesuaikan skala gambar
//     const imgWidth = png.width * scale;
//     const imgHeight = png.height * scale;
//     ctx1.drawImage(png, 0, 0, imgWidth, imgHeight);
//     drawImage();
//   }
// });
