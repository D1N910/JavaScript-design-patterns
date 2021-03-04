var Intermediary = (function () {
    var thing = {}

    return {
        resiger: function (type, action) {
            if (thing[type]) {
                thing[type] = action
            } else {
                thing[type] = [action]
            }
        },

        send: function (type) {
            if (!thing[type]) {
                return
            }
            for (var fn of thing[type]) {
                fn()
            }
        }
    }
})()

var staff = (function () {
    return {
        work() {
            console.log('员工工作了')
        }
    }
})()

var manager = (function () {
    return {
        work() {
            console.log('经理工作了')
        }
    }
})()


{
    Intermediary.resiger('work', function () {
        staff.work()
        manager.work()
    })
}

Intermediary.send('work')
