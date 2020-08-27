export const NAVBAR_TOGGLE = 'NAVBAR_TOGGLE';
export const SET_LOADING = 'SET_LOADING';

// navbar open and close action
export const setNavbarToggle = () => ({ type: NAVBAR_TOGGLE });
export const setLoading = (loading) => ({ type: SET_LOADING, loading });
