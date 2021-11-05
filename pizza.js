function orderingPizza(orderNum,count=1){
    let str="Ваш заказ";
    let pizzas=[
        "пицца с грибами",
        "пицца с курицей и ананасом",
        "фирменная пицца"
    ];
    if(count=="")count=1;
    if(orderNum==""){
        str+=pizzas[0]+"-"+count+"шт";
        return str;
    }else if(isNaN(orderNum) || isNaN(count) || orderNum>pizzas.length-1){
        alert ("Ошибка")
        return;
    }else {
        str +=pizzas[orderNum]+ "-"+count+"шт";
        return str;
    }
}
const myOrder = orderingPizza(
    prompt("Номер пиццы"),
    prompt("сколько вы хотите?"));
console.log(myOrder);
