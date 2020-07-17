import getLevel from '../app';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('Функция должна правильно делать запрос и выдавать текущий уровень', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 8 });
  expect(getLevel(1)).toEqual('Ваш текущий уровень: 8');
  expect(fetchData).toBeCalledWith('https://server/user/1');

  fetchData.mockReturnValue({});
  expect(getLevel(1)).toEqual('Информация об уровне временно недоступна');
});
