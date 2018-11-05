
module.exports = class User {
    constructor(name, emoji, id) {
        this.name = name
        this.emoji = emoji
        this.id = id
    }
    reacts(forum) {
        forum.users.push(this)
    }


    static create ({name, emoji}) {
        return new User(name, emoji, id);
    }
}

