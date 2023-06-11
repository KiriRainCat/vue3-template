import axios from 'axios'
import { ElMessage } from 'element-plus'

const defaultFailure = (msg) => ElMessage.warning(msg)
const defaultError = () => ElMessage.error('Got some error, please contact the administrator')

const get = (url, success, failure = defaultFailure, error = defaultError) => {
  axios.get(url, {
    withCredentials: true,
  }).then(({ data }) => {
    if (data.success === true) {
      success(data.msg, data.data, data.code)
    } else failure(data.msg, data.data, data.code)
  }).catch(error)
}

const post = (url, data, success, failure = defaultFailure, error = defaultError) => {
  axios.post(url, data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    withCredentials: true,
  }).then(({ data }) => {
    if (data.success === true) {
      success(data.msg, data.data, data.code)
    } else failure(data.msg, data.data, data.code)
  }).catch(error)
}

export { get, post }