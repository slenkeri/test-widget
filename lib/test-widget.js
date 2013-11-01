var ChromeConstants = require("./xul-manager/chrome-constants.js").ChromeConstants;

function TestWidget () {
  let count = 0;
  let document = null;
  let view = null;

  function injectUI () {
    let label = document.createElement("label");
    label.value = "POOOP";
    view.appendChild(label);

    console.log("injectUI");
  }

  return {
    CONFIG: {
      id: "test-widget",
      type: "view",
      viewId: "TestWidget-view",
      removable: true,
      defaultArea: ChromeConstants.AREA_PANEL()
    },

    populateView: function (doc, theView) {
      document = doc;
      view = theView;
      injectUI();
    }
  };
}

exports.TestWidget = TestWidget;
