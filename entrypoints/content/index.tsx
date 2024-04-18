import ReactDOM from "react-dom/client";

import FormattedMarkdownTableButton from "./FormattedMarkdownTableButton";
import { FORMAT_BUTTON } from "@/src/constants";

export default defineContentScript({
  matches: ["*://*.gitlab.com/*"],

  main(ctx) {
    const ui = createIntegratedUi(ctx, {
      position: "inline",
      anchor: FORMAT_BUTTON.anchor,
      onMount: (container) => {
        // Create a root on the UI container and render a component
        const root = ReactDOM.createRoot(container);
        root.render(<FormattedMarkdownTableButton />);
        return root;
      },
      onRemove: (root) => {
        // Unmount the root when the UI is removed
        root?.unmount();
      },
    });

    // Call mount to add the UI to the DOM
    ui.mount();
  },
});
