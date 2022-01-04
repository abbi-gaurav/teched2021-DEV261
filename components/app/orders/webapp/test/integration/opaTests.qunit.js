/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
  "use strict";

  sap.ui.require(
    ["com/cap/kyma/orders/d066419/test/integration/AllJourneys"],
    function () {
      QUnit.start();
    }
  );
});
