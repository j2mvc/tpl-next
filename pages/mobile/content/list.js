import React from 'react';
import Error from 'next/error';
import Link from "next/link";
import api from "../../../api/index";

class Page extends React.Component {

    static async  getInitialProps({query}) {
        const res = await api.request.get({
            url: '/getContentList',
            params:{
                catId:query.catId
            },
            cache:true
        });
        // 返回数据
        if(res.code == 1){
            return {
                list: res.data.list
            }
        }else{
            return {
                error: res.error ? res.error : {code: -1, message: '未获取到'}
            }
        }
    }

    render() {
        if (this.props.error) {
            return <Error statusCode={this.props.error.code} />;
        }
        const ua = <div>手机端 </div>
        const items = this.props.list.map((item)=>
            <li key={item.id}>
                <Link  as={`/c/i/${item.id}`} href={{ pathname: '/content/info', query: { id: item.id }}} passHref>
                    <a>{item.title}</a>
                </Link>
            </li>)

        return <div>
            <div>{ua}</div>
            <div>{items}</div>
        </div>
    }
}

export default Page;
