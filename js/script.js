const cityName = document.querySelector(".city");
const userInput = document.querySelector(".user-input");

const checkBtn = document.querySelector(".check-btn");

const tempdata = document.querySelector(".temp-span");

const feeldata = document.querySelector(".feel-span");

const cloudsdata = document.querySelector(".clouds-span");

const humiddata = document.querySelector(".humid-span");

const API_KEY = "&appid=c4c0f2b80df83be6c539159c5f4a2d39";


const showWeather = () => {
	const cityInput = userInput.value || "London";
	const URL =
		`https://api.openweathermap.org/data/2.5/weather?q=` +
		cityInput +
		API_KEY +
		`&units=metric`;


	fetch(URL)
	.then((res) => res.json())
	.then(
		(data) => {
			const temperature = data.main.temp;
			const humidity = data.main.humidity;
			const feelsLike = data.main.feels_like;
			
			 const weather = Object.assign(...data.weather);

				if (weather.id <= 300){
					cloudsdata.innerHTML = `<i class="fas fa-bolt bolt"></i>`;
				}
				else if (weather.id <=  400){
					cloudsdata.innerHTML = `<i class="fas fa-cloud-showers-heavy "></i>`;
				}
				
				else if (weather.id <= 700){
					cloudsdata.innerHTML = `<i class="fas fa-snowflake snow"></i>`;
				}
				
				else if (weather.id <= 799){
					cloudsdata.innerHTML = `<i class="fas fa-smog cloud"></i>`;
				}
				else if (weather.id == 800){
					cloudsdata.innerHTML = `<i class="fas fa-sun sun"></i>`;
				}
				else if (weather.id <= 900){
					cloudsdata.innerHTML = `<i class="fas fa-cloud cloud"></i>`;
				}
			

				cityName.textContent = cityInput;

				tempdata.innerText = Math.floor(temperature);

				feeldata.innerText = Math.floor(feelsLike);
				humiddata.innerText = Math.floor(humidity);

			}
			
			)
			userInput.value = "";
};

showWeather();

checkBtn.addEventListener("click", showWeather);
