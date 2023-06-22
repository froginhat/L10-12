    
    function f()
    {
    var x=prompt("Ввеедите x:",1); 
    if (x!=null && x!="") 
    { 
        var f =(5*x-Math.sqrt(x+10))/Math.sin(x)
        return document.body.append('Функция равна: '+Math.floor(f)); 
    } 
    }

    