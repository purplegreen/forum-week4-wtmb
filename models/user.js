module.export = class User {
    constructor(name, emoji, idi) {
        this.name = name
        this.emoji = emoji
        this.id = this.id
    }
    writein(forum) {
        forum.writein.push(this)
    }

    static create ({name, emoji}) {
        return new User(name, emoji, id);
    }
}

