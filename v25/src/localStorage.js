// localStorage にデータを保存
localStorage.setItem("foo", "bar");

// localStorage に保存したデータを取得
const foo = localStorage.getItem("foo");
console.log(foo); // 'bar'

// localStorage に保存したデータを削除
localStorage.removeItem("foo");
console.log(localStorage.getItem("foo")); // null

// localStorage からすべての保存したデータを削除
localStorage.clear();
