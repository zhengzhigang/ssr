const Vue = require('vue')
const server = require('express')()
const fs = require('fs')
const template = fs.readFileSync('./src/index.template.html', 'utf-8')
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
const renderer = require('vue-server-renderer').createBundleRenderer(serverBundle, {
    runInNewContext: false, // 推荐
    template,
    clientManifest
})
server.get('/api/getItem', (req, res) => {
    res.send('请求数据信息')
})
server.get('*', (req, res) => {
    // res.setHeader('Content-type', 'text/html;charset=UTF-8')
    const context = {
        url: req.url,
        title: 'SSR Vue服务端渲染'
    }
    renderer.renderToString(context, (err, html) => {
        if (err) {
            if (err.code === 404) {
                res.status(404).end('Page not fund')
            } else {
                res.status(500).end('Internal Server Error')
            }
        } else {
            res.end(html)
        }
    })
})

server.listen(9001, () => {
    console.log('server start http://localhost:9001')
})