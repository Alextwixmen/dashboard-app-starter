import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import data from '../../mock/data.json';
import { addPositions } from './position-slice';

export const useFetchPositions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addPositions(data));
  }, [dispatch]);
};
