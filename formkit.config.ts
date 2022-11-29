import { DefaultConfigOptions } from "@formkit/vue";

const config: DefaultConfigOptions = {
  theme: "genesis",
  rules: {
    username_is_unique(node) {
      const usernames = ["jpschroeder", "luanguyen", "danielkelly_io"];
      return !usernames.includes(node.value as string);
    },
  },
};

export default config;
