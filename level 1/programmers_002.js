function solution(s, n) {
    var answer = '';
    for (let i = 0; i < s.length; i++) {
        let temp = s.charCodeAt(i)
        if (temp === 32) {
            answer += ' '
            continue
        }
        if ((temp <= 90 && temp + n > 90) || (temp <= 122 && temp + n > 122)) {
            answer += String.fromCharCode(temp + n - 26)
        }
        else {
            answer += String.fromCharCode(temp + n)
        }
    }
    return answer;
}
