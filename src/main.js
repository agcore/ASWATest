import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App);


// axios.defaults.insecureHTTPParser = true;
// axios.defaults.baseURL = 'http://localhost:7192/api';
// axios.defaults.headers = {
//     "Content-Type": "application/json"
// };

app.use(ElementPlus);
app.mount('#app');

