function almostIncreasingSequence(sequence) {
    let cnt =0
    for(let i=1 ;i<sequence.length;i++){
        if( sequence[i-1]>=sequence[i])
            cnt++
        if(cnt===2)
            return false;
        if(sequence[i]<=sequence[i-2] && sequence[i+1]<=sequence[i-1]) 
            return false
    }
    return true
}


console.log(almostIncreasingSequence([1, 2, 3, 4, 3, 6]))

