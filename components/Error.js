
import NextError from 'next/error';

const Error = props =>{
    if(process.env.NODE_ENV == 'development'){
        return <NextError statusCode={props.error.code} />;
    }
    return  (<div>
        <div className={'error-code'}>{props.code}</div>
        <div className={'error-message'}>{props.message}</div>
        <style jsx>{
        `
        .code{
            font-size:18px;
            color:#ff0000
        }
        .error-message{
            font-size:18px;
            color:#3333
        }`}
        </style>
    </div>)
}
export default Error
