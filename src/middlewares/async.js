export default ({ dispatch }) => next => async action => {
	// console.log(action);
	if (!action.payload || !action.payload.then) {
		// console.log(action);
		return next(action);
	}

	//We want to wait for the promise to resolve
	// and create an action with that data and disptach it
	const response = await action.payload;
	const newAction = { ...action, payload: response };
	dispatch(newAction);
};
