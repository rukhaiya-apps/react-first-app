describe("template spec", () => {
    it("First test", () => {
        cy.visit("http://localhost:3000");
        });
      });
    
describe("Counter Component", () => {
        it('increments the counter when the "Increment" button is clicked', () => {
          cy.visit("http://localhost:3000");
          cy.get(".counter-button-inc").click();
          cy.get(".counter-container").should("contain", "Count: 6");
          cy.get(".counter-button-inc").click();
          cy.get(".counter-container").should("contain", "Count: 7");
    });
    
        it('decrements the counter when the "Decrement" button is clicked', () => {
          cy.visit("http://localhost:3000");
          cy.get(".counter-button-dec").click();
          cy.get(".counter-container").should("contain", "Count: 4");
          cy.get(".counter-button-dec").click();
          cy.get(".counter-container").should("contain", "Count: 3");
        });
      });
    