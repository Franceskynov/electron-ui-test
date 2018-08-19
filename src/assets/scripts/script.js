
(function () {

  const remote = require('electron').remote;
  const window = remote.getCurrentWindow();
  var maximized = false;
  document.onreadystatechange = () => {
    if (document.readyState == "complete") {
      init();
    }
  }

  let init = () => {
    document.getElementById("btnClose").addEventListener("click", (e) => {
      window.close();
    });

    document.getElementById("btnMin").addEventListener("click", (e) => {
      window.minimize();
    });

    document.getElementById("btnRestore").addEventListener("click", (e) => {
      if (maximized == false) {
        window.maximize();
        maximized = true;
      } else {
        window.unmaximize();
        maximized = false;
      }
    });
  }
})();