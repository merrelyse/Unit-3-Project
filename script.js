let audioCtx = new AudioContext();
let carrier = audioCtx.createOscillator();
let mod = audioCtx.createOscillator();
let modGain = audioCtx.createGain();
let gainNode = audioCtx.createGain();

mod.connect(modGain);
modGain.connect(carrier.frequency);

carrier.connect(gainNode);
gainNode.connect(audioCtx.destination);

carrier.type = "sine";
carrier.frequency.value = 440;
mod.type = "sine";
mod.frequency.value = 220;
modGain.gain.value = 50;
gainNode.gain.value = 0;

const startCarrier = function () {
  gainNode.gain.value = 1;
};

const stopCarrier = function () {
  gainNode.gain.value = 0;
};

document.getElementById("startButton").addEventListener("click", startCarrier);
document.getElementById("stopButton").addEventListener("click", stopCarrier);

const updateCarFreq = function (event) {
  carrier.frequency.value = event.target.value;
};

const updateModFreq = function (event) {
  mod.frequency.value = event.target.value;
};

const updateGain = function (event) {
  gainNode.gain.value = event.target.value;
};

document.getElementById("carSlider").addEventListener("input", updateCarFreq);
document.getElementById("modSlider").addEventListener("input", updateModFreq);
document.getElementById("gainSlider").addEventListener("input", updateGain);

carrier.start();
mod.start();
