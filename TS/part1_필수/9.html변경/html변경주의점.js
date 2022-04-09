// let 이미지 = document.getElementById("image");
// 이미지?.addEventListener("click", function () {
//   if (이미지 instanceof HTMLImageElement) {
//     이미지.src = "change.jpg";
//     console.log("이미지바뀜");
//   }
// });
var 헤딩 = document.getElementById("title");
헤딩 === null || 헤딩 === void 0 ? void 0 : 헤딩.addEventListener("click", function () {
    if (헤딩 instanceof HTMLHeadingElement) {
        헤딩.innerHTML = "hi hi";
    }
});
