module.export = class User {
    constructor(name, emoji, id) {
        this.name = name
        this.emoji = emoji
        this.id = id
    }
    writein(forum) {
        forum.writein.push(this)
    }

    static create ({name, emoji}) {
        return new User(name, emoji, id);
    }
}

