var db=firebase.database();
var dbRef=db.ref('marks');
function updateData(roll,exam,sub,mark,grade){
    m=dbRef.child(roll).child(exam);
    var data={
        marks:mark,
        grades:grade
    }
    m.child(sub).update(data,function(error){
        if(error){
            alert("Couldn't enter data  "+error);
        }
        else{
            alert("Successfully inserted")
        }
    });
}