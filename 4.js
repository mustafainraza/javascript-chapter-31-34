var date= new Date();

var m=["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];

if(m[date.getDay()]=="Sat" || m[date.getDay()]=="Sun" )
{
    document.write("It is Funday !!!");
}
else
{
    document.write("No Funday !!!");
}