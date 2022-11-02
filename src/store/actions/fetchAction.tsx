export const DATA_PENDING: string = 'DATA_PENDING';
export const DATA_SUCCESS: string = 'DATA_SUCCESS';
export const DATA_FAILURE: string = 'DATA_FAILURE';

export const dataPending = () => {
    return {
        type: DATA_PENDING
    };
};

export const dataSuccess = (data: any[]) => {
    return {
        type: DATA_SUCCESS,
        data: data
    };
};

export const dataFailure = (error: unknown) => {
    return {
        type: DATA_FAILURE,
        error: error
    };
};


