import { initialStateProps } from '../../types/types';
import { 
    DATA_PENDING,
    DATA_SUCCESS,
    DATA_FAILURE} from '../actions/fetchAction';

    const initialState: initialStateProps = {
        isLoading: false,
        data: [],
        error: null
    };

    export const fetchReducer = (state: {} = initialState, action: any) => {
        switch (action.type) {
            case DATA_PENDING:
                return {
                    ...state,
                    isLoading: true,
                    data: null,
                    error: null
                };
            case DATA_SUCCESS:
                return {
                    ...state,
                    isLoading: false,
                    data: action.data,
                    error: null
                };
            case DATA_FAILURE:
                return {
                    ...state,
                    isLoading: false,
                    data: null,
                    error: action.error
                };
            default: 
                return state;
        };
    };

