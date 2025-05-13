let WateringDurationMs = 20
let MeasurementDelayMs = 20
let PumpPin = DigitalPin.P0
let SensorPin = AnalogPin.P2
let SensorThreshold = 640
basic.forever(function () {
    if (pins.analogReadPin(SensorPin) > SensorThreshold) {
        pins.digitalWritePin(PumpPin, 1)
        basic.pause(WateringDurationMs)
        pins.digitalWritePin(PumpPin, 0)
    }
    basic.pause(MeasurementDelayMs)
})
