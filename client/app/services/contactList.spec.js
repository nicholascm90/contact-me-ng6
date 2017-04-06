import contactList from './contactList';
import services from './services';


describe('Contact Service tests', function () {
    var ContactService;
    var person = {
        firstName: 'Cassie',
        lastName: 'Berton',
        phone: 5556321234,
        email: 'youremail@example.com',
    }
    beforeEach(window.module(services));
    beforeEach(inject(function ($injector) {
        ContactService = $injector.get('contactList');
        console.log('contact service', ContactService._addContact);
        console.log(expect);
    }));
    describe('contact lists', () => {

        it('should have a contacts property', () => {
          expect(Array.isArray(ContactService.getContacts())).to.equal(true);
        });

        it('Should list array of the available contacts', () => {
            ContactService._addContact({ id: undefined, firstName: 'nick', lastName: 'zimmer' });

            expect(ContactService.getContacts().length).to.equal(2);
        });
        it('Should be able to update a contact that already exists', () => {
            let updatedContact = {
                id: 1,
                firstName: 'Nickolas', 
                lastName: 'Morrell2', 
                phone: 8504966910,
                email: 'nicholascm90@gmail.com'
            }; 
            ContactService.saveContact(updatedContact)
            expect(ContactService.getContact(1)).to.equal(updatedContact); 
        }); 
    });


});