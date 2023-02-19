export interface State {
	products: object[];
	loading: boolean;
	dispatchAction: (type: string, payload: {}) => void;
}
export interface Action {
	type: string;
	payload: any;
}

/* Default State */
export const initialState: State = {
	products: [{}],
	loading: true,
	dispatchAction: () => {},
};

/* Main App Reducer */
export const AppReducer = (state: State, action: Action) => {
	const { type, payload } = action;
	return {
		...state,
		[type]: payload[type],
	};
};
