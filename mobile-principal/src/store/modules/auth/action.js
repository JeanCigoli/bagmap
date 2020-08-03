import Toast from 'react-native-root-toast';
import cores from '../../../styles/cores';
import { auth } from '../../../services/api'
import  {AsyncStorage } from 'react-native';
import { TOKEN, FIRST_ACCESS } from '../../../config/constant';


export const persistToken = async (payload, dispatch) => {

    await AsyncStorage.setItem(TOKEN,payload.token);
    dispatch({ type: "@auth/AUTHENTICATE", payload });
};

export const logout = () => async dispatch => {

    try {
        await AsyncStorage.removeItem(TOKEN);
        await AsyncStorage.removeItem(FIRST_ACCESS);

        dispatch({ type: "@autH/SIGN_OUT" });

        Toast.show("Deslogado com sucesso", {
            duration: Toast.durations.LONG,
            position: Toast.positions.BOTTOM,
            animation: true,
            delay: 0,
            opacity: 1,
            backgroundColor: cores.green, 
        });

    } catch (error) { 
        Toast.show("Occorreu um erro ao sair", {
            duration: Toast.durations.LONG,
            position: Toast.positions.BOTTOM,
            animation: true,
            delay: 0,
            opcity: 1,
            backgroundColor: cores.red,
        });
        
    }
};

export const authenticate = (credentials) => async dispatch => {

    dispatch({ type: "@auth/FETCHING_DATA" });

    try {
        const { data } = await auth.login(credentials);

        if (data.payload.user?.namePerson) {
            dispatch(() => persistToken(data.payload, dispatch))
        } else {
            Toast.show("Usuário ou senha não encontrados", {
                duration: Toast.durations.LONG,
                position: Toast.positions.BOTTON,
                animation: true,
                hideOnPress: true,
                delay: 0,
                opacity: 1,
                backgroundColor: cores.red,
            });
        }
 
    } catch (error) {
        Toast.show("Usuário ou senha não encontrados", {
            duration: Toast.durations.LONG,
            position: Toast.positions.BOTTOM,
            animation: true,
            hideOnPress: true,
            delay: 0,
            opacity: 1,
            backgroundColor: cores.red,
        });
    } finally {
        dispatch({ type: "@auth/FETCHING_DATA_FINALLY" });
    }
}; 