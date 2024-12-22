// поиск реверсивной матрицы
const n = 5;
const matrix = [
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
];

function getReversedAdjancyMatrix(n, sourceMatrix = []) {
  const resultMatrix = [];

  for (let i = 0; i < n; i++) {
    resultMatrix[i] = [];
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // узлы i & j не связаны между собой
      if (i != j && !sourceMatrix[i][j]) {
        resultMatrix[i][j] = 1;
      } else {
        resultMatrix[i][j] = 0;
      }
    }
  }

  return resultMatrix;
}

console.log(getReversedAdjancyMatrix(n, matrix));
