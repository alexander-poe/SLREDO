const DATABASE_URL = 'mongodb://demo:demo@ds159507.mlab.com:59507/mlab-sample';

exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                            DATABASE_URL :
                            DATABASE_URL);
exports.PORT = process.env.PORT || 8080;