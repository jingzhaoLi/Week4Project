let express=require('express');
let app=express();
let db=[]

app.get('/',function(req,res){
    res.send("welcome to week4");
})
app.get('/addNumber/:numToBeAdded',function(req,res){
    db.push(Number(req.params.numToBeAdded));
    console.log('db',db);
    console.log('number',req.params.numToBeAdded);
    res.send("number to be added"+req.params.numToBeAdded);
});
app.get('/getAll',function(req,res){
    let dbTotal= getTotal(db);
    console.log('sum'+dbTotal);
    console.log('db',db);
    console.log('number',req.params.numToBeAdded);
    res.send("sum is "+dbTotal);
})
app.get('/delNumber/:numToDel',function(req,res){
    console.log("before deletion",db);
    
    deleteNum(db,Number(req.params.numToDel))
    console.log('db',db);
    console.log('number',req.params.numToDel);
    res.send("number to be added"+req.params.numToDel);
});
app.listen(4000);

function getTotal(numArray) {
    let total=0;
    numArray.array.forEach(number => {
        total+=number
    });
    return total;
}

function deleteNum(numArray,number) {
    let index=numArray.indeOf(number)
    if (index > -1){
        numArray.splice(index,1);
    }
}
function printAll(numArray) {
    numArray.forEach(number=>{
        
    })
}