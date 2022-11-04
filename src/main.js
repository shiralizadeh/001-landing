import { ViteSSG } from "vite-ssg"
import "./style.css"
import App from "./App.vue"
import Houses from "./routes/Houses.vue"
import "@fontsource/fredoka-one"

const routes = [{ path: "/", component: Houses }]

export const createApp = ViteSSG(App, { routes })
