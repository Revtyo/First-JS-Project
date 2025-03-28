const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/download.jpeg") {
    myImage.setAttribute("src", "images/ted-bundy.jpeg");
  } else {
    myImage.setAttribute("src", "images/download.jpeg");
  }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Dani - an Empowered Woman, ${myName}`;
  }
}

myButton.addEventListener("click", () => {
  setUserName();
});
