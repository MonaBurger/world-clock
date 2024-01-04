function updateTime() {
  let losAngeles = document.querySelector("#los-angeles");
  if (losAngeles) {
    let losAngelesDate = losAngeles.querySelector(".date");
    let losAngelesTime = losAngeles.querySelector(".time");
    let losAngelesCurrentTime = moment().tz("America/Los_Angeles");
    losAngelesDate.innerHTML = losAngelesCurrentTime.format("MMMM Do YYYY");

    losAngelesTime.innerHTML = losAngelesCurrentTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let tokyo = document.querySelector("#tokyo");
  if (tokyo) {
    let tokyoDate = tokyo.querySelector(".date");
    let tokyoTime = tokyo.querySelector(".time");
    let tokyoCurrentTime = moment().tz("Asia/Tokyo");
    tokyoDate.innerHTML = tokyoCurrentTime.format("MMMM Do YYYY");

    tokyoTime.innerHTML = tokyoCurrentTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small>${cityTime.format("A")}</small></div>
        </div>
  <a href="/">All cities</a>
  `;
}

let citySelectorElement = document.querySelector("#city");
citySelectorElement.addEventListener("change", updateCity);
