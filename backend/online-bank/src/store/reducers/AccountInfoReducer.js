import { CoreApi } from "../../api/CoreApi";

const SET_ACCOUNT_INFO = 'SET_ACCOUNT_INFO';
const SET_OPERATIONS = 'SET_OPERATIONS';
const SET_USER_ID = 'SET_USER_ID';

let initialState = {
    userId : '',
    account : {},
    operations : []
}

const AccountInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACCOUNT_INFO : {
            return {
                ...state,
                account: action.account
            }
        }
        case SET_OPERATIONS : {
            return {
                ...state,
                operations : action.operations
            }
        }
        case SET_USER_ID: {
            return {
                ...state,
                userId: action.userId
            }
        }
        default:
            return state;
    }
}

// ACTIONS
// �������� ���������� �� ��������
export const setAccountInfoActionCreator = (account) => {
    return {
        type: SET_ACCOUNT_INFO,
        account: account
    }
};
// �������� ���������� �� ��������� ����� � ���������
export const setOperationsInfoActionCreator = (operations) => {
    return {
        type: SET_OPERATIONS,
        operations: operations
    }
};
// �������� ���������� id ������������
export const setAccountUserIdActionCreator = (userId) => {
    return {
        type: SET_USER_ID,
        userId: userId
    }
};

// THUNKS
// �������� ���������� �� �������� � �������
export const getAccountInfoThunkCreator = (userId, accountId) => {
    return (dispatch) => {
        CoreApi.getUserAccountInfo(userId, accountId)
            .then(data => {
                dispatch(setAccountInfoActionCreator(data));
            })
    }
}
// �������� ���������� �� ��������� ����� � ��������� � �������
export const getOperationsThunkCreator = (userId, accountId) => {
    return (dispatch) => {
        CoreApi.getAccountOperations(userId, accountId)
            .then(data => {
                dispatch(setOperationsInfoActionCreator(data.operations));
            })
    }
}

export default AccountInfoReducer;