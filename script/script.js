document.addEventListener("click", function() {
    document.getElementById("bg-music").play();
}, { once: true }); // Chạy một lần duy nhất
function openImage(src) {
    document.getElementById("modal-image").src = src;
    document.getElementById("image-modal").style.display = "flex";
}

function closeImage() {
    document.getElementById("image-modal").style.display = "none";
}
    function createFlower() {
        const flower = document.createElement("body");
        flower.classList.add("flower");
        document.body.appendChild(flower);

        const startX = Math.random() * window.innerWidth;
        const duration = Math.random() * 5 + 5;
        const size = Math.random() * 20 + 10;
        
        flower.style.left = `${startX}px`;
        flower.style.width = `${size}px`;
        flower.style.height = `${size}px`;

        flower.animate([
            { transform: `translateY(0px)`, opacity: 1 },
            { transform: `translateY(${window.innerHeight}px)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: "linear"
        });

        setTimeout(() => { flower.remove(); }, duration * 1000);
    }
    setInterval(createFlower, 300);
    
    function increaseDownloadCount() {
        let counter = document.getElementById("download-counter");
        counter.innerText = parseInt(counter.innerText) + 1;
    }
    const images = [
        "./Image/bgr1.jpg",
        "./Image/bgr2.jpg",
        "./Image/bgr3.jpg"
    ];
    let currentIndex = 0;

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        document.getElementById("preview-image").src = images[currentIndex];
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        document.getElementById("preview-image").src = images[currentIndex];
    }