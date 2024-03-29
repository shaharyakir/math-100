import { Button, Grid } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { numberState } from "./App";
import { rainbowColors } from "./rainbowColors";

export function RevealButton({ num }: { num: number }) {
  const [state, setState] = useState(false);

  useEffect(() => {
    setState(false);
  }, [num]);

  return (
    <Button
      style={{
        fontSize: 30,
        minHeight: 60,
        backgroundColor: rainbowColors[num - 1],
        color: rainbowColors[100 - num],
      }}
      onClick={() => setState((s: boolean) => !s)}
    >
      {state ? num : ""}
    </Button>
  );
}

export function BeforeAfter() {
  const state = useRecoilValue(numberState);

  return (
    <Grid columns="10" gap="4" rows="10" width="auto">
      {Array.from({ length: 100 })
        .map((_, i) => i + 1)
        .filter(
          (i) => i > state.selectedNumber - 4 && i < state.selectedNumber + 4
        )
        .map((i) => {
          if (state.selectedNumber === i) {
            return (
              <Button
                style={{
                  fontSize: 50,
                  minHeight: 60,
                  backgroundColor: rainbowColors[i - 1],
                  color: rainbowColors[100 - i],
                }}
                key={i}
              >
                {i}
              </Button>
            );
          } else {
            return <RevealButton num={i} />;
          }
        })}
    </Grid>
  );
}
