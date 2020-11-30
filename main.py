while True:
    print("Current Room Temperature: " + input.temperature(TemperatureUnit.FAHRENHEIT) + "°F" + " - " + input.temperature(TemperatureUnit.CELSIUS) + "°C")
    if input.temperature(TemperatureUnit.FAHRENHEIT) >= 80:
        light.set_all(light.rgb(255,0,0))                
        pause(500)
        light.clear()
        light.set_pixel_color(1, light.rgb(255, 0, 0))
    elif input.temperature(TemperatureUnit.FAHRENHEIT) <= 40:
        light.set_all(light.rgb(0,0,255))
        pause(500)
        light.clear()
        light.set_pixel_color(1, light.rgb(0, 0, 255))
    else:
        light.set_all(light.rgb(255,0,255))
        pause(500)
        light.clear()
        light.set_pixel_color(1, light.rgb(255, 0, 255))