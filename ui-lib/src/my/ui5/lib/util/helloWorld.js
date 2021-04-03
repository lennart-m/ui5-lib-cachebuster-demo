sap.ui.define(["sap/m/MessageBox"], (MessageBox) => {
    return function helloWorld() {
        const bundle = sap.ui.getCore().getLibraryResourceBundle("my.ui5.lib");
        const text = bundle.getText("helloWorld");
        MessageBox.information(text);
    };
});
