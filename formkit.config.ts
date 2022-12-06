import { DefaultConfigOptions } from "@formkit/vue";
import { createProPlugin, inputs } from "@formkit/pro";
import { createAutoAnimatePlugin } from "@formkit/addons";
import createToolTipPlugin from "@/formkit-plugins/tooltip-plugin";
import "@/formkit-plugins/tooltip-plugin/styles.css";
import { generateClasses } from "@formkit/themes";

const config: DefaultConfigOptions = {
  plugins: [
    createProPlugin("fk-8747143e23e", inputs),
    createAutoAnimatePlugin(),
    createToolTipPlugin(),
  ],
  config: {
    classes: generateClasses({
      global: {
        label: "text-red-400 formkit-invalid:text-red-900",
      },
      text: {
        label: "bg-blue-500",
      },
      password: {},
      url: {},
    }),
  },
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
