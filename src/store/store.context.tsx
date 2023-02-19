import { createContext, useReducer } from "react";
import { AppReducer, initialState, State } from "@/store/store.reducer";

export const AppContext = createContext(initialState);

export function AppProvider({ children }: any) {
	const [state, dispatch] = useReducer(AppReducer, initialState);
	function dispatchAction(actionName: string, newState: State) {
		dispatch({
			type: `${actionName}`,
			payload: {
				...state,
				[actionName]: newState,
			},
		});
	}

	return (
		<AppContext.Provider
			value={
				{
					...state,
					dispatchAction,
				} as any
			}
		>
			{children}
		</AppContext.Provider>
	);
}
