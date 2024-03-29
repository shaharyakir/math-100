import "@radix-ui/themes/styles.css";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Theme } from "@radix-ui/themes";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Theme>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </Theme>
);
