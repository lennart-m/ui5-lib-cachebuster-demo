sap.ui.define(["my/ui5/lib/controller/BaseController", "my/ui5/lib/util/helloWorld"], (Controller, helloWorld) => {
    return Controller.extend("my.ui5.app.controller.App", {
        onPressButton() {
            this.getLogger().debug("Button pressed");
            helloWorld();
        },
    });
});
