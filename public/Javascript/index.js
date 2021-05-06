const navslide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", () => {

        nav.classList.toggle("nav-active");

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            }
            else { link.style.animation = `navlinkFade 0.5s ease forwards ${index / 7 +0.3}s` }
        });
        burger.classList.toggle('toggle');
    });
}
navslide();

const loadProducts = async ()=>{
    const products = await fetch('http://adminfilesupload.herokuapp.com/api/getproductinfo').then((products)=>{products.json()})
    console.log(products);

}