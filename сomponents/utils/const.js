const COMPONENTS = {
    header: {
        selector:'header',
        parent: 'body',
        templateUrl: './сomponents/views/header/header.component.html',
    },
    main: {
        selector:'main',
        parent: 'body',
        templateUrl: './сomponents/views/main/main.component.html',
    },
    footer: {
        selector:'footer',
        parent: 'body',
        templateUrl: './сomponents/views/footer/footer.component.html',
    },
    cart: { 
        selector:'cart',
        parent: 'main',
        templateUrl: './templates/cart.page.html',
    },
    product: {
        selector:'product',
        parent: 'main',
        templateUrl: './templates/product.page.html',
    },
    404: {
        selector:'404',
        parent: 'main',
        templateUrl: './templates/404.page.html',
    },
    about: {
        selector:'about',
        parent: 'main',
        templateUrl: './templates/about.page.html',
    },
    contact: {
        selector:'contact',
        parent: 'main',
        templateUrl: './templates/contact.page.html',
    },
};

export { COMPONENTS };
