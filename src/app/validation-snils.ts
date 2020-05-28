import {AbstractControl, ValidationErrors} from '@angular/forms';

export const snilsValidator = (snils: AbstractControl): {[key: string]: boolean} => {
  if (!snils || !snils.value || snils.value === '') { return null; }

  return validateSnils(snils.value) ? validateSnils(snils.value) : null;
};

function validateSnils(snils): null | ValidationErrors {
  snils = snils.replace(/-|\s/g, '');
  if (typeof snils === 'number') {
    snils = snils.toString();
  } else if (typeof snils !== 'string') {
    snils = '';
  }
  if (!snils.length) {
    return { invalidSnils: 'СНИЛС не может быть пустым' };
  } else if (!(/^[0-9]*$/.test(snils))) {
    // error.code = 2;
    return { invalidSnils: 'СНИЛС должен состоять только из цифр' };
  } else if (snils.length !== 11) {
    return { invalidSnils: 'СНИЛС должен состоять из 11 цифр' };
  } else {
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(snils[i]) * (9 - i);
    }
    let checkDigit = 0;
    if (sum < 100) {
      checkDigit = sum;
    } else if (sum > 101) {
      checkDigit = sum % 101;
      if (checkDigit === 100) {
        checkDigit = 0;
      }
    }
    return checkDigit === parseInt(snils.slice(-2)) ? null : { invalidSnils: 'Введен некорректный СНИЛС, проверьте правильность ввода' };
  }
}
