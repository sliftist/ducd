export class HTML
{
    public static parse<T extends HTMLElement>(htmlstr: string) : () => T
    {
        return function() : T
        {
            var template = document.createElement('template')
            template.innerHTML = htmlstr
            return <T>template.content.firstElementChild
        }
    }

    //public static stringify() : (HTMLElement) => string
    //public static imageify() : (HTMLElement) => {} //Image
}





