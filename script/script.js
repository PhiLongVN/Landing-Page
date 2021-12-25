const hamber = document.querySelector(".hamber");
const menu = document.querySelector(".menu");
const head = document.querySelector(".header");
const se1 = document.querySelector(".section1");


hamber.onclick = () => {
  menu.classList.toggle("active");
  console.log("xvxcxvx");
};

head.onclick = () => {
  menu.classList.remove("active");
};

se1.onclick = () => {
  menu.classList.remove("active");
 
};



