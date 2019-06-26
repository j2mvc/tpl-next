import request from "../../request";

const getList =  ()=>{
    return request.get({
        url: '/getCats',
        params:{
            moduleId:'201412290839325502'
        },
        cache:true
    });
}

export default {
    getList
}
