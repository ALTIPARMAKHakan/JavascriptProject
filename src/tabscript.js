"use strict";

const navTabs = document.querySelectorAll("nav li");
const article = document.querySelectorAll("article");

console.log(navTabs);
console.log(article);


let hideAllArticles = function() {
    for (let i = 0; i < article.length; i++) {
        article[i].classList.add("hiddenclass");
        // article[i].hidden = true;
        navTabs[i].classList.remove("active");
    }
};

let showArticle = function(index) {
    article[index].classList.remove("hiddenclass");
    // article[index].hidden = false;
    navTabs[index].classList.add("active");
}

for (let i = 0; i < navTabs.length; i++) {
    navTabs[i].addEventListener("click", function() {
        hideAllArticles();
        showArticle(i);
    });
}

hideAllArticles();
showArticle(0);
