const { User, Student } = require('../models');

const friendCount = async () =>
    User.aggregate()
        .count('friendCount')
        .then((numberOfFriends) => numberOfFriends);