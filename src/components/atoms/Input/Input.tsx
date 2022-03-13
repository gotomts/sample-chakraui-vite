import {
  FormControl,
  FormLabel,
  forwardRef,
  Input as ChakraInput,
  InputAddonProps,
  InputGroup,
  InputLeftAddon,
  InputProps,
} from "@chakra-ui/react";

type Props = InputProps & {
  inputLeftAddonProps: InputAddonProps;
};

export const Input = forwardRef<Props, "input">((props, ref) => {
  const {
    size,
    inputLeftAddonProps: { children },
  } = props;

  return (
    <FormControl>
      <InputGroup size={size}>
        <InputLeftAddon children={children} />
        <ChakraInput ref={ref} {...props} />
      </InputGroup>
    </FormControl>
  );
});
