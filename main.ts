while (true) {
    console.log("Current Room Temperature: " + input.temperature(TemperatureUnit.Fahrenheit) + "°F" + " - " + input.temperature(TemperatureUnit.Celsius) + "°C")
    if (input.temperature(TemperatureUnit.Fahrenheit) >= 80) {
        light.setAll(light.rgb(255, 0, 0))
        pause(500)
        light.clear()
        light.setPixelColor(1, light.rgb(255, 0, 0))
    } else if (input.temperature(TemperatureUnit.Fahrenheit) <= 40) {
        light.setAll(light.rgb(0, 0, 255))
        pause(500)
        light.clear()
        light.setPixelColor(1, light.rgb(0, 0, 255))
    } else {
        light.setAll(light.rgb(255, 0, 255))
        pause(500)
        light.clear()
        light.setPixelColor(1, light.rgb(255, 0, 255))
    }
    
}
