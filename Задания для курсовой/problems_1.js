// Генерирование массива
function genArray(m, min_limit, max_limit) {
	var arr = new Array();
	for (var i = 0; i < m; i++) {
		arr[i] = Math.floor(Math.random() * (max_limit - min_limit + 1)) + min_limit;
	}
	return arr;
}

/* Задача 1. «Треугольник с максимальным периметром»
Массив A состоит из целых положительных чисел ­ длин отрезков. Составьте из трех отрезков такой треугольник, чтобы его периметр был максимально возможным. Если невозможно
составить треугольник с положительной площадью ­ функция возвращает 0.*/

function maxP(arr) {
	arr.sort((a, b) => b - a);
	console.log(arr)
	for (let i = 0; i < arr.length - 2; i++) {
		let maxPerim = 0;
		let p = (arr[i] + arr[i + 1] + arr[i + 2]) / 2;
		let S = Math.sqrt(p * (p - arr[i]) * (p - arr[i + 1]) * (p - arr[i + 2]));
		if (S > 0)
			maxPerim = arr[i] + arr[i + 1] + arr[i + 2];
		if (maxPerim) {
			console.log(`Максимальный периметр: ${maxPerim}`);
			return;
		}
	}
	console.log(`Треугольника нет`);
}

const arr = genArray(5, 1, 10);
console.log(arr)
maxP(arr)

/*Задача 2. «Максимальное число»
Дан массив неотрицательных целых чисел nums. Расположите их в таком порядке, чтобы
вместе они образовали максимально возможное число.
Замечание: Результат может быть очень большим числом, поэтому представьте его как
string, а не integer.
 */

function getLargest(arr) {
	return arr
	.map(String)
	.sort((a, b) => (b + a) - (a + b))
	.join('');
}
console.log(arr);
console.log(getLargest(arr));

// Генерирование матрицы

function genMatrix(m, n, min_limit, max_limit) {
	var M = new Array();
	for (var i = 0; i < m; i++) {
		M[i] = new Array();
		for (var j = 0; j < n; j++) {
			M[i][j] = Math.floor(Math.random() * (max_limit - min_limit + 1)) + min_limit;
		}
	}
	return M;
}

const M = genMatrix(5, 5, 1, 10);

/* Задача 3. «Сортировка диагоналей в матрице»
Дана матрица mat размером m * n, значения ­ целочисленные.
Напишите функцию, сортирующую каждую диагональ матрицы по возрастанию и возвращающую получившуюся матрицу.*/

function diagonalSort(arr) {
	const columnLength = arr.length;
	const rowLength = arr[0].length;

	let countDiag = 0;

	while (++countDiag !== columnLength) {
		for (let i = 0; i < columnLength; i++) {
			for (let j = 0; j < rowLength; j++) {
				if (i + 1 < columnLength && j + 1 < rowLength && arr[i + 1][j + 1] < arr[i][j]) {
					let swap = arr[i + 1][j + 1];
					arr[i + 1][j + 1] = arr[i][j];
					arr[i][j] = swap;
				}
			}
		}
	}
	console.log(M)
}
console.log(M)
diagonalSort(M)
