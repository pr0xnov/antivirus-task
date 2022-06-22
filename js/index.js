// Fetch

fetch("../api/api.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });

function appendData(data) {
  let mainItems = document.querySelector(".main__items");
  for (let i = 0; i < data.length; i++) {
    let list = document.createElement("ul");
    list.classList.add("items__list");

    // Amount

    let amount = document.createElement("li");
    amount.classList.add("list__amount");
    list.appendChild(amount);

    if (data[i].is_best) {
      let isBest = document.createElement("span");
      isBest.classList.add("list__amount-best");
      isBest.innerHTML = "Best Value";
      amount.appendChild(isBest);
    }
    if (data[i].price_key === "50%") {
      let priceKey = document.createElement("img");
      priceKey.setAttribute("src", "../img/50OFF.png");
      priceKey.setAttribute("alt", "priceKey");
      priceKey.classList.add("list__amount-priceKey");
      amount.appendChild(priceKey);
    }
    let amountMoney = document.createElement("span");
    amountMoney.classList.add("list__amount-money");
    amountMoney.innerHTML = "$" + data[i].amount;
    amount.appendChild(amountMoney);

    let amountYear = document.createElement("span");
    amountYear.classList.add("list__amount-year");
    amountYear.innerHTML = "/per year";
    amount.appendChild(amountYear);

    // About

    let aboutItems = document.createElement("li");
    aboutItems.classList.add("list__about");
    list.appendChild(aboutItems);

    let aboutName = document.createElement("p");
    aboutName.classList.add("list__about-name");
    aboutName.innerHTML = data[i].name_prod;
    aboutItems.appendChild(aboutName);

    let aboutTime = document.createElement("p");
    aboutTime.classList.add("list__about-time");
    aboutTime.innerHTML = data[i].license_name;
    aboutItems.appendChild(aboutTime);

    // Button

    let button = document.createElement("li");
    button.classList.add("list__button");
    list.appendChild(button);

    let btn = document.createElement("a");
    btn.addEventListener("click", () => {
      let mainContent = document.querySelector("body");
      let loadFile = document.createElement("div");
      loadFile.classList.add("blink");
      mainContent.appendChild(loadFile);
      setTimeout(() => {
        loadFile.remove();
      }, 5000);
    });

    // btn.setAttribute("href", data[i].link);
    btn.setAttribute("rel", "noopener");
    btn.classList.add("list__button-btn");
    btn.innerHTML = "Download";
    button.appendChild(btn);

    let btnIcon = document.createElement("img");
    btnIcon.setAttribute("src", "./img/button-icon.png");
    btnIcon.setAttribute("alt", "button-icon");
    btnIcon.classList.add("list__button-icon");
    btn.appendChild(btnIcon);

    mainItems.appendChild(list);
  }
}
