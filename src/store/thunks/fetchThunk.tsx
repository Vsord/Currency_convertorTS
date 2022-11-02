import {
    dataPending,
    dataSuccess,
    dataFailure
} from '../actions/fetchAction';

export const fetchThunk = () => {
    return async (dispatch: Function) => {
        try {
            // dispatch(dataPending());
            await fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
                .then((res) => {
                    if (res.status >= 200 && res.status < 300) {
                        return res.json();
                    };
                })
                .then((data: any[]) => dispatch(dataSuccess(data)))
                .catch((err) => dispatch(dataFailure(err)))
        } catch (err) {
            dispatch(dataFailure((err)));
        }
    };
};