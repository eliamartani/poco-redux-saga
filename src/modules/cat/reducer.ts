import actions from './action-types';

export type CatStateProp = {
  data: any;
  error: any;
  loading: boolean;
};

export type CatActionProp = {
  type: string;
  data: any;
  error: any;
};

const initialState: CatStateProp = { data: {}, error: null, loading: false };

const reducer = (
  state = initialState,
  { type, data, error }: CatActionProp,
) => {
  switch (type) {
    case actions.FETCH_CAT:
    case actions.FETCH_CAT_ERROR:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actions.RECEIVE_CAT_SUCCESS:
      return {
        ...state,
        data,
        error: null,
        loading: false,
      };
    case actions.RECEIVE_CAT_FAILURE:
      return {
        ...state,
        data: {},
        error,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
