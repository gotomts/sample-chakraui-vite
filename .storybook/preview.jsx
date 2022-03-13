import * as jest from "jest-mock";
window.jest = jest;

import { ChakraProvider } from "@chakra-ui/react";

const withChakra = (StoryFn) => {
  return (
    <ChakraProvider>
      <div id="story-wrapper">
        <StoryFn />
      </div>
    </ChakraProvider>
  );
};

export const decorators = [withChakra];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
