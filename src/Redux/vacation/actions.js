export const GET_VACATIONS = 'GET_VACATIONS'
export const SET_VACATIONS = 'SET_VACATIONS'
export const ADD_VACATION = 'ADD_VACATION'
export const SET_VACATION = 'SET_VACATION'
export const LOADING = 'vacation/LOADING'
export const SET_SUCCESS = 'vacation/SET_SUCCESS'
export const SET_ERROR = 'vacation/SET_ERROR'
export const SET_TOTAL_PAGES_COUNT = 'vacation/SET_TOTAL_PAGES_COUNT'
export const SET_PAGE = 'vacation/SET_PAGE'

export const requestVacations = (userId, page) => ({type: GET_VACATIONS, data: {userId, page}})
export const setVacations = (payload) => ({type: SET_VACATIONS, payload})
export const addVacation = (payload) => ({type: ADD_VACATION, payload})
export const loading = () => ({type: LOADING})
export const setSuccess = (payload) => ({type: SET_SUCCESS, payload})
export const setError = (payload) => ({type: SET_ERROR, payload})
export const setTotalPagesCount = (count) => ({type: SET_TOTAL_PAGES_COUNT, count})
export const setPage = (page) => ({type: SET_PAGE, page})
