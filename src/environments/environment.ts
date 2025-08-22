const baseUrl = 'http://localhost:4200'

export const environment = {
    production: false,
    application: {
        baseUrl,
        name: 'NamedProduct',
    },
    apis: {
        default: {
            url: 'https://localhost:44347',
            rootNamespace: 'NamedCompany.NamedProduct',
        },
    },
}
