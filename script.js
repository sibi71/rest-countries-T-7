 const root= document.querySelector("#root");

 const container_1 = document.createElement("div");

 container_1.setAttribute("class","container_1");

 const headtitle = document.createElement("h1");

 headtitle.innerText="Where in the world ?";

const dark_mode = document.createElement("button");
    // <i class="fa-solid fa-moon"></i>
dark_mode.setAttribute("class","dark_mode");

const dark_modeicon=document.createElement("i");

dark_modeicon .classList.add("fa-solid","fa-moon","fa");

// <i class="fa-solid fa-magnifying-glass"></i>

const container_2 =document.createElement("div");

container_2.setAttribute("class","container_2");

const controls = document.createElement("div");

controls.setAttribute("class","controls");

const search_icon = document.createElement("i");

search_icon.classList.add("fa-solid","fa-magnifying-glass");

const input = document.createElement("input");

input.type="search";

input.setAttribute("class","search_input");

input.placeholder="Search the country";


const conut = document.createElement("div");

conut.setAttribute("class","countries");



root.append(container_1);
container_1.append(headtitle);
container_1.append(dark_mode);
dark_mode.append(dark_modeicon);
root.append(container_2);
container_2.append(controls);
controls.append(search_icon);
controls.append(input);
root.append(conut);



// end creete element with DOM

const toggle = document.querySelector(".dark_mode");
const icon = document.querySelector(".fa");
const conutries = document.querySelector(".countries");


toggle.addEventListener("click", e =>{
   
    document.body.classList.toggle("dark-mode");
    toggle.classList.toggle("dark-mode");
    icon.classList.toggle("fa-solid");
    search.classList.add("search_font");
    
    
})

async function getcountries(){
    const URL= await fetch(`https://restcountries.com/v2/all`);
    const res = await URL.json();
    res.forEach(d => {
        showcountry(d);
    });  
}
getcountries();

function showcountry(data){
    const country=document.createElement("div");
    country.classList.add("country");
    
    country.innerHTML=
    `<div class="cuntry-img">
        <img src=${data.flag} alt="">
    </div>
    <div class="country-details">
        <h5 class="conutry-name">${data.name}</h5>
        <p><strong>Capital:</strong><span>${data.capital}</span></p>
        <p><strong>Region :</strong>${data.region}</p> 
        <p><strong>Currency code :</strong>${data.cioc}</p>
        <p><strong> Lat,Long :</strong>${data.latlng}</p>
        <p><strong>Population :</strong>${data.population}</p>
    </div>`;
   
    conutries.appendChild(country)
}

    const search = document.querySelector(".search_input");

    const countryname = document.querySelector(".country-name");



 







 






    
  

     