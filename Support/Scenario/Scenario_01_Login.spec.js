const loginUtils = require('../Function/Login_Function.js');

describe('01_Login_Scenario', () => {
    const validEmail = "roti@gmail.com";
    const validPass = "1234567890";
    beforeEach(() => {
      // Clear cookies and local storage before each test
      cy.clearCookies();
      cy.clearLocalStorage();
    });
  
    it('TC0101_PositiveCase_SuccessLogin', () => {
      const email = validEmail;
      const password = validPass;
      loginUtils.login(email, password);
      cy.url('https://kasirdemo.belajarqa.com/dashboard').should('exist')
    });
  
    it('TC0102_NegativeCase_FailedLogin', () => {
      const emails = ["qweqw","sasdsa@gmail.com"];
      const password = "123422";
      for (const email of emails) {
        loginUtils.login(email, password);
    
        if (!email.includes('@gmail.com')) {
          cy.xpath('/html/body/div/div/div/div/div[2]/div/div[1]')
            .contains('"email" must be a valid email')
            .should('exist');
        } else {
          cy.xpath('/html/body/div/div/div/div/div[2]/div/div[1]')
            .contains("Kredensial yang Anda berikan salah")
            .should('exist');
        }
      }
    });
    
    });
