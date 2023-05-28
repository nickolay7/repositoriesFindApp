import { createRoot } from "react-dom/client";

import { ApolloProvider } from "@apollo/client";

import { StoreProvider } from "app/providers/storeProvider/storeProvider";
import { client } from "shared/api/gql";

import App from "./app/App";

const rootContainer = document.querySelector("#root");
const root = createRoot(rootContainer!);
root.render(
	<StoreProvider>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</StoreProvider>,
);
