let express=require('express');
let app=express();
let db=[];

app.get('/',function(req,res){
    res.send("MainPage of warehouse");
})
app.get('/newItem/:TV/:quantity/:price',function(req,res){
    let items={
        id:Math.round(Math.random()*1000),
        name:req.params.TV,
        quantity:Number(req.params.quantity),
        price:Number(req.params.price)
    }
    db.push(items);
    console.log(db);
    res.send(db);
})
app.get('/listALLItems',function (req,res) {
    // db.forEach(element => {
    //     let cost=element.quantity * element.price;
    //     db.costs=cost;
    // });
    let data=generateList(db);
    let description="id"+"&emsp;"+"name"+"&emsp;"+"quantity"+"&emsp;"+"price"+"&emsp;"+"cost"+"</br>";
    res.send(description+data);
    console.log(db);
})
app.get('/deleteItem/:id',function(req,res){
    let flag;
    flag=deleteItem(db,req.params.id);
    if (flag===true){
        res.send("delete successfully");
    }
    else{
        res.send("ID is not exist")
    }
})
app.get('/totalValue',function (req,res) {
    let sum=warehouseValue(db);
    res.send("The sum of warehouse Value is "+sum);
})
app.listen(8080);

function generateList(dbArray) {
    let i=0;
    var data="";
    var store="";
    for (i=0;i<dbArray.length;i++){
        let cost=dbArray[i].quantity *dbArray[i].price;
        dbArray[i].costs=cost;
        data+=dbArray[i].id+"&emsp;"+dbArray[i].name+"&emsp;"+"&emsp;"+dbArray[i].quantity+"&emsp;"+"&emsp;"+dbArray[i].price+"&emsp;"+"&emsp;"+dbArray[i].costs+"</br>"+"</br>";
    }
    store += data;
    return store;
}

function deleteItem(dbArray,ID){
    let i=0;
    let flag=false;
    for (i=0;i<dbArray.length;i++){
        if (dbArray[i].id==ID){
            dbArray.splice(i,1)
            flag=true;
        }
    }
    return flag;
}
function warehouseValue(dbArray) {
    let i;
    let sumWareHouseValue=0;
    for (i=0;i<dbArray.length;i++){
        let value=dbArray[i].quantity*dbArray[i].price;
        sumWareHouseValue+=value;
    }
    return sumWareHouseValue;
}