
function clr()
{
    document.getElementById("content").value=" ";
    
}
function display(value)
{
    document.getElementById("content").value+=value;
}
function equal()
{
    var content=document.getElementById("content").value;
    var res=eval(content);
    document.getElementById("content").value=res;
}