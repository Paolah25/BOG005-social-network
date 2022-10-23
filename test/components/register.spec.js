import { register } from '../../src/components/register.js';

jest.mock('../../src/lib/firebase/firebaseService.js');

const registerTest = () => {
  const registrarTest = document.createElement('section');
  registrarTest.innerHTML = `
                            <input type="text" name="" id="nameRegister" class="texField" placeholder="Name">
                            <input type="text" name="" id="emailRegister" class="texField" placeholder="Gmail">
                            <p id="EmailInUse">Email in use</p>
                            <input type="password" pattern=".{6,}" name="" id="passwordRegister" class="texField" placeholder="Password">
                            <button  class="button" type="submit">Registrarse</button>
         `;

  return registerTest;
};

describe('register', () => {
  it('deberia llamar la funcion createUser', () => {
    const testCreateUser = registerTest();
    const userNameTest = testCreateUser.querySelector('#nameRegister');
    userNameTest.value = 'Paola';
    const userEmailtest = testCreateUser.querySelector('#emailRegister');
    userEmailtest.value = 'lololo@hotmail.com';
    const passwordUsertest = testCreateUser.querySelector('#passwordRegister');
    passwordUsertest.value = '111111';
    const createUsertest = jest.fn();
    createUsertest(userEmailtest, passwordUsertest);

    const buttonNextPage = testCreateUser.querySelector('.button');
    buttonNextPage.addEventListener('click', () => register(testCreateUser));
    buttonNextPage.dispatchEvent(new Event('click'));
    expect(createUsertest).toHaveBeenCalled();
  });
});
