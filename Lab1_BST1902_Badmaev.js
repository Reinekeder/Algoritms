/* Лабораторная работа №1
	 Выполнил студент группы БСТ1902 Бадмаев А.Д.
	 Задание №1
	 Записать код, выводящий "Hello, World!" */
	 console.log("Hello,World!");

	 /* Задание 2
	 Написать генератор случайных матриц(многомерных), который принимает опциональные параметры m, n, min_limit, max_limit,
	 где m и n указывают размер матрицы, а min_lim и max_lim - минимальное и максимальное значение для генерируемого числа .
	 По умолчанию при отсутствии параметров принимать следующие значения:
	 m = 50
	 n = 50
	 min_limit = -250
	 max_limit = 1000 + (номер своего варианта)*/


function matrixArray(m,n,min_limit,max_limit)
{
		var arr = new Array();
		for(var i=0; i<m; i++)
		{
			arr[i] = new Array();
			for(var j=0; j<n; j++)
			{
				arr[i][j] = Math.floor(Math.random() * (max_limit - min_limit + 1)) + min_limit;
			}
		}
		return arr;
}


function SelectionSort(arr)
{
		var n = arr.length;
		for (var i = 0; i < n-1; i++)
		 { var min = i;
			 for (var j = i+1; j < n; j++)
				{ if (arr[j] < arr[min]) min = j; } 
			 var t = arr[min]; arr[min] = arr[i]; arr[i] = t;
		 }                    
		return arr;
}

const InsertionSort = arr => {
    for (let i = 1, l = arr.length; i < l; i++) {
        const current = arr[i];
        let j = i;
        while (j > 0 && arr[j - 1] > current) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = current;
    }
    return arr;
}

// function InsertionSort(arr)       
// {                               
// 		var n = arr.length;
// 		for (var i = 0; i < n; i++)
// 		 { var v = arr[ i ], j = i-1;
// 			 while (j >= 0 && arr[j] > v)
// 				{ arr[j+1] = arr[j]; j--; }
// 			 arr[j+1] = v;
// 		 }                    
// 		return arr;
// }


function BubbleSort(arr)       
{                            
		var n = arr.length;
		for (var i = 0; i < n-1; i++)
		 { for (var j = 0; j < n-1-i; j++)
				{ if (arr[j+1] < arr[j])
					 { var t = arr[j+1]; arr[j+1] = arr[j]; arr[j] = t; }
				}
		 }                     
		return arr;    
}


const ShellSort = arr => {
    const l = arr.length;
    let gap = Math.floor(l / 2);
    while (gap >= 1) {
        for (let i = gap; i < l; i++) {
            const current = arr[i];
            let j = i;
            while (j > 0 && arr[j - gap] > current) {
                arr[j] = arr[j - gap];
                j -= gap;
            }
            arr[j] = current;
        }
        gap = Math.floor(gap / 2);
    }
    return arr;
}

// function ShellSort(arr)
// {
// 		var n = arr.length, i = Math.floor(n/2);
// 		while (i > 0)
// 		 { for (var j = 0; j < n; j++)
// 				{ var k = j, t = arr[j];
// 					while (k >= i && arr[k-i] > t)
// 					 { arr[k] = arr[k-i]; k -= i; }
// 					arr[k] = t;
// 				}
// 			i = (i==2) ? 1 : Math.floor(i*5/11);
// 		 }
// 		return arr;
// }


function swap(arr, firstIndex, secondIndex){
    const temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}


function partition(arr, left, right) {
    var pivot   = arr[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
}


function QuickSort(arr, left, right) {
    var index;
    if (arr.length > 1) {
        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? arr.length - 1 : right;
        index = partition(arr, left, right);
        if (left < index - 1) {
            QuickSort(arr, left, index - 1);
        }
        if (index < right) {
            QuickSort(arr, index, right);
        }
    }
    return arr;
}

// function QuickSort(arr)
// {
// 		if (arr.length == 0) return [];
// 		var a = [], b = [], p = arr[0];
// 		for (var i = 1; i < arr.length; i++)
// 		 { if (arr[ i ] < p) a[a.length] = arr[ i ];
// 			 else b[b.length] = arr[ i ];
// 		 }
// 		return QuickSort(a).concat( p,QuickSort(b) );
// }


function HeapSort(arr) 
{
		if (arr.length == 0) return [];
		var n = arr.length, i = Math.floor(n/2), j, k, t;
		while (true)
		{ if (i > 0) t = arr[--i];
			else { n--;
						 if (n == 0) return arr;
						 t = arr[n];  arr[n] = arr[0];
					 }        
			j = i;  k = j*2+1;
			while (k < n)
			 { if (k+1 < n && arr[k+1] > arr[k]) k++;
				 if (arr[k] > t)
					{ arr[j] = arr[k];  j = k;  k = j*2+1; }
				 else break;
			 }
			arr[j] = t; 
		}
}


function IncludeSort(arr){
	return arr.sort((a, b) => a - b)
}


const matrix = matrixArray(1000, 1000, -250, 1001)

const start = new Date().getTime();


const checkSortTime = (matrixArray, sortFunc, nameSortFunc) => {
	// const start = new Date().getTime();
	console.time(nameSortFunc);
	for (const row of matrixArray) {
		sortFunc(row);
	}
	console.timeEnd(nameSortFunc);
	// const end = new Date().getTime();
	// console.log(`${nameSortFunc}: ${end - start}ms`);
}

checkSortTime(matrixArray(1000, 1000, -250, 1001), SelectionSort, 'selectionsort')
checkSortTime(matrixArray(1000, 1000, -250, 1001), 	InsertionSort, 'insertionsort')
checkSortTime(matrixArray(1000, 1000, -250, 1001), 	BubbleSort, 'bubblesort')
checkSortTime(matrixArray(1000, 1000, -250, 1001), 	ShellSort, 'shellsort')
checkSortTime(matrixArray(1000, 1000, -250, 1001), 	QuickSort, 'quicksort')
checkSortTime(matrixArray(1000, 1000, -250, 1001), 	HeapSort, 'heap sort')
checkSortTime(matrixArray(1000, 1000, -250, 1001), 	IncludeSort, 'includesort')



// for (const row of matrix) {
// 	SelectionSort(row);
// }
// const endselect = new Date().getTime();
// console.log(`selectionsort: ${endselect - start}ms`);




// for (const row of matrix) {
// 	InsertionSort(row);
// }
// const endinsert = new Date().getTime();
// console.log(`insertionsort: ${endinsert - start}ms`);

// for (const row of matrix) {
// 	BubbleSort(row);
// }
// const endbubble = new Date().getTime();
// console.log(`bubblesort: ${endbubble - start}ms`);

// for (const row of matrix) {
// 	ShellSort(row);
// }
// const endshell = new Date().getTime();
// console.log(`shellsort: ${endshell - start}ms`);
// for (const row of matrix) {
// 	QuickSort(row);
// }
// const endquick = new Date().getTime();
// console.log(`quicksort: ${endquick - start}ms`);

// for (const row of matrix) {
// 	HeapSort(row);
// }
// const endheap = new Date().getTime();
// console.log(`heap sort: ${endheap - start}ms`);

// for (const row of matrix) {
// 	IncludeSort(row);
// }
// const endinclude = new Date().getTime();
// console.log(`includesort: ${endinclude - start}ms`);