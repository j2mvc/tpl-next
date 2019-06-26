import React from 'react';
import Error from 'next/error';
import Link from 'next/link'
import api from "../../../api/index";

function createMarkup(html) {
    return {__html: html?html:''};
}
class Page extends React.Component {

    static async  getInitialProps({query}) {

        const res = await api.request.get({
            url: '/getContentInfo',
            params:{
                id:query.id
            },
            cache:true
        });

        // 返回数据
        if(res.code == 1){
            const info = res.data.info;
            return {
                title:info.title,
                content: createMarkup(info.content)
            }
        }else{
            return {
                error: res.error ? res.error : {code: -1, message: '未获取到'}
            }
        }
    }
    render() {
        if (this.props.errorCode) {
            return <Error statusCode={this.props.errorCode} />;
        }

        return(
            <div>
                <div> 手机端</div>
                <div>{this.props.title}</div>
               <div dangerouslySetInnerHTML={this.props.content}/>
            </div>
            )

    }
}

export default Page;
