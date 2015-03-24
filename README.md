# useraccounts-materialize-flow

Router code to configure UserAccounts:

````javascript
var stdConfig = {
  layoutTemplate: "masterLayout",
  renderLayout: {
      nav: "nav",
      footer: "footer"
  },
  contentRange: "area"
};
AccountsTemplates.configureRoute('signIn', stdConfig);

AccountsTemplates.configureRoute('forgotPwd', stdConfig);

AccountsTemplates.configureRoute('signUp', stdConfig);

AccountsTemplates.configureRoute('resetPwd', stdConfig);

AccountsTemplates.configureRoute('verifyEmail', stdConfig);
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
