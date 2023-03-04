bpm = 117;

a = text.sourceText.key(1).time;
x = time - thisComp.frameDuration;

mainTime = time - a;
mainTimeNegative = a - x;

if (mainTime >= 0) {
    mainBeats = Math.floor((mainTime * bpm * 16) / 60);
    quarters = Math.floor(((mainBeats / 16) % 4) + 1);
    sixteenths = Math.floor((mainBeats / 4) % 4) + 1;
    measures = Math.floor(mainBeats / 16 / 4) + 1;
} else {
    mainBeats = Math.floor((mainTimeNegative * bpm * 16) / 60);
    quarters = 4 - Math.floor((mainBeats / 16) % 4);
    sixteenths = 4 - Math.floor((mainBeats / 4) % 4);
    measures = -1 * (Math.floor(mainBeats / 16 / 4) + 1);
}

result = measures + ":" + quarters + ":" + sixteenths;
