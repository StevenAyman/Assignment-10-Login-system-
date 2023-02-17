document.querySelector(
  ".welcome-message"
).innerHTML = `Welcome ${localStorage.getItem("accountName")}`;

document.querySelector(".logout").addEventListener("click", function () {
  localStorage.removeItem("accountName");
  this.href = "./index.html";
});

if (!localStorage.getItem("accountName")) {
  location.href = "./index.html";
}
