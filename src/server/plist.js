
import axios from 'axios'
var baseUrl = '/kugou';
let oneLeve = axios.create({
    baseURL: baseUrl,
    responseType: 'json'
  })

let request = (path) => {
    return oneLeve(path).catch((e) => {
      if (e) {
        alert('网络错误')
      }
    })
  }

//歌单
export const getGeDanInfo = (params = { specialid: '' }) => {
    return request(`/plist/list/${params.specialid}?json=true`)
    }