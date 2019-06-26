const express = require('express')
const http = require('http');
const net = require('net');
const url = require('url');
const next = require('next')


const port = parseInt(process.env.PORT, 10) || 3001
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const server = express()
const handle = app.getRequestHandler()

/**
 * 使用http代理，解决axios不能跨端口访问的问题
 */
const proxy = http.createServer(server);
server.on('connect', (req, cltSocket, head) => {
    // Connect to an origin server
    const srvUrl = url.parse(`http://${req.url}`);
    const srvSocket = net.connect(srvUrl.port, srvUrl.hostname, () => {
        cltSocket.write('HTTP/1.1 200 Connection Established\r\n' +
            'Proxy-agent: Node.js-Proxy\r\n' +
            '\r\n');
        srvSocket.write(head);
        srvSocket.pipe(cltSocket);
        cltSocket.pipe(srvSocket);
    });
});

/**
 * 判断手机端
 * @param req
 * @returns {*}
 */
function isMobile(req){
    const userAgent = req.headers['user-agent']
    let flag;
    if(userAgent){
        flag =  userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    }
    return flag;
}

app.prepare().then(() => {

    /**
     * 首页
     */
    server.get('/', (req, res) => {
        let url = '/'
        if(isMobile(req)){
            url = '/mobile'
        }
        return app.render(req, res, url, req.query)
    })

    /**
     * 内容/文章列表页
     */
    server.get('/c/:catId', (req, res) => {
        let url = '/content/list'
        if(isMobile(req)){
            url = '/mobile/content/list'
        }
        const query = { catId: req.params.catId }
        return app.render(req, res, url,query)
    })
    /**
     * 内容/文章详情页
     */
    server.get('/c/i/:id', (req, res) => {
        let url = '/content/info'
        if(isMobile(req)){
            url = '/mobile/content/info'
        }
        const query = { id: req.params.id }
        return app.render(req, res, url, query)
    })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    proxy.listen(port,'127.0.0.1', (err,req) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)

    })
})
