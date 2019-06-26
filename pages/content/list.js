import React from 'react';
import Error from 'next/error';
import Link from "next/link";
import api from "../../api";
import "../../assets/style.scss"

import PageUI from '../../components/PageUI'
import HtmlHeader from "../../components/HtmlHeader";
import request from "../../api/request";

import Router from 'next/router'

const loadData = async (query)=>{
    let props = {};

    const res1 =  await api.request.get({
        url: '/getCats',
        params:{
            moduleId:'201412290839325502'
        },
        cache:true
    });

    const res2 = await api.request.get({
        url: '/getContentList',
        params:{
            catId:query.catId
        },
        cache:true
    });

    if(res1.code == 1)
        props.catList = res1.data.list;
    else{
        props.catError = res1.error;
    }
    if(res2.code == 1){
        props.contentList = res2.data.list;
    }
    else{
        props.contentError = res2.error;
    }

    props.title = props.catList[0].name
    props.keywords = "文章列表关键词"
    props.description = "这里是文章列表描述"
    console.log('list getInitialProps ended....')
    return props;
}

class Page  extends React.Component {

    static async  getInitialProps({query}) {
        console.log('list getInitialProps....')
        return loadData(query);
    }
    componentDidMount(){
        console.log('start componentDidMount....')
    }
    componentDidUpdate(){
        console.log('start componentDidUpdate....')
    }

    render() {
        console.log('start render....')
        if (this.props.error) {
            return <Error statusCode={this.props.error.code} />;
        }
        const ua = <div className='example'>Hello World!</div>
        const items = this.props.contentList.map((item)=>
            <li key={item.id}>
            <Link  as={`/c/i/${item.id}`} href={{ pathname: '/content/info', query: { id: item.id }}} passHref>
                 <a>{item.title}</a>
                 </Link>
            </li>)

        return <div>
            <HtmlHeader title={this.props.title} keywords={this.props.keywords} description={this.props.description}/>
            <PageUI.Navbar list={this.props.catList}/>
            <div>{ua}</div>
            <div>{items}</div>
        </div>
    }
}

export default Page;
