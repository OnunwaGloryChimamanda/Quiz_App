
const submit = document.getElementById('submit-btn');
submit.addEventListener('click', passedvalue);

function passedvalue(){
    const selectedVal =  document.getElementById('dropdown').value;
    localStorage.setItem('dropdownValue', selectedVal);
    return true;
}