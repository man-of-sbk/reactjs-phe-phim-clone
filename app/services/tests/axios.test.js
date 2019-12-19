import mockAxios from 'axios';
import { fetchData } from './services';

jest.mock('axios');

it('test mock axios resolve', async () => {
  const data = [
    {
      id: 1,
      name: 'Mary',
    },
  ];
  mockAxios.request.mockImplementationOnce(() => Promise.resolve(data));
  await expect(fetchData('get', { url: '/aaa' })).resolves.toEqual(data);
  expect(mockAxios.request).toHaveBeenCalledTimes(1);
  expect(mockAxios.request).toHaveBeenCalledWith({
    method: 'get',
    url: '/aaa',
  });
});

it('test mock axios reject', async () => {
  const message = 'has errors';
  mockAxios.request.mockImplementationOnce(() =>
    Promise.reject(new Error(message)),
  );
  await expect(fetchData('get', { url: '/aaa' })).rejects.toThrow(message);
  expect(mockAxios.request).toHaveBeenCalledTimes(2);
  expect(mockAxios.request).toHaveBeenCalledWith({
    method: 'get',
    url: '/aaa',
  });
});
