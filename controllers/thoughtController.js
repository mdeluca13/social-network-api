

const reactionCount = async () =>
    Thought.aggregate()
        .count('reactionCount')
        .then((numberOfReactions) => numberOfReactions);