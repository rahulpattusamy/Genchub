import axios from 'axios'


const apiclient = axios.create({
     baseURL:"'https://dummyjson.com'"
})
 

export default apiclient