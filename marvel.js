var idp=1;
var long=0;

    const url = "https://casas36.github.io/api/ejem_json_apimervel.json";

    function buscar(){
    
        fetch(url)
        .then(function(response){
            return response.json();    
        })
    
        .then(function(data){
            console.log(data.figures);
            long=data.figures.length;
            console.log("lenght:"+ long);
            var res= data.figures.filter(item=>item.id===idp);
            console.log(res);
            var imagen=document.getElementById('figure');
            imagen.src=res[0].figure;
            var p1=document.getElementById('name');
            p1.innerHTML="<b>Nombre: </b>"+res[0].name;
            var p2=document.getElementById('releaseyear');
            p2.innerHTML="<b>Tipo: </b>"+res[0].releaseyear;
            var p3=document.getElementById('des');
            p3.innerHTML="<b>Descripción: </b>"+res[0].des;
        })

        .catch(function(error){
            console.log(error);           
        });

        if (idp >= long){
            idp=1;
        }else{
            idp++;
        }
        
    } 