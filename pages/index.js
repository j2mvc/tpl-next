import React from 'react';
import Error from '../components/error';
import Link from 'next/link'
import api from '../api'
import PageUI from '../components/PageUI'
import HtmlHeader from "../components/HtmlHeader";

import '../assets/style.scss'

class Page extends React.Component {
    static async  getInitialProps({req}) {
        const res = await api.request.get({
            url: '/getCats',
            params:{
                moduleId:'201412290839325502'
            },
            cache:true
        });
        console.log('index=>res:',res);
        let props = {};
         // 返回数据
         if(res.code == 1){
             props.list =  res.data.list
         }else{
             props.error =  res.error
         }

        props.title = "首页"
        props.keywords = "关键词"
        props.description = "这里是描述"
        return props;
    }

    render() {
        if (this.props.error) {
            return <Error message={this.props.error.message} code={this.props.error.code} />;
        }

        return (<div>
                <HtmlHeader title={this.props.title} keywords={this.props.keywords} description={this.props.description}/>
                <PageUI.Navbar list={this.props.list}/>
                <div className='example'>Hello World!</div>
                <img src="/static/test.jpg" alt="my image" />
            </div>
        )
    }
}

export default Page;
