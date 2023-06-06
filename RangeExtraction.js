function solution(list) {
    var newList = ''
    for (let i = 0; i < list.length; i++) {
        if (list[i] + 1 + ' == ' + parseInt(list[i + 1])) {
            let j = i;
                while ((list[j] + 1) == parseInt(list[j + 1])) {j++}
            if ((j - i) >= 2) {
                newList += (list[i] + '-' + parseInt(list[j]) + ',')
                i = j
            }else newList += (list[i] + ',') 
        }
    }
    return newList.slice(0, -1)
}

