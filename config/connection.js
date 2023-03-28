const { connect, connection } = require('mongoose');

connect('mongodb://localhost/developersApplications', {
    useNewURLParser: true,
    useUnifiedTopology: true
});

module.exports = connection;