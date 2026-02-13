// 1. SET THE REVEAL DATE (Feb 14, 2026)
const targetDate = new Date("Feb 14, 2026 00:00:00").getTime();

// 2. YOUR PERSONALIZED LETTER
const specialLetterText = "To the most incredible woman in the world... You make my heart skip a beat every single day. This Valentine's, I wanted to tell you that you are my everything. I love you more than words can say. ❤️";

function goToPhase2() {
    const audio = document.getElementById('bgMusic');
    audio.play(); // No src change here, just play the one already loaded in HTML

    document.getElementById('phase1').classList.add('hidden');
    document.getElementById('phase2').classList.remove('hidden');
    startCountdown();
}

function startCountdown() {
    const timerInterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = d;
        document.getElementById("hours").innerText = h;
        document.getElementById("minutes").innerText = m;
        document.getElementById("seconds").innerText = s;

        // When countdown hits zero
        if (distance < 0) {
            clearInterval(timerInterval);
            triggerPhase3();
        }
    }, 1000);
}

function triggerPhase3() {
    document.getElementById('phase2').classList.add('hidden');
    document.getElementById('phase3').classList.remove('hidden');
    
    // Heart Confetti Explosion
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ffffff', '#ff8fa3']
    });
}

function openEnvelope() {
    const env = document.querySelector('.envelope-wrapper');
    env.classList.add('open');
    
    // Slight delay so the card can slide up before typing starts
    setTimeout(() => {
        typeWriter(specialLetterText, 0);
    }, 1200);
}

function typeWriter(text, i) {
    if (i < text.length) {
        document.getElementById("specialMessage").innerHTML += text.charAt(i);
        // Slower typing speed (80ms) to match the slowed song vibe
        setTimeout(() => typeWriter(text, i + 1), 80);
    }
}

window.addEventListener('click', () => { 
    console.log("Audio status:", document.getElementById('bgMusic').paused); 
}, { once: true });