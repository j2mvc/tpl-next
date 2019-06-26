import React from 'react';
import Error from 'next/error';
import Link from 'next/link'
import api from '../../api'

/**
 * 导航条目
 * @param props
 * @returns {*}
 * @constructor
 */
function NavbarItem(props){
    return (
        <li>
            <Link as={`/c/${props.item.id}`} href={{ pathname: '/content/list', query: { catId: props.item.id }}} passHref>
                <a>{props.item.name}</a>
            </Link>
        </li>
    )
}

/**
 * 导航栏
 * @param props
 * @returns {*}
 * @constructor
 */
function Navbar(props){
    return (
        <ul>
        {props.list.length > 0 &&
            props.list.map((item)=><NavbarItem  key={item.id} item={item}/>)}
        </ul>
    )
}


class Page extends React.Component {
    static async  getInitialProps({req}) {
        const res = await api.request.get({
            url: '/getCats',
            params:{
                moduleId:'201412290839325502'
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

        return (
            <div>
            <Navbar list={this.props.list}/>
            <h1>手机端</h1>
            </div>
        )
    }
}

export default Page;
import dynamic from 'next/dynamic'
/*

const DynamicComponent = dynamic(import('../components/hello'))

export default () =>
    <div>
        <DynamicComponent />
        <p>HOME PAGE is here!</p>
    </div>
*/
