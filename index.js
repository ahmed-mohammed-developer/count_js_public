let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".three");
let started = false; // Function Started ? No


window.onscroll = function () {
     if (window.scrollY >= section.offsetTop){
          if (!started) {
               nums.forEach((num) => startCount(num));
          }
          started = true;
     }
}

function startCount(el) {
     let goal = el.dataset.goal;
     let count = setInterval(() => {
          el.textContent++;
          if (el.textContent == goal) {
               clearInterval(count)
          }
     }, 2000 / goal);
}

/*
شرح الكود 
https://www.youtube.com/watch?v=PLsUdgLnzgQ&list=PLDoPjvoNmBAycCXz5d9WvqlmykUIys5e8&index=14
*/

