
module.exports = class Forum {
    constructor(title, post, interaction) {
        this.title = title
        this.post = post
        this.interaction = interaction
        this.reactions = []
        this.users = []
    }
    
    report () {
        console.log(this.title, 'written by', this.users, '>>>', this.post)
    }
}