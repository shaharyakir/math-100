import { Button, Grid } from "@radix-ui/themes";
import { rainbowColors } from "./rainbowColors";

export function MultiplicationTable() {
  return (
    <Grid columns="10" gap="4" rows="10" width="auto">
      {Array.from({ length: 100 })
        .map((_, i) => i + 1)
        .map((i) => {
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
        })}
    </Grid>
  );
}
