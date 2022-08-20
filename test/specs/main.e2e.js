
describe('Main Page',() =>{
    it('Verify list items',() =>{
        browser.url('/')

        const listExamples = $$("ul li"); //will check all the lists under the ul by $$

        expect(listExamples).toBeElementsArrayOfSize({gte:1}); //gte means greater that 1 li in this usecase
    })
});