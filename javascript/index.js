function updateTime() {
  let losAngelsElement = document.querySelector("#los-angeles");
  let losAngelsDateElement = losAngelsElement.querySelector(".date");
  let losAngelsTimeElement = losAngelsElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelsDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelsTimeElement.innerHTML = `${losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = `${parisTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;
}
updateTime();
setInterval(updateTime, 1000);
