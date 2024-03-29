import { Box, Button } from "@radix-ui/themes";
import { atom, useRecoilState } from "recoil";
import "./App.css";
import { BeforeAfter } from "./BeforeAfter";
import { MultiplicationTable } from "./MultiplicationTable";
import { TearApart } from "./TearApart";
import { LinesDots } from "./LinesDots";

type Mode = "before-after" | "multiplication" | "tear-apart" | "lines-dots";

export const numberState = atom<{
  selectedNumber: number;
  mode: Mode;
}>({
  key: "numberState", // unique ID (with respect to other atoms/selectors)
  default: {
    selectedNumber: 0,
    mode: "multiplication",
  },
});

const modes: Mode[] = [
  "before-after",
  // "multiplication",
  "tear-apart",
  "lines-dots",
];

function App() {
  const [state, setState] = useRecoilState(numberState);

  return (
    <Box>
      <Button
        onClick={() => {
          setState((s) => ({
            ...s,
            selectedNumber: Math.round(Math.random() * 100),
            mode: modes[Math.floor(Math.random() * modes.length)],
          }));
        }}
      >
        Before/After
      </Button>
      {state.mode === "before-after" && <BeforeAfter />}
      {state.mode === "multiplication" && <MultiplicationTable />}
      {state.mode === "tear-apart" && <TearApart />}
      {state.mode === "lines-dots" && <LinesDots />}
    </Box>
  );
}

export default App;
