const constants = require("../assets/constants/main");
var httpclient = require('/lib/http-client');

exports.api = function (method, url, body) {

    return httpclient.request({
        method: method, url: `${constants.server}/${url}`, contentType: "application/json", body: body,
    });

}