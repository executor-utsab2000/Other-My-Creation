const calculationData = [
    "Preparing to start 💭",
    "Heart initializing... 💓",
    "A tiny spark appears ✨",
    "Curiosity quietly grows 👀",
    "A smile sneaks in 😊",
    "Thinking about you again 💌",
    "Butterflies detected 🦋",
    "Blushing mode activated 🌸",
    "Heartbeat slightly faster 💗",
    "Stolen glances begin 👀💕",
    "Conversations feel warmer ☕",
    "Laughing a little louder 😄",
    "Late night thoughts 🌙",
    "Checking your messages twice 📱",
    "Missing you already 🥺",
    "Getting softly attached 🤍",
    "Your name feels special 💫",
    "Falling slowly... 💞",
    "Falling deeper... 💘",
    "No turning back now 💓",
    "Comfort found in you 🫶",
    "Safe in your presence 🏡",
    "Smiles feel softer 🌷",
    "Eyes say more than words ✨",
    "Holding hands in my thoughts 🤝",
    "Your voice feels like home 🎶",
    "Sharing secrets quietly 🤫",
    "Dreaming about us 🌈",
    "Heartbeat syncing with yours 💓🎵",
    "Love loading... 70% 💖",
    "Caring more each day 🌼",
    "Choosing you naturally 💕",
    "Missing you even when you're here 🥹",
    "Love loading... 85% 💝",
    "Completely invested now 💗",
    "Building dreams together 🏰",
    "Planning tomorrows 🌅",
    "Growing side by side 🌿",
    "Stronger together 💪❤️",
    "Hearts fully aligned ❤️‍🔥",
    "Soul deeply connected ✨",
    "Forever sounds beautiful ♾️",
    "Standing hand in hand 🤝",
    "Every day feels right 🌸",
    "No doubts, just us 🤍",
    "Peace found in you 🕊️",
    "Love fully formed 💞",
    "Everything feels certain 💖",
    "Exactly where we belong 🏡",
    "Complete. 💍"
];


// Get audio elements
const page3Audio = document.getElementById('page3Audio');
const page4Audio = document.getElementById('page4Audio');


document.querySelector('#startBtn').addEventListener('click', () => {
    document.querySelector('#introPage').style.display = "none";
    document.querySelector('#page2').style.display = "flex";
});

document.querySelector('#page2Touch').addEventListener('click', () => {
    document.querySelector('#page2').style.display = "none";
    document.querySelector('#page3').style.display = "flex";

    // Play page3 audio (infinite loop)
    page3Audio.play().catch(e => console.log("Audio play failed:", e));

    let count = 0;

    // Show first message immediately
    if (count < calculationData.length) {
        document.querySelector('#textRandom').innerHTML = calculationData[count];
    }

    // Use setInterval to update messages
    const interval = setInterval(() => {
        count++;

        if (count < calculationData.length) {
            // Update the text with next message
            document.querySelector('#textRandom').innerHTML = calculationData[count];
        } else {
            // Stop the interval and go to page4 when done
            clearInterval(interval);

            // Stop page3 audio and play page4 audio
            page3Audio.pause();
            page3Audio.currentTime = 0;
            page4Audio.play().catch(e => console.log("Audio play failed:", e));

            document.querySelector('#page3').style.display = "none";
            document.querySelector('#page4').style.display = "flex";
        }
    }, 1500); // 1.5 second between messages
});