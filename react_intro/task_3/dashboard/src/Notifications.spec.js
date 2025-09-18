const React = require("react");
const ReactDOMServer = require("react-dom/server");
const Notifications = require("./Notifications").default;

try {
    const html = ReactDOMServer.renderToString(React.createElement(Notifications));
    if (html.includes("Here is the list of notifications") &&
        html.includes("New course available") &&
        html.includes("New resume available") &&
        html.includes("Close")) {
        console.log("OK");
    } else {
        console.log("NOK");
    }
} catch (e) {
    console.log("NOK");
}
