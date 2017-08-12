
// 在这里我们会定义好数据库的 存取方法

// 取出数据库中的数据
const KEY = 'goodsid'

export function getItem() {
    return JSON.parse(localStorage.getItem(KEY) || '[]')
}

// 往数据库中存入商品
export function setItem(data) {
    // 先去数据库中检索,看看是否有数据,如果有数据,就取出来
    var array = JSON.parse(localStorage.getItem(KEY) || '[]')

    array.push(data)

    localStorage.setItem(KEY,JSON.stringify(array))
}


