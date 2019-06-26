import React from 'react';
import Error from 'next/error';
import Link from 'next/link'
import Head from 'next/head'

import api from "../../api";

const backgroundColor = '#eee'

function createMarkup(html) {
    return {__html: html?html:''};
}
class Page extends React.Component {

    static async getInitialProps({query}) {

        let props = {};
        const catListRes =  await api.modules.content.cat.getList();
        const contentInfoRes = await api.modules.content.content.getInfo(query.id)

        if(catListRes.code == 1)
            props.catList = catListRes.data.list;
        else{
            props.catError = catListRes.error;
        }
        if(contentInfoRes.code == 1){
            let info = contentInfoRes.data.info
            props.title = info.title
            props.keywords = info.keywords
            props.content = createMarkup(info.content)
        }
        else{
            props.contentError = contentInfoRes.error;
        }

        props.description = "这里是文章描述"

        return props;
    }

    render() {
        if (this.props.error) {
            return <Error statusCode={this.props.error} />;
        }
        const header =(<Head>
            <title>{this.props.title}</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>)

        const doc =
        <div>
            {header}
            <div className='hello'> PC端 </div>
            <h1>{this.props.title}</h1>
            <div dangerouslySetInnerHTML={this.props.content}/>

            <style jsx>{`
      $color: red;

      .hello {
        background-color: ${backgroundColor};
        padding: 100px;
        text-align: center;
        transition: 100ms ease-in background;
        &:hover {
          color: $color;
        }

        @media only screen and (max-width: 480px) {
          font-size: 20px;
        }
      }
    `}</style>
        </div>

        return <div> {doc}</div>
    }
}

export default Page;
