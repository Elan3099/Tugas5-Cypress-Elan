const loginUtils = require('../Function/Login_Function.js');
import 'cypress-xpath';


describe('03_ProductFeature_Scenario', () => {

    const validEmail = "roti@gmail.com";
    const validPass = "1234567890";
    // Set up the login state once for all test cases in this describe block
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        loginUtils.login(validEmail, validPass);
    });

    it('TC0301_PositiveCaseSuccessAddProduct', () => {
    
     //klik produck
     cy.xpath('//*[@id="root"]/div/div/div[1]/div/a[6]/div/div/div').should('exist').click()
     //klik tambah
     cy.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div[2]/a').should('exist').click()
     //assertion kode field not null
    //  cy.get('#kode').should('have.value').should('not.be.undefined')
    //  .wait(1000)
    cy.get('#kode').invoke('val').then((value) => {
        cy.get('#kode').should('have.value', value);
      });
     //input field nama dan verify
    cy.get('#nama').type('Roti erika').should('have.value', 'Roti erika')
     //input deskripsi dan verify
     cy.get('#deskripsi').type('Roti erika deskripsi').should('have.value', 'Roti erika deskripsi')
     //input harga beli dan verify
     cy.xpath('//*[@id="harga beli"]').clear();
     cy.xpath('//*[@id="harga beli"]').type('12000').should('have.value', '12.000')
     //input harga jual dan verify
     cy.xpath('//*[@id="harga jual"]').clear();
     cy.xpath('//*[@id="harga jual"]').type('14000').should('have.value', '14.000')
     //input stok dan verify
     cy.get('#stok').clear();
     cy.get('#stok').type('5').should('have.value', '5')
     //pilih kategori
     cy.get('#kategori').click().should('exist')
        //cari kategori
        cy.get('.css-2s2hk4').type('Roti Test').should('have.value', 'Roti Test')
        cy.get('.chakra-table')
        .find('tbody')
        .find('tr')
        .find('td')
        .eq(0)
        .click()
    //klick simpan
    cy.get('.chakra-button').should('exist').click()
    cy.xpath('//*[@id="toast-1-title"]').contains('success').should('exist')
    cy.xpath('//*[@id="1"]/div/div[2]').contains('item ditambahkan').should('exist')
    //verivy pop up succes
    cy.wait(1000)

    });
  
    it('TC0302_PositiveCaseSuccessDeleteProduct', () => {
        cy.wait(2000)
        //klik produck
     cy.xpath('//*[@id="root"]/div/div/div[1]/div/a[6]/div/div/div').should('exist').click()
     //klik titik 3
     cy.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div[2]/table')
     .find('tbody')
     .find('tr')
     .eq(0)
     .find('td')
     .eq(9)
     .click()
     .find('button')
          // klik button hapus
    .click({multiple: true, force: true})
    .wait(1000)

    cy.get('.chakra-modal__content-container')
       .find('section')
       .find('footer')
       .find('button')
       .eq(1)
       // klik hapus
       .click()
       .wait(1000)
         // verify pop up hapus
       cy.xpath('//*[@id="toast-1-title"]').contains('success').should('exist')
       cy.xpath('/html/body/div[2]/ul[3]/li/div/div/div/div[2]').contains('item dihapus').should('exist')
  
   
   
       
    });
  
  });