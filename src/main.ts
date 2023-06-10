import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";

export async function main() {
  const pinia = createPinia();

 createApp(App).use(pinia).mount(App);
}
