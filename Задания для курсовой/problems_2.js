/* Задание №1
Даны две строки: s1 и s2 с одинаковым размером, проверьте,
может ли некоторая перестановка строки s1 “победить” некоторую
перестановку строки s2 или наоборот.
Строка x может “победить” строку y (обе имеют размер n),если x[i]>=y[i]
(в алфавитном порядке) для всех i от 0 до n-1.
 */

const defeatStrings = (s1, s2) => {
    s1 = s1.split("").sort();
    s2 = s2.split("").sort();
    let bool1 = true, bool2 = true;

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] > s2[i]) bool1 = false;
        if (s1[i] < s2[i]) bool2 = false;
    }

    return bool1 || bool2;
}

console.log(defeatStrings('abc', 'xya'))
console.log(defeatStrings('abe', 'acd'))

/* Задание №2
Дана строка s, вернуть самую длинную полиндромную подстроку в s */

var longestPalindrome = function (s) {
    for (let j = s.length - 1; j >= 0; j--) {
        let i = 0,
            k = j;
        while (k < s.length) {
            let substr = s.substring(i, k + 1);
            if (isPalindrome(substr)) return substr;
            i++, k++;
        }
    }
    return "";
};

function isPalindrome(str) {
    let l = 0,
        r = str.length - 1;
    while (l < r) {
        if (str[l] !== str[r]) return false;
        l++, r--;
    }
    return true;
}

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));

/* Задание №3
Вернуть количество отдельных непустых подстрок текста, которые могут
быть записаны как конкатенация некоторой строки с самой собой (т.е. она
может быть записана, как a + a, где a - некоторая строка).
 */

var concatSubstr = function(text) {
    const string = new Set();
    for (let i = 0; i < text.length; i++) {
        for (let j = i + 1; j < text.length; j++) {
            const left = text.substring(i,j);
			const right = text.substring(j, j + j - i);
            if (left === right) string.add(left);
        }
    }
    return string.size;
};

console.log(concatSubstr("abcabcabc"));