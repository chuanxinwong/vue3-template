import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./routes/index.js";
import "./components/public.less"

var app = createApp(App);
app.use(router);

app.mount("#app");