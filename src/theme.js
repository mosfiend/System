import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        background: "green.50",
      },
    },
  },
  styles: {
    global: () => ({
      body: {
        bg: "#2C3e50",
      },
    }),
  },
});

export default theme;

// $main-color: #2C3e50
// $secondary-color:#18bc9c;
// $main-text:#DDD;
// $btn:#fb542B;
