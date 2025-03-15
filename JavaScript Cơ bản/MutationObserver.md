là API trong JavaScript cho phép lắng nghe thay đổi trong DOM (khi một phần tử bị thêm, xóa hoặc thay đổi thuộc tính).

```js
//  Chọn phần tử muốn theo dõi
let targetNode = document.getElementById("container");

//  Cấu hình MutationObserver
let config = { childList: true, subtree: true }; // Theo dõi khi có phần tử con thêm/xóa

//  Tạo một Observer với callback function
let observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    console.log("Có thay đổi trong DOM:", mutation);
    if (mutation.addedNodes.length) {
      console.log("Phần tử mới được thêm:", mutation.addedNodes);
    }
    if (mutation.removedNodes.length) {
      console.log("Phần tử bị xóa:", mutation.removedNodes);
    }
  });
});

//  Bắt đầu theo dõi
observer.observe(targetNode, config);

// Test: Thêm phần tử vào `#container`
setTimeout(() => {
  let newElement = document.createElement("p");
  newElement.textContent = "Hello, MutationObserver!";
  targetNode.appendChild(newElement);
}, 2000);
```
