const sidebar = document.querySelector("#sidebar");
const buttonToggler = document.querySelector(".navigation__toggler");
const buttonCloser = document.querySelector(".navigation__closer");
const elemenavigationMenus = document.querySelector(".navigation__menus");


const valueprojectcomplete = document.querySelector('#value-project-complete');

console.log("ini value ini: , ")

const valueprojectcomplete2 = document.querySelector('#value-project-complete2');

console.log("hello : ", valueprojectcomplete)


/**
 * Untuk menampilkan sidebar ketika diklik
 * 
 * Cara baca: 
 * Button toggler ku berikan event ketika di klik, maka di element dengan id sidebar (Tag Aside nya)
 * tambahkan class tambahan yaitu "show" dan buang class "hide"
 *  */

// value project complete dan year of experience
buttonToggler.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  sidebar.classList.remove("hide");
});

const containervalue = {
  projectComplete: 420 ,
  year: "340+" 
};

console.log(containervalue);

// value menus 





/**
 * Untuk menutup sidebar ketika diklik
 * 
 * Cara baca: 
 * Button closer ku berikan event ketika di klik, maka di element dengan id sidebar (Tag Aside nya)
 * hapus class tambahan yaitu "hide" dan tambah class "show"
 *  */
buttonCloser.addEventListener("click", () => {
  sidebar.classList.remove("show");
  sidebar.classList.toggle("hide");
});

valueprojectcomplete.append(containervalue.projectComplete);

valueprojectcomplete2.append(containervalue.year);

