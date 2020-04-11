import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchCat } from './actions';
import { getCatUrl, getCatLoading } from './selectors';
import reloadButton from '../../assets/refresh.svg';

type CatProps = {
  loading: boolean;
  src: string;
  error?: string;
  onLoadCat: () => {};
};

const Cat = (props: CatProps) => {
  const { loading, error, onLoadCat, src } = props;

  useEffect(() => {
    onLoadCat();
  }, [onLoadCat]);

  return (
    <div className="App">
      {loading && <div>Loading...</div>}
      {!loading && error}
      {!loading && !error && (
        <>
          <button onClick={onLoadCat} aria-label="Load Cat">
            <img alt="Load Cat" src={reloadButton}></img>
          </button>
          <img src={src} alt="Cat pic" />
        </>
      )}
    </div>
  );
};

export default connect(
  state => ({
    loading: getCatLoading(state),
    src: getCatUrl(state),
  }),
  {
    onLoadCat: fetchCat,
  },
)(Cat);
