export const welcome = () => {
  const sectionWelcome = document.createElement('section');
  sectionWelcome.className = 'sectionWelcome';
  sectionWelcome.innerHTML = `
  <section>
  <img class="imgLogoWlcm" src="IMG/Explore-removebg-preview.png">
  <h1 class="titleWlcm">Welcome to the page</h1>
             <button  class= "buttonRegister"><a href="#register">Register</a></button>
                       <button class="buttonLogin"><a href="#login">Login</a></button>
            </section>
    `;

  const googleButton = sectionWelcome.querySelector('.buttonLogin');
  googleButton.addEventListener('click', () => {

  });

  return sectionWelcome;
};
