basic.forever(function () {
    serial.writeLine("" + (pins.analogReadPin(AnalogPin.P1)))
    music.playTone(pins.analogReadPin(AnalogPin.P1) + 300, music.beat(BeatFraction.Sixteenth))
})
