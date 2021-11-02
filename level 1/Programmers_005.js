function solution(d, budget) {
    let answer = 0, temp = 0
    d.sort((a,b) => a - b);
    for (let i = 0; i < d.length; i++) {
        answer++
        temp += d[i]
        if (temp > budget) 
            answer--
        
    }
    return answer
}
