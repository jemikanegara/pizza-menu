/*
0: input#pizza1
1: input#pizza2
2: input#pizza3
3: input#small
4: input#medium
5: input#large
6: input#avocado.onedollar
7: input#broccoli.onedollar
8: input#onions.onedollar
9: input#zucchini.onedollar
10: input#lobster.twodollar
11: input#oyster.twodollar
12: input#salmon.twodollar
13: input#tuna.twodollar
14: input#bacon.threedollar
15: input#duck.threedollar
16: input#ham.threedollar
17: input#sausage.threedollar
*/

var dataInput = document.querySelectorAll("input");	
var dataOutput = document.querySelector(".price");

var pizza = document.querySelectorAll("input[name='pizza']");
var size = document.querySelectorAll("input[name='size']");
var onedollar = document.querySelectorAll("input[class='onedollar']");
var twodollar = document.querySelectorAll("input[class='twodollar']");
var threedollar = document.querySelectorAll("input[class='threedollar']");

    dataInput.forEach(myFunction);

    function myFunction(value) {
    value.addEventListener("click", newFunction); 
    };

    function newFunction (){
        var price = pizzaCalculation() + sizeCalculation() + toppingOne() + toppingTwo() + toppingThree();
        dataOutput.innerHTML = price;
        topDisable();
        //console.log(pizzaCalculation());
        console.log(toppingOne());
    };

    var toppingPrice = 0;
    var i;

        function pizzaCalculation () {
            if (pizza[0].checked){
                return 8;
            } else
            if (pizza[1].checked){
                return 10;
            } else	
            if (pizza[2].checked){
                return 12;
            } else {
                alert ('Please Choose Pizza Type');
                return 0;
            }				
        };

        function sizeCalculation(){
            if (size[0].checked){
                return -1;
            } else

            if (size[1].checked){
                return 0;
            } else
            
            if (size[2].checked){
                return 2;
            } else {
                return 0;
            }
        };

// Topping Disable
            // onedollar disable : lobster, oyster, salmon, bacon, duck, sausage 
            // twodollar disable : avocado, tuna, duck, sausage
            // threedollar disable : avocado, lobster, oyster, salmon

        function topDisable () {
            // onedollar disable : lobster, oyster, salmon, bacon, duck, sausage 
            // twodollar disable :  tuna, duck, sausage
            // threedollar disable :  lobster, oyster, salmon 

            /*
            10: input#lobster.twodollar
            11: input#oyster.twodollar
            12: input#salmon.twodollar
            13: input#tuna.twodollar
            14: input#bacon.threedollar
            15: input#duck.threedollar
            16: input#ham.threedollar
            17: input#sausage.threedollar
            */
            // Avocado
            if (onedollar[0]) {
                if (pizza[1].checked || pizza[2].checked){
                    onedollar[0].disabled = true;
                } else {
                    onedollar[0].disabled = false;
                }
            }
            // Lobster
            if (twodollar[0]) {
                if (pizza[0].checked || pizza[2].checked){
                    twodollar[0].disabled = true;
                } else {
                    twodollar[0].disabled = false;
                }
            }
            // Oyster
            if (twodollar[1]) {
                if (pizza[0].checked || pizza[2].checked){
                    twodollar[1].disabled = true;
                } else {
                    twodollar[1].disabled = false;
                }
            }
            // Salmon
            if (twodollar[2]) {
                if (pizza[0].checked || pizza[2].checked){
                    twodollar[2].disabled = true;
                } else {
                    twodollar[2].disabled = false;
                }
            }
            // Tuna
            if (twodollar[3]) {
                if (pizza[1].checked){
                    twodollar[3].disabled = true;
                } else {
                    twodollar[3].disabled = false;
                }
            }
            // Bacon
            if (threedollar[0]) {
                if (pizza[0].checked){
                    threedollar[0].disabled = true;
                } else {
                    threedollar[0].disabled = false;
                }
            }
            // Duck
            if (threedollar[1]) {
                if (pizza[0].checked || pizza[1].checked){
                    threedollar[1].disabled = true;
                } else {
                    threedollar[1].disabled = false;
                }
            }
            // Sausage
            if (threedollar[3]) {
                if (pizza[0].checked || pizza[1].checked){
                    threedollar[3].disabled = true;
                } else {
                    threedollar[3].disabled = false;
                }
            }				
        }


// One Dollar Checkbox
        function toppingOne(){
            var total = avocadoValue() + broccoliValue() + onionsValue() + zucchiniValue();
            return total;
        };

            function avocadoValue (){
                if (onedollar[0].checked){
                    return 1;
                } else {
                    return 0;
                }
            };

            function broccoliValue(){
                if (onedollar[1].checked){
                    return 1;
                } else {
                    return 0;
                }
            }

            function onionsValue(){
                if (onedollar[2].checked){
                    return 1;
                } else {
                    return 0;
                }
            }

            function zucchiniValue() {
                if (onedollar[3].checked){
                    return 1;
                } else {
                    return 0;
                }
            }

// Two Dollar Checkbox
        function toppingTwo(){
            var total = lobsterValue() + oysterValue() + salmonValue() + tunaValue();
            return total;
        };

            function lobsterValue (){
                if (twodollar[0].checked){
                    return 2;
                } else {
                    return 0;
                }
            };

            function oysterValue(){
                if (twodollar[1].checked){
                    return 2;
                } else {
                    return 0;
                }
            }

            function salmonValue(){
                if (twodollar[2].checked){
                    return 2;
                } else {
                    return 0;
                }
            }

            function tunaValue() {
                if (twodollar[3].checked){
                    return 2;
                } else {
                    return 0;
                }
            }

// Three Dollar Checkbox
        function toppingThree(){
            var total = baconValue() + duckValue() + hamValue() + sausageValue();
            return total;
        };

            function baconValue (){
                if (threedollar[0].checked){
                    return 3;
                } else {
                    return 0;
                }
            };

            function duckValue(){
                if (threedollar[1].checked){
                    return 3;
                } else {
                    return 0;
                }
            }

            function hamValue(){
                if (threedollar[2].checked){
                    return 3;
                } else {
                    return 0;
                }
            }

            function sausageValue() {
                if (threedollar[3].checked){
                    return 3;
                } else {
                    return 0;
                }
            }
