import ErrorRepository from '../app';

test('проверка error', () => {
  const errorRepository = new ErrorRepository(404, 'Страница не найдена');
  expect(errorRepository.translate(405)).toEqual('Unknown error');
});

test('проверка true', () => {
  const errorRepository = new ErrorRepository(404, 'Страница не найдена');
  expect(errorRepository.translate(404)).toEqual('Страница не найдена');
});
