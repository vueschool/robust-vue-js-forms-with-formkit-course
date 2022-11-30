export default function createToolTipPlugin(options) {
  return function toolTipPlugin(node) {
    const original = node.props.definition.schema;
    node.props.definition.schema = (extensions = {}) => {
      extensions.help = { if: "false" };
      extensions.label = {
        children: [
          "$label",
          {
            $el: "span",
            if: "$help",
            attrs: {
              class: "tooltip",
            },
            children: [
              "?",
              {
                $el: "span",
                attrs: {
                  class: "tooltip-inner",
                },
                children: "$help",
              },
            ],
          },
        ],
      };
      return original(extensions);
    };
  };
}
