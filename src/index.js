function updateTime() {
  let londonElement = document.getElementById("london");
  let londonDate = londonElement.querySelector(".date");
  let londonTime = londonElement.querySelector(".time");

  let nowInLondon = moment().tz("Europe/London");

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
