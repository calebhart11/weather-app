const apiKey = "7c2656888193b61ec2b16ec1207b0941"  //7c2656888193b61ec2b16ec1207b0941
const baseUrl = "https://api.openweathermap.org/data/2.5/weather"// ?q={city name},{state code},{country code}&appid={API key}
let actualWeather, userInput 
$p1 = $("#temp")
$p2 = $("#title")
$p3 = $("#feels")
$p4 = $("#desc")

function weatherData(city){
    
   const url =`${baseUrl}?q=${city}&appid=${apiKey}&units=imperial`
    $.ajax(url)
    .then((data)=>{  
        actualWeather = data
        render()
    },
    (error) => {
        console.log("bad request",error)

    })  
}
    function render() {
        $p1.text(`Weather for:  ${userInput}`)
        $p2.text(`Temperature: " ${actualWeather.main.temp}`)
        $p3.text(`Feels like: ${actualWeather.main.feels_like}`)
        $p4.text(`Weather: ${actualWeather.weather[0].description}`)
}
$("input[type=submit]").on("click", (event) => {

    event.preventDefault()

    userInput = $("input[type=text]").val()
    
    weatherData(userInput)
})
