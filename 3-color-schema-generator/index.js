const chooseColorFromPicker = document.querySelector(".choose-color");
const getColorFromSelectBox = document.querySelector("#colors");
const getColorBtn = document.querySelector("#get-color");
let listColors = document.querySelector(".list-colors");
let hexValuesContent = document.querySelector(".hex-values");
let listItem = document.querySelector(".list-color");
const pickerVal = chooseColorFromPicker.value;
const listVal = getColorFromSelectBox.value;

function firstRender() {
  let renderColors = "";
  let renderHexValues = "";

  fetch("https://www.thecolorapi.com/scheme?hex=000000&mode=monochrome")
    .then((res) => res.json())
    .then((data) => {
      for (let color of data.colors) {
        renderColors += `
            <div class="list-color" style="background-color:${color.hex.value}; cursor:pointer"></div>

            `;
        renderHexValues += ` <div class="color-hex">${color.hex.value}</div>`;
      }

      listColors.innerHTML = renderColors;
      hexValuesContent.innerHTML = renderHexValues;
    });
}

function render() {
  let renderColors = "";
  let renderHexValues = "";

  const pickerVal = chooseColorFromPicker.value;
  const listVal = getColorFromSelectBox.value;

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${pickerVal.slice(
      1
    )}&mode=${listVal}`
  )
    .then((res) => res.json())
    .then((data) => {
      for (let color of data.colors) {
        renderColors += `
            <div class="list-color" style="background-color:${color.hex.value}; cursor:pointer"></div>

            `;
        renderHexValues += ` <div class="color-hex">${color.hex.value}</div>`;
      }

      listColors.innerHTML = renderColors;
      hexValuesContent.innerHTML = renderHexValues;
    });
}

firstRender();
getColorBtn.addEventListener("click", render);
