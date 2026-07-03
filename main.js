// 1.图片切换代码（保留不变）
const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/红砖麦当劳.jpg") {
    myImage.setAttribute("src", "images/重庆洪崖洞.jpg");
  } else {
    myImage.setAttribute("src", "images/红砖麦当劳.jpg");
  }
};

// 2.只保留1个setUserName函数，优化空值逻辑
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  // 为空直接终止，不再递归调用
  if (!myName || myName.trim() === "") {
    alert("名字不能为空！");
    return;
  }
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}

// 读取本地存储用户名
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

// 只有页面存在button才绑定点击
if (myButton) {
  myButton.onclick = function () {
    setUserName();
  };
}
