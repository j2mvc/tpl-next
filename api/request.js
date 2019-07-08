import axios from 'axios'
import http from 'http'

const apiPrefix = 'http://api.sip.test.gzztctx.com'

// 创建一个 axios 实例
const service = axios.create({
    // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
    // 它可以通过设
