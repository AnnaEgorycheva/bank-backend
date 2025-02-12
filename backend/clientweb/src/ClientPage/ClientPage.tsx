import React from 'react';
import Credit from './components/Credit/Credit';
import ClientAccountInfo from './components/ClientAccountInfo/ClientAccountInfo';
import HistoryOperationAccounts from './components/HistoryOperationAccounts/HistoryOperationAccounts';
import ClientAccounts from './components/ClientAccounts/ClientAccounts';
import ClientInformation from './components/ClientInformation/ClientInformation';
import CreateAccount from './components/CreateAccount/CreateAccount';
import ClosedAccount from './components/ClosedAccount/ClosedAccount';
import Operation from './components/Operation/Operation';
import CreditRating from './components/CreditRating/CreditRating';
import CreditDebts from './components/CreditDebts/CreditDebts';
import Transaction from './components/Transaction/Transaction';

const ClientPage: React.FC = () => {
    return (
        <>
            <ClientInformation/>
            <ClientAccounts/>
            <ClientAccountInfo/>
            <CreateAccount/>
            <ClosedAccount/>
            <Operation/>
            <Transaction/>
            <HistoryOperationAccounts />
            <CreditRating />
            <Credit/>
            <CreditDebts/>
        </>
    );
}

export default ClientPage;