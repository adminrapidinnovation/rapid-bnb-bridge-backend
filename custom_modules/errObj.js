class ErrorObj {
    constructor(message = '',errObj = {}){
        this.message = message
        this.obj = errObj
    }
}

module.exports = ErrorObj