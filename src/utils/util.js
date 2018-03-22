export default {
    toString: Object.prototype.toString,
    fetch(key) {
        let localStorage = window.localStorage.getItem(key)
        return localStorage ? JSON.parse(localStorage) : null
    },
    save(key, item) {
        window.localStorage.setItem(key, JSON.stringify(item))
    },
    remove(key) {
        window.localStorage.removeItem(key)
    },
    clear() {
        window.localStorage.clear()
    },
    arrayToObject(array, key = 'id') {
        let obj = {}
        if (array && this.toString.call(array) === '[object Array]') {
            array.forEach(item => {
                obj[item[key]] = item
            })
        }
        return obj
    },
    arrayToString(array, separator = ',') {
        let str = ''
        if (array && this.toString.call(array) === '[object Array]') {
            str = array.join(separator)
        }
        return str
    },
    getUrlQueryString(name) {
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
        let r = window.location.search.substr(1).match(reg)
        if (r != null) return decodeURIComponent(r[2])
        return null
    }
}
