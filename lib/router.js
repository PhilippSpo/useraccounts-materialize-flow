AccountsTemplates.configure({
    sendVerificationEmail: true,
    homeRoutePath: '/',
    redirectTimeout: 4000,
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

FlowRouter.route('/', {
    action: function() {
        FlowLayout.render('masterLayout', {
            nav: "nav",
            footer: "footer",
            area: 'home'
        });
    }
});

FlowRouter.route('/private', {
    action: function() {
        FlowLayout.render('masterLayout', {
            nav: "nav",
            footer: "footer",
            area: 'private'
        });
    },
    middlewares: [AccountsTemplates.ensureSignedIn]
});