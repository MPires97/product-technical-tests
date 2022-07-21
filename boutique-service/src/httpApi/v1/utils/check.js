export function checkInt(number){
    return (number == parseInt(number))
}

export function checkFloat(number){
    return (!isNaN(parseFloat(number)))
}
