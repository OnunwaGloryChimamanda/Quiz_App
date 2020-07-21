const form = document.getElementById('form');
// const formBtn = document.getElementById('submit-btn');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const select = document.getElementById('dropdown');


//Show input error message
function showError(input, message){
const formControl = input.parentElement;
formControl.className ='form-control error';
//use formControl to target all the children element with small tag
const small = formControl.querySelector('small');
small.innerText = message;
}


//show Success
function showSuccess(input){
const formControl = input.parentElement;
formControl.className ='form-control success';
}

//Event Listener
form.addEventListener('submit', function(e){
   e.preventDefault(); 
   console.log('submit');
   if(firstName.value === ''){
       showError(firstName, 'Firstname is required')
   }else{
       showSuccess(firstName);
   }

   if(lastName.value === ''){
    showError(lastName, 'Lastname is required')
}else{
    showSuccess(lastName);
}

if( select === ''){
 showError(select,'Please select one category');
}else{
    showSuccess(select);
}
})

// Passing selected text from dropdown into next Page
const formBtn = document.getElementById('submit-btn');
form.addEventListener('submit', passedValue);

function passedValue(){
    const selectedVal =  document.getElementById('dropdown').value;

    console.log(selectedVal);
    localStorage.setItem('dropdownValue', selectedVal);
    return true;
    
}
//text inserted to the next page based on the chosen category
