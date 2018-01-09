describe('Youtube Factory', () => {

  let Youtube;

  const searchTerm = 'Blind Guardian';

  beforeEach(angular.mock.module('app'));

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