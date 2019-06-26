import request from "../../request";

const getList =  (catId)=>{
    return request.get({
        url: '/getContentList',
        params:{
            catId:catId
        },
        cache:true
    });
}
const getInfo =  (id)=>{
    return request.get({
        url: '/getContentInfo',
        params:{
            id:id
        },
        cache:true
    });
}
export default {
    getList,
    getInfo
}
