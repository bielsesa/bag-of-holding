import { createAuth0 } from "@auth0/auth0-vue";

const app = new Vue({
  el: '#app'
});

app.use(
  createAuth0({
    domain: "dev-hk0wucll.us.auth0.com",
    client_id: "OxoajE4M66iJywI2unWsxZT4uGKc7pO9",
    redirect_uri: window.location.origin
  })
);
