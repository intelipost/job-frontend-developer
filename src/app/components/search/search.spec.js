describe('Component: Search', () => {

    let element;

    const searchTerm = 'Blind Guardian';

    beforeEach(angular.mock.module('app.search'));

    beforeEach(inject((_youtubeService_) => {
        Youtube = _youtubeService_;
    }));

    it('should exist', () => {
        expect(Youtube).toBeDefined();
    });

    describe('.getSearchResults()', () => {
        it('should exist', () => {
            expect(Youtube.getSearchResults).toBeDefined();
        });

    });

})