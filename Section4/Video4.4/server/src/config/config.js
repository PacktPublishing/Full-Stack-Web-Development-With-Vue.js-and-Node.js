module.exports = {
    port: 3000,
    db: {
        database: process.env.DB_NAME || 'playlist',
        user: process.env.DB_USER || 'playlist',
        password: process.env.DB_PASSWORD || 'playlist',
        options: {
            dialect: process.env.DB_DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            operatorsAliases: false,
            storage: './playist.sqlite'
        }
    }
}