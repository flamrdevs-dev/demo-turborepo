import { render } from "solid-js/web";

import { Hello } from "@demo-turborepo/ui/core";

render(() => <Hello name="world" />, document.getElementById("root")!);
