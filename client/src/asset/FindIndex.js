const findIndex =(arr,id)=>{
    var index=-1;
    if(arr){
        arr.forEach((item,stt)=>{
            if(item._id==id){
                index=stt;
            }
        })
    }
    return index;
}
export default findIndex;