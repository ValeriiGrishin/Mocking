import getLevel from '../src/index.js';
import fetchData from '../src/http.js';

jest.mock('../src/http.js');

beforeEach(() => {
  jest.resetAllMocks();
});

describe('getLevel function', () => {
  test('should return level info for successful response', () => {
    fetchData.mockReturnValue({
      status: 'ok',
      level: 42,
    });

    const result = getLevel('user123');
    
    expect(result).toBe('Ваш текущий уровень: 42');
    expect(fetchData).toHaveBeenCalledWith('https://server/user/user123');
  });

  test('should return unavailable info for non-ok status', () => {
    fetchData.mockReturnValue({
      status: 'error',
      level: 0,
    });

    const result = getLevel('user456');
    
    expect(result).toBe('Информация об уровне временно недоступна');
  });

  test('should return unavailable info when fetch throws error', () => {
    fetchData.mockImplementation(() => {
      throw new Error('Network error');
    });

    const result = getLevel('user789');
    
    expect(result).toBe('Информация об уровне временно недоступна');
  });
});