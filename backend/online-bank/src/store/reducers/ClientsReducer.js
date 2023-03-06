import { UserApi } from "../../api/UserApi";

const SET_CLIENTS = 'SET_CLIENTS';
const SET_NEW_CLIENT = 'SET_NEW_CLIENT';
const CLEAR_NEW_CLIENT = 'CLEAR_NEW_CLIENT';

let initialState = {
    clients: [],
    newClient: {
        name: '',
        lastname: '',
        password: ''
    }
}

const ClientsReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case SET_CLIENTS: {
            newState.clients = action.clients;
            return newState;
        }
        case SET_NEW_CLIENT: {
            newState.newClient = action.newClient;
            return newState;
        }
        case CLEAR_NEW_CLIENT: {
            newState.newClient.name = '';
            newState.newClient.lastname = '';
            newState.newClient.password = '';
            return newState;
        }
        default:
            return state;
    }
};

// Actions
// �������� ������ �������� ����� ��������� ������ � �������
export const setClientsActionCreator = (clients) => {
    return {
        type: SET_CLIENTS,
        clients: clients
    }
};
// �������� ��������� ������������ �������
export const setNewClientActionCreator = (newClient) => {
    return {
        type: SET_NEW_CLIENT,
        newClient: newClient
    }
}
// �������� ������ � ��������� �������
export const clearNewClientActionCreator = () => {
    return {
        type: CLEAR_NEW_CLIENT
    }
}

// Thunks
// �������� ���� �������� � �������
export const getClientsThunkCreator = () => {
    return (dispatch) => {
        UserApi.getAllUsers()
            .then(data => {
                data = data.filter(client => client.role == 0)
                dispatch(setClientsActionCreator(data));
            })
    }
}
// ������������� ���������� �� �������
export const blockAnClientThunkCreator = (clientId) => {
    return (dispatch) => {
        UserApi.blockUser(clientId)
            .then(() => {
                console.log('user was blocked')
                UserApi.getAllUsers()
                    .then(data => {
                        data = data.filter(client => client.role == 0)
                        dispatch(setClientsActionCreator(data));
                    })
            })
    }
}
// ������� ���������� �� �������
export const createNewClientThunkCreator = (name, lastname, password) => {
    return (dispatch) => {
        UserApi.registerClient(name, lastname, password)
            .then(() => {
                dispatch(clearNewClientActionCreator)
                UserApi.getAllUsers()
                    .then(data => {
                        data = data.filter(client => client.role == 0)
                        dispatch(setClientsActionCreator(data));
                    })
            })
    }

}

export default ClientsReducer;