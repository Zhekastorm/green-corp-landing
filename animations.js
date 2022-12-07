const Increase_Number_Animation_Speed = 50;


function increaseNumberAnimationStep(i, element, endNumber){
    if (i <= endNumber){
        if (i===endNumber){
            element.innerText = i + '+';
        } else {
            element.innerText = i;
        }

        i+=100;
        setTimeout(function(){
            increaseNumberAnimationStep(i, element, endNumber);
        }, Increase_Number_Animation_Speed);
    }
}

function initIncreaseNumberAnimation(){
    const element = document.querySelector(".features_count");
	increaseNumberAnimationStep(0, element, 5000);
}
initIncreaseNumberAnimation();


document.querySelector('#budget').addEventListener('change', function handleSelectChange(event) {
  if (event.target.value === 'other') {
    const formContainer = document.createElement('div');
    formContainer.classList.add('form_group');
    formContainer.classList.add('form_other-input'); // Задание 1
 
    const input = document.createElement('input');
    input.placeholder = "Введите ваш вариант";
    input.type = "text"; // Задание 2
      
    formContainer.appendChild(input);
    document.querySelector('.form form').insertBefore(formContainer, document.querySelector('.form__submit')); // Задание 3
  }
 
  const otherInput = document.querySelector('.form_other-input');
  if (event.target.value !== 'other' && otherInput) { // Задание 5
  document.querySelector('.form form').removeChild(otherInput); // Задание 4
  }
});