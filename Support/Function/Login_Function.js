import 'cypress-xpath';

// module.exports = {
//     login: (email, password) => {
//       // Your login logic here
//       cy.get('#email').type(email);
//       cy.get('#password').type(password);
//       cy.get('.chakra-button').click();
//       if(email.includes('@gmail.com') && password === '1234567890'){
//     cy.wait(1000)
//     cy.url().should('eq', 'https://kasirdemo.belajarqa.com/dashboard');
//     }else if(!email.includes('@gmail.com')){
//         cy.xpath('/html/body/div/div/div/div/div[2]/div/div[1]')
//         .contains('"email" must be a valid email')
//         .should('exist')
//     }else{
//         cy.xpath('/html/body/div/div/div/div/div[2]/div/div[1]')
//         .contains("Kredensial yang Anda berikan salah")
//         .should('exist')
//     }
// }
//   };

  const login = (email, password) => {
     // Your login logic here
     cy.visit('https://kasirdemo.belajarqa.com/');
     cy.get('#email').type(email)
     cy.get('#password').type(password)
     cy.get('.chakra-button').click();
     
  }

  module.exports = {login};