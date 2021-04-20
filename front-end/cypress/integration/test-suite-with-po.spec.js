/// <reference types="cypress" />

import * as loginFuncs from '../pages/loginPage'
import * as dashboardFuncs from '../pages/dashboardPage'

describe('Test suite with Page-objects', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
        loginFuncs.checkLoginPageTitle()       
    }) 

    it('Perform a valid login and logout', () => {       
        loginFuncs.performValidLogin('tester01','GteteqbQQgSr88SwNExUQv2ydb7xuf8c','Welcome')  
        dashboardFuncs.performLogout('Login') 
    }) 
    
})