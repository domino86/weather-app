export const citiesMock = {
    "cnt": 5,
    "list": [
      {
        "coord": {
          "lon": 14.4208,
          "lat": 50.088
        },
        "sys": {
          "country": "CZ",
          "timezone": 7200,
          "sunrise": 1620099181,
          "sunset": 1620152704
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "main": {
          "temp": 16.03,
          "feels_like": 14.58,
          "temp_min": 15,
          "temp_max": 17,
          "pressure": 1004,
          "humidity": 34
        },
        "visibility": 10000,
        "wind": {
          "speed": 9.26,
          "deg": 230
        },
        "clouds": {
          "all": 0
        },
        "dt": 1620144555,
        "id": 3067696,
        "name": "Prague"
      },
      {
        "coord": {
          "lon": 12.4839,
          "lat": 41.8947
        },
        "sys": {
          "country": "IT",
          "timezone": 7200,
          "sunrise": 1620100937,
          "sunset": 1620151877
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "main": {
          "temp": 15,
          "feels_like": 14.31,
          "temp_min": 13.89,
          "temp_max": 16,
          "pressure": 1018,
          "humidity": 67
        },
        "visibility": 10000,
        "wind": {
          "speed": 2.57,
          "deg": 220
        },
        "clouds": {
          "all": 40
        },
        "dt": 1620144577,
        "id": 3169070,
        "name": "Rome"
      },
      {
        "coord": {
          "lon": 15.0872,
          "lat": 37.5021
        },
        "sys": {
          "country": "IT",
          "timezone": 7200,
          "sunrise": 1620100860,
          "sunset": 1620150704
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "main": {
          "temp": 19.75,
          "feels_like": 19.56,
          "temp_min": 19.44,
          "temp_max": 20,
          "pressure": 1016,
          "humidity": 68
        },
        "visibility": 10000,
        "wind": {
          "speed": 5.14,
          "deg": 60
        },
        "clouds": {
          "all": 0
        },
        "dt": 1620144570,
        "id": 2525068,
        "name": "Catania"
      },
      {
        "coord": {
          "lon": 17.1067,
          "lat": 48.1482
        },
        "sys": {
          "country": "SK",
          "timezone": 7200,
          "sunrise": 1620098884,
          "sunset": 1620151712
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "main": {
          "temp": 18.76,
          "feels_like": 17.71,
          "temp_min": 18.33,
          "temp_max": 19,
          "pressure": 1008,
          "humidity": 39
        },
        "visibility": 10000,
        "wind": {
          "speed": 5.66,
          "deg": 170
        },
        "clouds": {
          "all": 0
        },
        "dt": 1620144576,
        "id": 3060972,
        "name": "Bratislava"
      },
      {
        "coord": {
          "lon": -18.0878,
          "lat": 65.6835
        },
        "sys": {
          "country": "IS",
          "timezone": 0,
          "sunrise": 1620101994,
          "sunset": 1620165494
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "main": {
          "temp": 6,
          "feels_like": 4.03,
          "temp_min": 6,
          "temp_max": 6,
          "pressure": 1025,
          "humidity": 39
        },
        "visibility": 10000,
        "wind": {
          "speed": 2.57,
          "deg": 0
        },
        "clouds": {
          "all": 20
        },
        "dt": 1620144571,
        "id": 2633274,
        "name": "Akureyri"
      }
    ],
    "images": [
      "http://openweathermap.org/img/wn/01d@2x.png", 
      "http://openweathermap.org/img/wn/01d@2x.png", 
      "http://openweathermap.org/img/wn/01d@2x.png", 
      "http://openweathermap.org/img/wn/01d@2x.png",
      "http://openweathermap.org/img/wn/01n@2x.png"
    ]
  };

 export const forecastMock = citiesMock[0];