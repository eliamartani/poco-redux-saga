import { createSelector } from 'reselect';

type CatProps = {
  cat?: any;
};

const getCat = ({ cat }: CatProps = {}) => cat;

const getCatData = createSelector(getCat, ({ data = {} }) => data);

export const getCatLoading = createSelector(getCat, ({ loading }) => loading);

export const getCatError = createSelector(getCat, ({ error = '' }) => error);

export const getCatUrl = createSelector(getCatData, ({ url = '' }) => url);
