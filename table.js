<html> 
<head> 
<script language="JavaScript"> 
function f() 
    { 
    var td_cells=document.getElementById("tbl").cells; 
    for (var i=0; i<td_cells.length; i++) 
    alert(td_cells<i>.attributes("id").value); 
    } 
</script> 
</head> 
<body> 
<table border="1" width="200" height="200" id="tbl"> 
<tbody> 
    <tr> 
        <td id="id_1">1</td> 
        <td id="id_2">2</td> 
    </tr> 
    <tr> 
        <td id="id_3">3</td> 
        <td id="id_4">4</td> 
    </tr> 
</tbody> 
</table> 
<input type="button" value="cells" onclick="f()"> 
</body> 
</html>