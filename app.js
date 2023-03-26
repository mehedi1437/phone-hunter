const loadPhones = async(searchText) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

   const res = await fetch(url);
   const data = await res.json();
   displayPhones(data.data);
}


const displayPhones = phones =>{
   console.log(phones);

   const phoneContainer = document.getElementById('phone-container');
   phoneContainer.textContent = '';
//    Display 12 phones only
   phones = phones.slice(0,8);

// Display no phones found
  const  noPhone = document.getElementById('no-found-message');

if(phones.length === 0){
  noPhone.classList.remove('d-none');
}
else{
    noPhone.classList.add('d-none');
}

//    display all phones
   phones.forEach(phone => {
     console.log(phone);
     const phoneDiv = document.createElement('div');
     phoneDiv.classList.add('col');
     phoneDiv.innerHTML = `
     <div class="card p-4">
     <img src="${phone.image}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">Name : ${phone.phone_name}</h5>
       <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
     </div>
   </div>
     
     
     
     `
     phoneContainer.appendChild(phoneDiv);
   })

//    stop loader or spinner
  
    toogleSpinner(false);

}


// Handle search button clicked
document.getElementById('btn-search').addEventListener('click', function(){

    // start loader
    toogleSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value ; 
    loadPhones(searchText);
});


const toogleSpinner = isLoading =>{
    const loaderSection = document.getElementById('loader');
    if(isLoading){
         loaderSection.classList.remove('d-none');
    }
    else{
        loaderSection.classList.add('d-none');
    }

}

// loadPhones();