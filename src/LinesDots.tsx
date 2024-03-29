import { Box, Button, Grid } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { numberState } from "./App";
import { rainbowColors } from "./rainbowColors";

export function LinesDots() {
  const state = useRecoilValue(numberState);

  const [linesDotsState, setLinesDotsState] = useState({
    lines: 0,
    dots: 0,
  });

  useEffect(() => {
    setLinesDotsState({ lines: 0, dots: 0 });
  }, [state.selectedNumber]);

  const requiredLines = Math.floor(state.selectedNumber / 10);
  const requiredDots = state.selectedNumber % 10;

  return (
    <Box>
      {requiredLines === linesDotsState.lines &&
        requiredDots === linesDotsState.dots && (
          <div style={{ fontSize: 100 }}>🧚</div>
        )}
      <Button
        style={{
          fontSize: 50,
          minHeight: 60,
          backgroundColor: rainbowColors[state.selectedNumber],
          color: rainbowColors[100 - state.selectedNumber],
        }}
      >
        {state.selectedNumber}
      </Button>
      <br />
      <br />
      <Grid columns="20" gap="3" rows="1">
        {Array.from({ length: linesDotsState.lines }).map(() => (
          <div>|</div>
        ))}
        {Array.from({ length: linesDotsState.dots }).map(() => (
          <div>.</div>
        ))}
      </Grid>
      <Grid columns="2" gap="3" rows="1">
        <Button
          onClick={() =>
            setLinesDotsState((s) => ({ ...s, lines: s.lines + 1 }))
          }
        >
          |
        </Button>
        <Button
          onClick={() => setLinesDotsState((s) => ({ ...s, dots: s.dots + 1 }))}
        >
          .
        </Button>
      </Grid>
    </Box>
  );
}
