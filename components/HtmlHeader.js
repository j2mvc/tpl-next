
import Head from 'next/head'

const HtmlHeader = props =>{
    return  (<Head>
        <title>{props.title}</title>
        <meta charSet='utf-8' />
        <meta name="keywords" content={props.keywords}/>
        <meta name="description" content={props.description}/>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>)
}
export default HtmlHeader
