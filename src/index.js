function updateTime() {
  let londonElement = document.getElementById("london");
  let londonDate = londonElement.querySelector(".date");
  let londonTime = londonElement.querySelector(".time");

  let nowInLondon = moment().tz("Asia/Tokyo");

  londonDate.innerHTML = nowInLondon.format("MMMM Do YYYY");

  londonTime.innerHTML = `
  ${nowInLondon.format("h:mm:ss")} <small>${nowInLondon.format("A")}</small>
`;

  let parisElement = document.getElementById("paris");
  let parisDate = parisElement.querySelector(".date");
  let parisTime = parisElement.querySelector(".time");

  let nowInParis = moment().tz("Europe/Paris");

  parisDate.innerHTML = nowInParis.format("MMMM Do YYYY");

  parisTime.innerHTML = `
  ${nowInParis.format("h:mm:ss")} <small>${nowInParis.format("A")}</small>
`;
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", "").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesSearch = document.getElementById("cities");

  // Fix: Assign the template literal directly to innerHTML
  citiesSearch.innerHTML = `
    <div class="city d-flex justify-content-between">
      <div>
        <h2 class="h-2">${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time p-2">
        ${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small>
      </div>
    </div>
  `;
}

let citiesElement = document.getElementById("country");
citiesElement.addEventListener("change", updateCity);
