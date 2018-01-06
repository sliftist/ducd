 
export function tosub(s)
{
    var result = ''
    var str = s.toString().trim()
    for (var i = 0; i < str.length; i++)
        result += String.fromCharCode(8320 + Number(str.charAt(i)))
    return result
}

export function clone(o) {
    return JSON.parse(JSON.stringify(o))
}