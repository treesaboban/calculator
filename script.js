// 1 dispaly no. in text box
function display(num)
{
     result.value+=num;
    //  console.log(num);
}
// 2 clear text box
function clearBox()
{
    result.value="";
}
// 3 evaluate
function evaluateExpression()
{
    exp=result.value//7+7
    output=eval(exp)//14//js method to evluate
    result.value=output
    // result.value=eval(result.value) // shorthand

}
// 4 remove last item from text box
function removeLastItem()
{
    currentExp=result.value
    result.value=currentExp.slice(0,-1) //start=0 and end=-1 --removing last 1 item 
}