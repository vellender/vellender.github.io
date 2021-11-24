function renderModule(m){
    // Renders module
    return "<p id='"+m.code+"p' class='"+m.category+"'><input type='checkbox' name='"+m.code+"' id='"+m.code+"' label='"+m.code+"'><label for='"+m.code+"'>"+m.code + " " +m.title+"</label></p>"
}

function semesterAppend(divName,level,semester){
    // Appends to 'divName' all modules of level 'level' in semester 'semester'
    var title;
    switch(semester){//generate titles
        case 0: title='Across Both Semesters'; break;
        case 1: title='Semester One'; break;
        case 2: title='Semester Two'; break;
    }
    $("#"+divName).append("<h2>"+title+"</h2>");
    for(i = 0; i < modules.length; i++){
        if (modules[i].level==level & modules[i].semester==semester){
            $("#"+divName).append(renderModule(modules[i]));
        }
    }
}

function satisfied(modCode){
    // Boolean, checks whether pre-reqs for a module are satisfied
    for(i=0;i<modules.length;i++){//get preReq info for specified module
      if(modules[i]["code"]==modCode){
        var type=modules[i]["preReqType"]
        var pr=modules[i]["preReq"]
      }
    }
    if (type=="single"||type=="all"){
        var out=true;
        for(i=0;i<modules.length;i++){if(pr.includes(modules[i]["code"]) & modules[i]["checked"]==false){out=false;}}//set out to false if any prereq isn't checked (ticked)
        return out;
    }
    else if (type=="either"){
        var out=0;
        for(i=0;i<modules.length;i++){if(pr.includes(modules[i]["code"]) & modules[i]["checked"]==true){out+=1;}}//if any modules needed are checked, out>0
        if(out>0){return true;} else {return false;}
    }
}

function creditsChecked(level,sem){
    var out=0;
    for (i = 0; i < modules.length; i++){
        if (modules[i].level==level && modules[i].checked && modules[i].semester==sem){out+=modules[i].credits;}
        if (modules[i].level==level && modules[i].checked && modules[i].semester==0){out+=10;}
    }
    return out
}
 

function updateTotals(){
    for(k=1;k<4;k++){for(l=1;l<3;l++){$("#"+k+l).text(creditsChecked(k,l))}}
    for(m=1;m<4;m++){$("#credits"+m).text(creditsChecked(m,1)+creditsChecked(m,2))}
}

// Initialise modules
semesterAppend('c1',1,1)//y1 sem 1
semesterAppend('c1',1,2)//y1 sem 2
semesterAppend('c2',2,0)//y2 sem 0 (both, i.e. thin)
semesterAppend('c2',2,1)//y2 sem 1
semesterAppend('c2',2,2)//y2 sem 2
semesterAppend('c3',3,1)//y3 sem 1
semesterAppend('c3',3,2)//y3 sem 2
//$('#c3 p,#c2 p').addClass("strike"); //strike through 
for(i=0;i<modules.length;i++){
    modules[i]["available"]=true;//Add "available" property
    modules[i]["checked"]=false;//Add "clicked" property
    if (modules[i]["preReq"].length>0){modules[i]["available"]=false;}//if no prereqs, make available from start
}
for(i=0;i<modules.length;i++){
    if (!modules[i]["available"]){$("#"+modules[i]["code"]+"p").addClass("strike");}
}
updateTotals();

// Updating
$("input").click(function(){
   // Capture ID of what's been clicked
   var clicked=$(this).attr('id');
   // Log and set ticked attribute for clicked module
   if ($("#"+clicked).prop('checked')){
       console.log(clicked+" checked");//log checked
       for(i=0;i<modules.length;i++){//set checked to true for module
           if(modules[i]["code"]==clicked){modules[i]["checked"]=true;}
       }
    }
   else {console.log(clicked+" unchecked");//log unchecked
   for(i=0;i<modules.length;i++){//set checked to false for module
        if(modules[i]["code"]==clicked){modules[i]["checked"]=false;}
    }}
    // update every module accordingly
    for(j=0;j<modules.length;j++){
        if(satisfied(modules[j]["code"])){
            $("#"+modules[j]["code"]+"p").removeClass("strike");
        }
        else {
            $("#"+modules[j]["code"]+"p").addClass("strike");
        }
        updateTotals();
    }
});

