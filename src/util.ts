 
export function tosub(s)
{
    var result = ''
    var str = s.toString()
    for (var i = 0; i < str.length-1; i++)
        result += String.fromCharCode(8320 + Number(str.charAt(i)))
    return result
}
