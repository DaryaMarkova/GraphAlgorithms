/*
  По заданной матрице смежности ориентированного графа найдите количество ребер в нем.

  Входные данные

  На вход программы поступает число n (
  ≤
  ≤ 100) – количество вершин графа, а затем n строк по n чисел, каждое из которых равно 0 или 1, – его матрица смежности.

  Выходные данные

  Одно число - количество ребер в графе.
*/
function calcaluteCountOfEdges(n = 0, matrix = []) {
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j]) {
        count += 1;
      }
    }
  }

  return count;
}

const n = 5;
const matrix = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

console.log(calcaluteCountOfEdges(n, matrix));