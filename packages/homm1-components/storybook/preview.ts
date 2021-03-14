export const parameters = {
  actions: {
    argTypesRegex: "^on.+",
  },
  argTypes: {
    className: {
      control: false,
    },
  },
  controls: {
    hideNoControlsWarning: true,
  },
  options: {
    storySort: {
      order: [
        "Core",
        "Base",
        "Menu",
        "Main",
        "Adventure",
      ],
    },
  },
};
