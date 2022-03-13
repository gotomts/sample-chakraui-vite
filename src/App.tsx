import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <Stack spacing={3}>
        <FormControl>
          <InputGroup size="xs">
            <InputLeftAddon children={<FormLabel>test</FormLabel>} />
            <Input placeholder="extra small size" />
          </InputGroup>
        </FormControl>
      </Stack>
    </>
  );
}

export default App;
