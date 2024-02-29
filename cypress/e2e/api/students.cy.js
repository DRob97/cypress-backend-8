// import {postRequestBody} from "../../fixtures/testData.json"

// describe('CRUD Operations', () => {

//     it('Create a new student using POST', () => {

//         cy.request({
//             method: 'POST',
//             url: Cypress.env('baseUrl'),
//             body: postRequestBody
//         })

//     })
// })
import { postRequestBody } from '../../fixtures/testData.json'

describe('CRUD Operations', () => {

  // Temporary request to clean start.  
  after(() => {
    cy.request({
      method: 'DELETE',
      url: 'https://tech-global-training.com/students/deleteAll',
    })
  })

  it('Create a new student using POST', () => {
    cy.request({
      method: 'POST',
      url: Cypress.env('baseUrl'),
      body: postRequestBody,
    }).then((response) => {
        // This is just a proof that we get the response of what we created
        cy.log(JSON.stringify(response.body))

        // expect(response.status).to.equal(200)
        // expect(response.duration).to.be.below(200)
        // expect(response.body.firstName).to.equal(postRequestBody.firstName)
        // Object.entries(postRequestBody).forEach(([key, value]) => {
        //     expect(response.body[key]).to.equal(value)

        //     cy.log(response.body[key] + ' value of ' + key)
        //     cy.log(value + ' coming from the request body')
        // })

        cy.validateResponse(response, postRequestBody)
    })
  })
})