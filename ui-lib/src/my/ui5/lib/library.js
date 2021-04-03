sap.ui.define(
    ["sap/ui/core/library"],
    (/* coreLib */) => {
        "use strict";

        sap.ui.getCore().initLibrary({
            name: "my.ui5.lib",
            version: "${version}",
            dependencies: ["sap.ui.core", "sap.m"],
            types: [],
            interfaces: [],
            controls: [],
            elements: [],
            noLibraryCSS: false,
        });
        /* eslint-disable */

        return my.ui5.lib;
        /* eslint-enable */
    },
    /* bExport= */ false
);
