let express=require('express');
let router=express.Router();
let db=[];

router.get('/',function(req,res){
    res.send("MainPage of warehouse");
})
router.get('/newItem/:TV/:quantity/:price',function(req,res){
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
router.get('/listALLItems',function (req,res) {
 
    let data=generateList(db);
    let description="id"+"&emsp;"+"name"+"&emsp;"+"quantity"+"&emsp;"+"price"+"&emsp;"+"cost"+"</br>";
    res.send(description+data);
    console.log(db);
})
router.get('/deleteItem/:id',function(req,res){
    let flag;
    flag=deleteItem(db,req.params.id);
    if (flag===true){
        res.send("delete successfully");
    }
    else{
        res.send("ID is not exist")
    }
})
router.get('/totalValue',function (req,res) {
    let sum=warehouseValue(db);
    res.send("The sum of warehouse Value is "+sum);
})

function generateList(dbArray) {
    let i=0;
    var data="";
    var store="";
    for (i=0;i<dbArray.length;i++){
        let cost=dbArray[i].quantity * dbArray[i].price;
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

module.exports = router;