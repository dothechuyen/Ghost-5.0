let integrationFrontendDefault = 'https://staging.i-frontend.techfi.tech';
// let integrationFrontendDefault = 'http://localhost:3000';
let integrationFrontend = integrationFrontendDefault;
const INTEGRATION_JWT_MEMBER_KEY = 'INTEGRATION_JWT_MEMBER';
try {
    integrationFrontend = integrationFrontendURL;
} catch (e) {
    console.log(e);
}

function addValueToAttr(elementId, attrKey, attrValue) {
    document.getElementById(elementId).setAttribute(attrKey, attrValue);
}

function httpPost(url, body, headers) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('POST', url, false); // false for synchronous request
    xmlHttp.setRequestHeader('Accept', 'application/json');
    xmlHttp.setRequestHeader('Content-Type', 'application/json');
    for (var key in headers) {
        xmlHttp.setRequestHeader(key, headers[key]);
    }

    xmlHttp.send(JSON.stringify(body));
    return xmlHttp.responseText;
}

const ghostIntegrationJwtUrl = '/members/api/integration-member-jwt';
var TechFiIntegrationBaseURL = TechFiIntegrationBaseURL || 'http://localhost:8000';
getIntegrationMemberJwtToken;

function getIntegrationMemberJwtToken() {
    var host = window.location.host;
    var protocol = location.protocol;
    var url = `${protocol}//${host}${ghostIntegrationJwtUrl}`;
    // console.log(url);
    var integrationJwtUrl = TechFiIntegrationBaseURL + '/users/jwt-ghost-member';

    // console.log(integrationJwtUrl);
    var headers = {integrationJwtUrl: integrationJwtUrl};
    var body = {};
    let value = httpPost(url, body, headers);
    localStorage.setItem(INTEGRATION_JWT_MEMBER_KEY, value);
    return value;
}
