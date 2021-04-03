sap.ui.define(["sap/ui/core/mvc/Controller", "sap/base/Log"], (Controller, Log) =>
    Controller.extend("my.ui5.lib.controller.BaseController", {
        getLogger() {
            if (!this._logger) this._logger = Log.getLogger(this.getMetadata().getName());
            return this._logger;
        },
    })
);
