const tg = window.Telegram.WebApp;

tg.expand();

document.getElementById("user").innerText =
  "Hello " + (tg.initDataUnsafe?.user?.first_name || "Guest");

function sendData() {
  tg.sendData(JSON.stringify({
    action: "hello",
    time: Date.now()
  }));
}
