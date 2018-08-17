const switchJson = [
  {id: 1, name: 'nanoha'},
  {id: 2, name: 'fate'},
  {id: 3, name: 'hayate'}
];

// 錯誤 無return
function onOffWithoutReturn(id, name) {
  switchJson.forEach(function(item){
    if(item.id === id && item.name === name) {
      console.log('item in for each:', item)
      return item // <= 這個 return 是forEach的callback function的return，不是onOffWithoutReturn的return
    }
  })
}
console.log('onOffWithoutReturn returns:', onOffWithoutReturn(1, 'nanoha')) // 所以這邊就印不出東西

// 修正 有return
function onOffWithReturn(id, name) {
  let foundedItem = undefined //  在外面宣告一個變數，儲存搜尋到的結果
  switchJson.forEach(function(item){
    if(item.id === id && item.name === name) {
      foundedItem = item // 找到要的item後，把item assign給foundedItem
    }
  })
  return foundedItem // 再把foundedItem回傳出去 (這是onOffWithReturn function的return)
}
console.log('onOffWithReturn returns:', onOffWithReturn(1, 'nanoha'))

// 建議 使用find找到你要的元素，程式會相對簡潔很多
// node.js 4.9.1版以上已支援find function
// 參考 https://node.green/#ES2015-built-in-extensions-Array-prototype-methods-Array-prototype-find
function onOffWithFind(id, name) {
  return switchJson.find(item => item.id === id && item.name === name)
}
console.log('onOffWithFind returns:', onOffWithFind(1, 'nanoha'))
