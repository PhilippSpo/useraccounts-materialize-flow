# useraccounts-materialize-flow

In order to get this demo to work, you currently have to be using the `flow-router-integration` branch of the useraccounts package. See instructions [here](https://github.com/meteor-useraccounts/core/blob/master/Guide.md#flow-router-integration).

Router code to configure UserAccounts:

````javascript
AccountsTemplates.configure({
  defaultLayout: "masterLayout",
  defaultLayoutRegions: {
    nav: "nav",
    footer: "footer"
  },
  defaultContentRegion: "area"
});

AccountsTemplates.configureRoute('signIn');

AccountsTemplates.configureRoute('forgotPwd');

AccountsTemplates.configureRoute('signUp');

AccountsTemplates.configureRoute('resetPwd');

AccountsTemplates.configureRoute('verifyEmail');
`````

master layout html file:
````html
<template name="masterLayout">
  <header>
    {{> Template.dynamic template=nav}}
  </header>
  <main id="container">
    <div class="container">
      {{> Template.dynamic template=area}}
    </div>
  </main>
  {{> Template.dynamic template=footer}}
</template>
````
