import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./component/store";
import { Provider } from "react-redux";
import Counter from "./component/counterAction.js";
import * as serviceWorker from "./serviceWorker";
import mixpanel from "mixpanel-browser";
import { MixpanelProvider, MixpanelConsumer } from "react-mixpanel";

//initializing mixpanel with the project token
mixpanel.init("Your Project Token", {
  api_host: "https://api.mixpanel.com",
});

mixpanel.track("Page Load");

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <Counter />
    </Provider> */}

    <Provider store={store}>
      <MixpanelProvider mixpanel={mixpanel}>
        <Counter />
      </MixpanelProvider>
      ,
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);

serviceWorker.unregister();
