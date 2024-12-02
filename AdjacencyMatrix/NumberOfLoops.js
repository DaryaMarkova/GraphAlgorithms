/*
  Входные данные

  На вход программы поступает число n (
  ≤
  ≤ 100) – количество вершин графа, а затем n строк по n чисел, каждое из которых равно 0 или 1, – его матрица смежности.

  Выходные данные

  Одно число - количество петель в графе.
*/

function calcaluteNumberOfLoops(n = 0, matrix = []) {
  let count = 0;

  for (let i = 0; i < matrix.length; i++) {
    count += matrix[i][i];
  }

  return count;
}

const n = 5;
const matrix = [
  [1, 1, 1, 1, 0],
  [1, 0, 1, 1, 1],
  [1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
];

console.log(calcaluteNumberOfLoops(n, matrix));
