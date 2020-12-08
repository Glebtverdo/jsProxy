function watchObj(node, callback) {
    return new Proxy(node, {
        get: (target, name) => {
            console.log("getter");
            if (name == "style") {
                return watchObj(target[name], callback)
            } else if (name == "querySelector") {
                return true
            } else {
                return target[name]
            }
        },
        set: (target, name, value) => {

            console.log("setter");
            callback(name, value)
            target[name] = value
            return true
                //}
        }

    })


}

class EmailParser {
    constructor(email) {
        this.email = email


    }
    get isCorrect() {
        return /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(this.email)
    }
    get domain() {
        return this.isCorrect ? this.email.split('@')[1] : null
    }
    get name() {
        return this.isCorrect ? this.email.split('@')[0] : null
    }
}
export { watchObj, EmailParser };