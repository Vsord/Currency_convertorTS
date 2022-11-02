export interface initialStateProps {
    isLoading: boolean;
    data: any[] | null;
    error: null;
};

export interface ConvertProps {
    label: boolean,
    currency: any[],
    selectValue: string,
    inputValue: number,
    OnInputHandler: any
    OnSelectHandler: any
  }

