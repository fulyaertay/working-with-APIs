const callImage = async () => {
  try {
    const res = await fetch(
      "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
    );
    const data = await res.json();

    document.body.style.backgroundImage = `url(${data.urls.regular})`;
    document.getElementById("author").textContent = `By: ${data.user.name}`;
  } catch (err) {
    console.error(err);
    // Use a default background image/author
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
        )`;
    document.getElementById("author").textContent = `By: Dodi Achmad`;
  }
};

const callDogeCoin = async () => {
  try {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/dogecoin");
    const data = await res.json();

    document.getElementById("crypto-top").innerHTML = `
                    <img src=${data.image.small} />
                    <span>${data.name}</span>
                `;
    document.getElementById("crypto").innerHTML += `
                    <p>🎯: $${data.market_data.current_price.usd}</p>
                    <p>👆: $${data.market_data.high_24h.usd}</p>
                    <p>👇: $${data.market_data.low_24h.usd}</p>
                `;
  } catch (err) {
    document.getElementById("crypto").innerHTML ="Something went wrong!"
  }
};

const getTodo = async () => {
  
    const res = await fetch("https://dummyjson.com/todos/random");
    const data = await res.json();

    document.getElementById("todo").innerHTML = `${data.todo}`;
    if(data.todo =="undefined")
        document.getElementById("todo").innerHTML ="Something went wrong!"
 
};

function getCurrentTime() {
  const date = new Date();
  document.getElementById("time").textContent = date.toLocaleTimeString(
    "en-us",
    { timeStyle: "short" }
  );
  if (date.timeStyle == "AM") {
    document.getElementById("status-day").textContent = "Have a great day!";
  } else {
    document.getElementById("status-day").textContent = "Good Evening!";
  }
}

navigator.geolocation.getCurrentPosition(async (position) => {
  try {
    const res = await fetch(
      `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric `
    );
    const data = await res.json();
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById("weather").innerHTML = `
                <img src=${iconUrl} />
                <p class="weather-temp">${Math.round(data.main.temp)}º</p>
                <p class="weather-city">${data.name}</p>
            `;
  } catch (err) {
    document.getElementById("weather").innerHTML="Something went wrong!"
  }
});

//fetching from APIs
callImage();
callDogeCoin();
getTodo();
setInterval(getCurrentTime, 1000);
