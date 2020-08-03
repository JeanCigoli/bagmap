import Toast from 'react-native-root-toast';
import cores from '../../styles/cores';

export const requestData = moduleName => async (
  dispatch,
  requestFunction,
  action
) => {
  dispatch({ type: `${moduleName}/FETCHING_DATA` });
  try {
    const { data } = await requestFunction();

    dispatch(action(data.payload));
  } catch (error) {
    Toast.show("Falha ao se conectar ao servidor, tente novamente mais tarde!", {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      animation: true,
      hideOnPress: true,
      delay: 0,
      opacity: 1,
      backgroundColor: cores.red,
    });
  } finally {
    dispatch({ type: `${moduleName}/FETCHING_DATA_FINALLY` });
  }
};