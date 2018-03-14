var CompositesList = []
var ApplicationModelVar; 
$("#nextVal").click(function()
{
    // document.getElementById("elementwrapper").innerHTML="<br> <br>";
    var viewscount= parseInt(document.getElementById("viewscount").value);
    var reportscount =  parseInt(document.getElementById("reportscount").value);

    if(!viewscount>0 || !reportscount>0)
    {
        alert("error in input"); 
        return;
    }
//         $('#elementwrapper').children('input').each(function () {
//     alert(this.value); // "this" is the current element in the loop
// });
$(".viewsarea").append("<h5> insert views data</h5>")
for (var i =0; i<viewscount; i++)
{
$( ".viewsarea" ).append( " <input id='screens' type='number' min='1' class='form-control copier' placeholder='Number Of Screens'>" );
$( ".viewsarea" ).append( " <input id='servers' type='number' min='1' class='form-control copier' placeholder='Number Of Servers'>" );
$( ".viewsarea" ).append( " <input id='clients' type='number' min='1' class='form-control copier' placeholder='Number Of Clients'>" );
$(".viewsarea").append("<br>")
}  
$(".viewsarea").append("<br>")

$(".reportsarea").append("<h5> insert reports data</h5>")

for (var i =0; i<reportscount; i++)
{
$( ".reportsarea" ).append( " <input id='sections' type='number' min='1' class='form-control copier' placeholder='Number Of Sections'>" );
$( ".reportsarea" ).append( " <input id='servers' type='number' min='1' class='form-control copier' placeholder='Number Of Servers'>" );
$( ".reportsarea" ).append( " <input id='clients' type='number' min='1' class='form-control copier' placeholder='Number Of Clients'>" );
$(".reportsarea").append("<br>")
}
document.getElementById("nextVal").remove(); 
$("#nextVal").fadeOut(function()
{

});

$( ".dataarea" ).append( " <br><br> <h5> Other Data</h5>  <input id='devtools' type='number' min='1' class='form-control copier' placeholder='Productivity'>" );
$( ".dataarea" ).append( " <input id='CASE' type='number' min='1' class='form-control copier' placeholder='CASE'>" );
$( ".dataarea" ).append( " <input id='reuse' type='number' min='1' class='form-control copier' placeholder='Reuse Percentage'> <br>" );

$('.reportsarea').append("<button onclick='AppModel()'  id='nextValtwo' type='button'  class='btn btn-primary btn-block btn-md'>Next Step</button> ")



});

function AppModel()
{
    var count =0; 
    var tempList = []; 
    var checkforvalidation; 
            $('.viewsarea').children('input').each(function () {
              
                if (!parseInt(this.value)>0)
                {
                    checkforvalidation=false; 
                }
                tempList.push(parseInt( this.value));
});
for (var i =0; i<tempList.length; i+=3)
{
    CompositesList.push(new AppComposite(tempList[i] , tempList[i+1] , tempList[i+2] , 1)); 
}



var tempList2 = []; 
$('.reportsarea').children('input').each(function () {
              
    if (!parseInt(this.value)>0)
    {
        checkforvalidation=false; 
    }
    tempList2.push(parseInt( this.value));
});
for (var i =0; i<tempList2.length; i+=3)
{
    CompositesList.push(new AppComposite(tempList2[i] , tempList2[i+1] , tempList2[i+2] , 2)); 
}

if (checkforvalidation==false)
{
    alert("error in inputs"); 
    CompositesList = [];
    return;
}
 $(".reportsarea").fadeOut("slow");
 $(".viewsarea").fadeOut("slow");
 $(".dataarea").fadeOut("slow");
 
// $(".viewsarea").empty(); 
//sd
console.log("sd"); 

var finalList = []; 
$('.dataarea').children('input').each(function () {
              
    finalList.push(parseInt(this.value));
});
ApplicationModelVar = new ApplicationModel(CompositesList , finalList[0] , finalList[1] , finalList[2]); 
ApplicationModelVar.Calculation(); 
console.log(ApplicationModelVar); 
}