const resourceFactory = require("@ui5/fs").resourceFactory;

function signByTime(resource) {
    return resource.getStatInfo().mtime.getTime();
}

function max(n1, n2) {
    return Math.max(n1, n2);
}

function createCachebusterLoaderScript(timestamp, namespace) {
    const namespaceDots = namespace.replace(/\//g, ".");
    const basePath = `resources/~${timestamp}~/${namespace}/`;

    return `(function() {
    window["sap-ui-config"] = window["sap-ui-config"] || {};
    window["sap-ui-config"].resourceRoots = window["sap-ui-config"].resourceRoots || {};
    window["sap-ui-config"].resourceRoots[${JSON.stringify(namespaceDots)}] = ${JSON.stringify(basePath)};
})();`;
}

module.exports = async function ({ workspace, options: { projectNamespace } }) {
    const resources = await workspace.byGlob(`/resources/${projectNamespace}/**/*`);

    const maxDate = resources.map(signByTime).reduce(max, 0);

    const cachebusterLoaderResource = resourceFactory.createResource({
        path: `/resources/${projectNamespace}/sap-ui-cachebuster-loader.js`,
        string: createCachebusterLoaderScript(maxDate, projectNamespace),
    });

    return workspace.write(cachebusterLoaderResource);
};
