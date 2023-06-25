const msal = require("@azure/msal-node");
const app = new msal.ConfidentialClientApplication({
  auth: {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    authority: `https://login.microsoftonline.com/${process.env.TENANT_ID}`,
  }
});
app.acquireTokenByClientCredential({
  scopes: process.env.SCOPES.split(" ")
}).then(result => console.log(result))
.catch(error => console.error(error));
