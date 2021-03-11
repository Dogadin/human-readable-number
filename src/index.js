module.exports = function toReadable (number) {
    const n = number.toString().split('')
    const ind = n.length-1
    let str = ''
    let tmp = 0
    if(ind==0){
        if (+n[0]==0){
            str = 'zero'
        } else {
            str = toStringOne(+n[0])
        }

    } else if (ind>=1){
        tmp = +(n[ind-1]+n[ind])
        if(tmp<10){
            str = toStringOne(tmp)
        }else if(tmp<20){
            str = toStringTenToOne(tmp)
        }else{
            str = toStringTen(+n[ind-1])
            if(+n[ind]>0){str+= ' ' + toStringOne(+n[ind])}
        }
    }

    if(ind>1){
        tmp = +n[ind-2]
        if(tmp>0){
            if (str!==''){
                str = `${toStringOne(tmp)} hundred ${str}` 
            } else {
                str = `${toStringOne(tmp)} hundred` 
            }
        }
        
    }

    if(ind>2){
        tmp = +n[ind-3]
        if(tmp>0){
            if (str!==''){
                str = `${toStringOne(tmp)} thousand ${str}` 
            } else {
                str = `${toStringOne(tmp)} thousand` 
            }
        }
    }
    return str
}

function toStringOne(n){
    let res =''
    switch(n){
        case 1: 
            res = 'one'
            break
        case 2: 
            res = 'two'
            break
        case 3: 
            res = 'three'
            break
        case 4: 
            res = 'four'
            break
        case 5: 
            res = 'five'
            break
        case 6: 
            res = 'six'
            break
        case 7: 
            res = 'seven'
            break
        case 8: 
            res = 'eight'
            break
        case 9: 
            res = 'nine'
            break
    }
    return res
}
function toStringTenToOne(n){
    let res =''
    switch(n){
        case 10: 
            res = 'ten'
            break
        case 11: 
            res = 'eleven'
            break
        case 12: 
            res = 'twelve'
            break
        case 13: 
            res = 'thirteen'
            break
        case 14: 
            res = 'fourteen'
            break
        case 15: 
            res = 'fifteen'
            break
        case 16: 
            res = 'sixteen'
            break
        case 17: 
            res = 'seventeen'
            break
        case 18: 
            res = 'eighteen'
            break
        case 19: 
            res = 'nineteen'
            break
    }
    return res
}
function toStringTen(n){
    let res =''
    switch(n){
        case 2: 
            res = 'twenty'
            break
        case 3: 
            res = 'thirty'
            break
        case 4: 
            res = 'forty'
            break
        case 5: 
            res = 'fifty'
            break
        case 6: 
            res = 'sixty'
            break
        case 7: 
            res = 'seventy'
            break
        case 8: 
            res = 'eighty'
            break
        case 9: 
            res = 'ninety'
            break
    }
    return res

}
