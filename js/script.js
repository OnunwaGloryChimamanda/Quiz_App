
const form = document.getElementById('form');
const formBtn = document.getElementById('submit-btn');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const dropDown = document.getElementById('dropdown');


//Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    //use formControl to target all the children element with small tag
    const small = formControl.querySelector('small');
    small.innerText = message;
}


//show Success
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className ='form-control success';
}

//Event Listener
form.addEventListener('submit',
     (e) => {
    
         e.preventDefault();
         firstName.value === '' && showError(firstName, 'first name is required')

         firstName.value !== '' && showSuccess(firstName);

         lastName.value === '' && showError(lastName, 'last name is required')

         lastName.value !== '' && showSuccess(lastName);

         dropDown.value === 'select' && showError(dropDown, 'please select one category')

         dropDown.value !== 'select' && showSuccess(dropDown);

         firstName.value && lastName.value && dropdown.value !== 'select' && passedValue();
     }
)

// Passing selected text from dropdown into next Page
//const formBtn = document.getElementById('submit-btn');
//form.addEventListener('submit', passedValue);

function passedValue()
{
    const selectedVal =  document.getElementById('dropdown').value;

    console.log(selectedVal);
    localStorage.setItem('dropdownValue', selectedVal);
    if (selectedVal === 'technology') window.location = './index_tech.html';
    if (selectedVal === 'mathematics') window.location = './math.html';
    return true;
    
}
/*text inserted to the next page based on the chosen category

function redirectBasedOnCategory()
{
    const  category = document.getElementById('dropdown').value;
    if(category === 'technology'){
       // window.module.lp.form.data.url = "technology.html";
       window.location = '../src/index_tech.html';
    };
    if(category === 'mathematics'){
        window.location = '../src/math.html';
    };
};*/

//text inserted to the next page based on the chosen category