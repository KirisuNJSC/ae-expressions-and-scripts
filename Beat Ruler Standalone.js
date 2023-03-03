bpm = 117;

a = text.sourceText.key(1).time;

mainTime = time - a;
mainTime2 = a - time - thisComp.frameDuration;

if (mainTime >= 0) {
    mainBeats = Math.floor((mainTime * bpm * 16) / 60);
    quarters = Math.floor(((mainBeats / 16) % 4) + 1);
    eighths = Math.floor((mainBeats / 4) % 4) + 1;
    measures = Math.floor(mainBeats / 16 / 4) + 1;
} else {
    mainBeats = Math.floor((mainTime2 * bpm * 16) / 60);
    quarters = 4 - Math.floor((mainBeats / 16) % 4);
    eighths = 4 - Math.floor((mainBeats / 4) % 4);
    measures = -1 * (Math.floor(mainBeats / 16 / 4) + 1);
}

result = measures + ":" + quarters + ":" + eighths;
