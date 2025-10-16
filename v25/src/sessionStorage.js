// sessionStorage にデータを保存
sessionStorage.setItem("key", "value");

// sessionStorage に保存したデータを取得
let data = sessionStorage.getItem("key");
console.log(data); // 'value'

// sessionStorage に保存したデータを削除
sessionStorage.removeItem("key");
console.log(sessionStorage.getItem("key")); // null

// sessionStorage からすべての保存したデータを削除
sessionStorage.clear();
