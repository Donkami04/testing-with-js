const BooksService = require('./books.service');
const {generateManyBooks} = require('../../fakes/fakebooks');

const mockGetAll = jest.fn();

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
  });

  describe('Test for getBooks', () => {
    test('should return a list book', async () => {
      // Arrange
      const fakebooks = generateManyBooks(10)
      mockGetAll.mockResolvedValue([...fakebooks]);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toEqual(10);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
      expect(mockGetAll).toHaveBeenCalledTimes(1);
    });
  });
});
