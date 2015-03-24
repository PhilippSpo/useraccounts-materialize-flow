AccountsTemplates.configure({
    sendVerificationEmail: true
});

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