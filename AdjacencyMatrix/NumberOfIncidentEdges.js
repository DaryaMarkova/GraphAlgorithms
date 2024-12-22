/**
 *
 * @param {Неориентированный граф задаётся списком ребер. Необходимо посчитать количество рёбер, инцидентных данному. То есть имеющих с ним одну общую вершину.} n
 * @param {n} - количество вершин в графе
 * @param {m} - количество рёбер в графе
 * @param {*} edges - рёбра графа
 */
function calcaluteNumberOfIncidentEdges(n = 0, m = 0, edges = [], k) {
  let count = 0;

  let vertex1 = edges[k][0];
  let vertex2 = edges[k][1];

  for (let i = 0; i < m; i++) {
    if (
      i != k &&
      (edges[i][0] == vertex1 ||
        edges[i][0] == vertex2 ||
        edges[i][1] == vertex1 ||
        edges[i][1] == vertex2)
    ) {
      count++;
      console.log(i, edges[i]);
    }
  }

  return count;
}

const n = 5;
const m = 4;

const edges = [
  [1, 3],
  [1, 2],
  [2, 3],
  [2, 5],
];

const k = 2;
console.log(calcaluteNumberOfIncidentEdges(n, m, edges, k - 1));
