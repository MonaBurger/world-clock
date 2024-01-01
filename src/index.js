function updateTime() {
  let losAngeles = document.querySelector("#los-angeles");
  let losAngelesDate = losAngeles.querySelector(".date");
  let losAngelesTime = losAngeles.querySelector(".time");
  let losAngelesCurrentTime = moment().tz("America/Los_Angeles");
  losAngelesDate.innerHTML = losAngelesCurrentTime.format("MMMM Do YYYY");

  losAngelesTime.innerHTML = losAngelesCurrentTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let tokyo = document.querySelector("#tokyo");
  let tokyoDate = tokyo.querySelector(".date");
  let tokyoTime = tokyo.querySelector(".time");
  let tokyoCurrentTime = moment().tz("Asia/Tokyo");
  tokyoDate.innerHTML = tokyoCurrentTime.format("MMMM Do YYYY");

  tokyoTime.innerHTML = tokyoCurrentTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
