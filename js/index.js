const API_URL = "../api/api.json";

function fetchProducts() {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => appendData(data))
    .catch((err) => console.log("error: " + err));
}

function createButtonIcon() {
  const buttonIcon = document.createElement("img");
  buttonIcon.setAttribute("src", "./img/button-icon.png");
  buttonIcon.setAttribute("alt", "button-icon");
  buttonIcon.classList.add("list__button-icon");
  return buttonIcon;
}

function createButton(link) {
  const button = document.createElement("a");
  button.addEventListener("click", () => {
    const mainContent = document.querySelector("body");
    const loadFile = document.createElement("div");
    loadFile.classList.add("blink");
    mainContent.appendChild(loadFile);
    setTimeout(() => {
      loadFile.remove();
    }, 5000);
  });

  button.setAttribute("href", link);
  button.setAttribute("download", "");
  button.classList.add("list__button-btn");
  button.innerHTML = "Download";

  const buttonIcon = createButtonIcon();
  button.appendChild(buttonIcon);

  return button;
}
function createAmountItem() {
  let amountItem = document.createElement("li");
  amountItem.classList.add("list__amount");
  return amountItem;
}

function createListItem() {
  const button = document.createElement("li");
  button.classList.add("list__button");
  return button;
}

function createAmountMoney(amount) {
  let amountMoney = document.createElement("span");
  amountMoney.classList.add("list__amount-money");
  amountMoney.innerHTML = formatAmount(amount);
  return amountMoney;
}
function formatAmount(amount) {
  console.log(amount);
  return "$" + amount;
}

function createAmountYear() {
  let amountYear = document.createElement("span");
  amountYear.classList.add("list__amount-year");
  amountYear.innerHTML = "/per year";
  return amountYear;
}
function createAboutItems() {
  let aboutItems = document.createElement("li");
  aboutItems.classList.add("list__about");
  return aboutItems;
}
function createAboutName(name_prod) {
  let aboutName = document.createElement("p");
  aboutName.classList.add("list__about-name");
  aboutName.innerHTML = name_prod;
  return aboutName;
}
function createAboutTime(license_name) {
  let aboutTime = document.createElement("p");
  aboutTime.classList.add("list__about-time");
  aboutTime.innerHTML = license_name;
  return aboutTime;
}

function printProduct(item) {
  const { link, amount, name_prod, license_name } = item;
  console.log(amount);
  const mainItems = document.querySelector(".main__items");
  let list = document.createElement("ul");
  list.classList.add("items__list");
  // Amount

  const amountItem = createAmountItem();
  list.appendChild(amountItem);

  if (item.is_best) {
    let isBest = document.createElement("span");
    isBest.classList.add("list__amount-best");
    isBest.innerHTML = "Best Value";
    amountItem.appendChild(isBest);
  }
  if (item.price_key === "50%") {
    let priceKey = document.createElement("img");
    priceKey.setAttribute("src", "../img/50OFF.png");
    priceKey.setAttribute("alt", "priceKey");
    priceKey.classList.add("list__amount-priceKey");
    amountItem.appendChild(priceKey);
  }
  const amountMoney = createAmountMoney(amount);
  amountItem.appendChild(amountMoney);

  const amountYear = createAmountYear();
  amountItem.appendChild(amountYear);

  // About

  const aboutItems = createAboutItems();
  list.appendChild(aboutItems);

  const aboutName = createAboutName(name_prod);
  aboutItems.appendChild(aboutName);

  const aboutTime = createAboutTime(license_name);
  aboutItems.appendChild(aboutTime);

  // Button
  const listItem = createListItem();
  list.appendChild(listItem);

  const listItemButton = createButton(link);
  listItem.appendChild(listItemButton);
  mainItems.appendChild(list);
}

function appendData(data) {
  data.forEach(printProduct);
}

window.addEventListener("load", fetchProducts);
