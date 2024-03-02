import { postRequestBody, putRequestBody} from '../../fixtures/testData.json'

describe('CRUD Operations', () => {

  // Temporary request to clean start.  
  // after(() => {
  //   cy.request({
  //     method: 'DELETE',
  //     url: 'https://tech-global-training.com/students/deleteAll',
  //   })
  // })
  let userID

  it('Create a new student using POST', () => {
    cy.request({
      method: 'POST',
      url: Cypress.env('baseUrl'),
      body: postRequestBody,
    }).then((response) => {
        // This is just a proof that we get the response of what we created
        cy.log(JSON.stringify(response.body))
        userID = response.body.id

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

  it('Read the created student using GET', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env('baseUrl')}/${userID}`
    }).then((response) => {
      expect(response.status).to.equal(200)
      cy.log(JSON.stringify(response.body))
    })
  })

  it('Update the student that we created using PUT', () => {
    cy.request({
      method: 'PUT',
      url: `${Cypress.env('baseUrl')}/${userID}`,
      body: putRequestBody
    }).then((response) => {
      expect(response.status).to.equal(200)
      cy.validateResponse(response, putRequestBody)
    })
  })

  it('Get the updated student using GET', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env('baseUrl')}/${userID}`
    }).then((response) => {
      expect(response.status).to.equal(200)
      expect(response.duration).to.be.below(400)
      expect(response.body.firstName).to.equal(putRequestBody.firstName)
    })
  })

  it('Delete the created/updated user', () => {
    cy.request({
      method: 'DELETE',
      url: `${Cypress.env('baseUrl')}/${userID}`
    }).then((response) => {
      expect(response.status).to.equal(200)
    })
  })
})