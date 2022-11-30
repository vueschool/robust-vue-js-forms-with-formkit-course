import { DefaultConfigOptions } from "@formkit/vue";
import { createAutoAnimatePlugin } from "@formkit/addons";
import createToolTipPlugin from "@/formkit-plugins/tooltip-plugin";
import "@/formkit-plugins/tooltip-plugin/styles.css";

const config: DefaultConfigOptions = {
  theme: "genesis",
  plugins: [createAutoAnimatePlugin(), createToolTipPlugin()],
  messages: {
    en: {
      validation: {
        username_is_unique({ args, name, node }) {
          return `${node.value} is already taken`;
        },
      },
    },
  },
  rules: {
    username_is_unique(node) {
      const usernames = ["jpschroeder", "luanguyen", "danielkelly_io"];
      return !usernames.includes(node.value as string);
    },
  },
};

export default config;
