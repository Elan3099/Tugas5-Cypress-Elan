const loginUtils = require('../Function/Login_Function.js');
import 'cypress-xpath';


describe('02_KategoriFeature_Scenario', () => {

    const validEmail = "roti@gmail.com";
    const validPass = "1234567890";
    // Set up the login state once for all test cases in this describe block
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        loginUtils.login(validEmail, validPass);
    });

    it('TC0201_PositiveCaseSuccessAddKategori', () => {
        
        //klik kategori
        cy.xpath('/html/body/div/div/div/div[1]/div/a[5]').click();
        //klik button tambah
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div[2]/a').click();
        //input field nama
        cy.xpath('//*[@id="nama"]')
        .type('Roti Segar')
         ///*verify value field bisa di input
        .should('have.value','Roti Segar')

        //input field deskripsi
        cy.xpath('//*[@id="deskripsi"]')
        .type('Rasa Strawberry')
         ///*verify value field bisa di input
        .should('have.value','Rasa Strawberry')
        //click simpan && verify bisa di click
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div[2]/button').click()
        ///*verify success pop up
        cy.xpath('//*[@id="toast-1-title"]').contains('success').should('exist')
        cy.xpath('/html/body/div[2]/ul[3]/li/div/div/div/div[2]').contains('item ditambahkan').should('exist')
        cy.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div[1]/h2')

        cy.xpath('//*[@id="toast-1-title"]').contains('success').should('exist')
        cy.xpath('//*[@id="1"]/div/div[2]').contains('item ditambahkan').should('exist')
        //verivy pop up succes
         cy.wait(1000)
    });
  
    it('TC0202_PositiveCaseSuccessDeleteKategori', () => {
       //klik kategori
       cy.xpath('/html/body/div/div/div/div[1]/div/a[5]').should('exist').click();
       ////klik button tambah
       cy.get('.chakra-table')
       .find('tbody')
       .find('tr')
       .eq(0)
       .find('td')
       .eq(2)
       .find('button')
       .click({ multiple: true })
    //    .wait(1000)
       cy.get('.chakra-modal__content-container')
       .find('section')
       .find('footer')
       .find('button')
       .eq(1)
       .click()
    //    .wait(1000)
       cy.xpath('//*[@id="toast-1-title"]').contains('success').should('exist')
       cy.xpath('/html/body/div[2]/ul[3]/li/div/div/div/div[2]').contains('item dihapus').should('exist')
       
    });
  });
  
  
  