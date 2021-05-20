/* Дан массив отрезков intervals, в котором intervals[i] = [starti, endi], некоторые
отрезки могут пересекаться. Напишите функцию, которая объединяет все пересекающиеся отрезки в один и возвращает новый массив непересекающихся отрезков.
*/

var merge = function(intervals) {
    if (intervals.length <= 1) return intervals;
    intervals.sort((a, b) => a[0] - b[0])
    let res = [];
    let currentInterval = intervals[0];
    res.push(currentInterval);
    
    for (let interval of intervals) {
        let currentIntervalEnd = currentInterval[1];
        let nextIntervalBeg = interval[0];
        let nextIntervalEnd = interval[1];
        if (currentIntervalEnd >= nextIntervalBeg) {
            currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd);
        } else {
            currentInterval = interval;
            res.push(currentInterval)
        }
    }
   console.log(res);
};

merge([[8, 10], [1, 3], [15, 18], [2, 6]])
merge([[4, 5], [1, 4]])