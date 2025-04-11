// loading.js

// Create loader container
const loader = document.createElement("div");
loader.id = "loader";
loader.innerHTML = `
  <style>
    @font-face {
      font-family: 'Coolvetica';
      src: url('https://cdn.jsdelivr.net/gh/adam7/fonts@master/coolvetica/coolvetica.ttf') format('truetype');
      font-weight: bold;
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    html, body {
      height: 100%;
      overflow: hidden;
      background: black;
    }
    .loader-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: black;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-family: 'Coolvetica', sans-serif;
      color: #FF0000;
      font-size: 50px;
      font-weight: bold;
      z-index: 999999;
      transition: opacity 1s ease-out;
    }
    .loading-bar-container {
      width: 200px;
      height: 10px;
      background-color: #222;
      margin-top: 20px;
      border-radius: 5px;
      overflow: hidden;
    }
    .loading-bar {
      height: 100%;
      background-color: #FF0000;
      width: 0%;
      transition: width 0.03s linear;
    }
  </style>

  <div class="loader-overlay">
    <div id="loadingText">0%</div>
    <div class="loading-bar-container">
      <div class="loading-bar" id="loadingBar"></div>
    </div>
  </div>
`;

// Add loader to body
document.body.appendChild(loader);

// Start loading logic
let percentage = 0;
const loadingText = loader.querySelector("#loadingText");
const loadingBar = loader.querySelector("#loadingBar");

function updateLoading() {
  if (percentage <= 100) {
    loadingText.textContent = percentage + "%";
    loadingBar.style.width = percentage + "%";
    percentage++;
    setTimeout(updateLoading, 30);
  } else {
    setTimeout(() => {
      loader.querySelector(".loader-overlay").style.opacity = "0";
      setTimeout(() => {
        loader.remove(); // Fully remove the entire loader element
      }, 1000);
    }, 1000);
  }
}

updateLoading();
