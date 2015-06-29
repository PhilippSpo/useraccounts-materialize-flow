// Options
AccountsTemplates.configure({
    showForgotPasswordLink: true,
    overrideLoginErrors: true,
    enablePasswordChange: true,
    sendVerificationEmail: false,

    homeRoutePath: '/',
    redirectTimeout: 4000,
    defaultLayout: "masterLayout",
    defaultLayoutRegions: {
        nav: "nav",
        footer: "footer"
    },
    defaultContentRegion: "area",

    negativeValidation: true,
    positiveValidation:true,
    negativeFeedback: false,
    positiveFeedback:false,
});

//Routes
AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');
