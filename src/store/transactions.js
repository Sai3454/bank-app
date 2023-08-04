import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import { getApiCall } from "./getApi";

const userDetails = [
    {
      userId: 1,
      name: 'John Doe',
      username: 'johndoe',
      permanentAddress: '123 Main St, Apt 4',
      email: 'johndoe@example.com',
      password: 'password123',
      profilePic: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80',
      dateOfBirth: '1990-05-15',
      city: 'New York',
      postalCode: '10001',
      country: 'United States',
    },
    {
      userId: 2,
      name: 'Jane Smith',
      username: 'janesmith',
      permanentAddress: '456 Oak Ave, Unit 10',
      email: 'janesmith@example.com',
      password: 'pass1234',
      profilePic: 'https://example.com/profiles/janesmith.jpg',
      dateOfBirth: '1985-11-25',
      city: 'Los Angeles',
      postalCode: '90001',
      country: 'United States',
    },
    {
      userId: 3,
      name: 'Michael Johnson',
      username: 'mjohnson',
      permanentAddress: '789 Elm St, Apt 5B',
      email: 'michaelj@example.com',
      password: 'mike123',
      profilePic: 'https://podarinternationalschool.com/wp-content/uploads/2017/10/user9.jpg',
      dateOfBirth: '1998-08-12',
      city: 'Chicago',
      postalCode: '60601',
      country: 'United States',
    },
    {
      userId: 4,
      name: 'Emily Williams',
      username: 'emilyw',
      permanentAddress: '101 Maple Rd, Unit 7',
      email: 'emilyw@example.com',
      password: 'emily567',
      profilePic: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80',
      dateOfBirth: '1993-03-18',
      city: 'Houston',
      postalCode: '77002',
      country: 'United States',
    },
    {
      userId: 5,
      name: 'William Johnson',
      username: 'wjohnson',
      permanentAddress: '222 Pine St, Apt 3C',
      email: 'williamj@example.com',
      password: 'willy456',
      profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXenVR5vEfY6VCbkPmQBc5731ZxOLHJfOSjw&usqp=CAU',
      dateOfBirth: '1987-09-05',
      city: 'San Francisco',
      postalCode: '94102',
      country: 'United States',
    },
    {
      userId: 6,
      name: 'Olivia Davis',
      username: 'odavis',
      permanentAddress: '333 Cedar Dr, Unit 8',
      email: 'oliviad@example.com',
      password: 'olivia789',
      profilePic: 'https://example.com/profiles/odavis.jpg',
      dateOfBirth: '1995-12-30',
      city: 'Miami',
      postalCode: '33101',
      country: 'United States',
    },
    {
      userId: 7,
      name: 'James Wilson',
      username: 'jamesw',
      permanentAddress: '444 Oakwood Rd, Apt 12',
      email: 'jamesw@example.com',
      password: 'jwils456',
      profilePic: 'https://example.com/profiles/jamesw.jpg',
      dateOfBirth: '1991-02-20',
      city: 'Seattle',
      postalCode: '98101',
      country: 'United States',
    },
    {
      userId: 8,
      name: 'Sophia Anderson',
      username: 'sophiaa',
      permanentAddress: '555 Elmwood Ave, Unit 15D',
      email: 'sophiaa@example.com',
      password: 'soph123',
      profilePic: 'https://example.com/profiles/sophiaa.jpg',
      dateOfBirth: '1989-07-10',
      city: 'Boston',
      postalCode: '02108',
      country: 'United States',
    },
    {
      userId: 9,
      name: 'Alexander Martinez',
      username: 'alexmartinez',
      permanentAddress: '666 Maple Ln, Apt 20',
      email: 'alexmartinez@example.com',
      password: 'alex789',
      profilePic: 'https://example.com/profiles/alexmartinez.jpg',
      dateOfBirth: '1994-04-02',
      city: 'Dallas',
      postalCode: '75201',
      country: 'United States',
    },
    {
      userId: 10,
      name: 'Isabella Lee',
      username: 'isabellal',
      permanentAddress: '777 Pine Ave, Unit 6',
      email: 'isabellal@example.com',
      password: 'bella567',
      profilePic: 'https://example.com/profiles/isabellal.jpg',
      dateOfBirth: '1996-06-28',
      city: 'Atlanta',
      postalCode: '30301',
      country: 'United States',
    },
    {
      userId: 11,
      name: 'Ethan Nguyen',
      username: 'ethann',
      permanentAddress: '888 Cedar St, Apt 9B',
      email: 'ethann@example.com',
      password: 'ethan456',
      profilePic: 'https://example.com/profiles/ethann.jpg',
      dateOfBirth: '1997-09-14',
      city: 'Denver',
      postalCode: '80202',
      country: 'United States',
    },
    {
      userId: 12,
      name: 'Mia Rodriguez',
      username: 'miarodriguez',
      permanentAddress: '999 Oakwood Dr, Unit 22',
      email: 'miarodriguez@example.com',
      password: 'mia123',
      profilePic: 'https://example.com/profiles/miarodriguez.jpg',
      dateOfBirth: '1992-11-19',
      city: 'Phoenix',
      postalCode: '85001',
      country: 'United States',
    },
    {
      userId: 13,
      name: 'Liam Garcia',
      username: 'liamg',
      permanentAddress: '111 Elm Ave, Apt 2',
      email: 'liamg@example.com',
      password: 'liam789',
      profilePic: 'https://example.com/profiles/liamg.jpg',
      dateOfBirth: '1999-01-08',
      city: 'Las Vegas',
      postalCode: '89101',
      country: 'United States',
    },
    {
      userId: 14,
      name: 'Ava Lopez',
      username: 'avalopez',
      permanentAddress: '222 Pine St, Apt 7',
      email: 'avalopez@example.com',
      password: 'ava567',
      profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXenVR5vEfY6VCbkPmQBc5731ZxOLHJfOSjw&usqp=CAU',
      dateOfBirth: '1993-12-17',
      city: 'Orlando',
      postalCode: '32801',
      country: 'United States',
    },
    {
        userId: 15,
        name: 'Mia Rodriguez',
        username: 'miarodriguez',
        permanentAddress: '999 Oakwood Dr, Unit 22',
        email: 'miarodriguez@example.com',
        password: 'mia123',
        profilePic: 'https://example.com/profiles/miarodriguez.jpg',
        dateOfBirth: '1992-11-19',
        city: 'Phoenix',
        postalCode: '85001',
        country: 'United States',
      },
      {
        userId: 16,
        name: 'Liam Garcia',
        username: 'liamg',
        permanentAddress: '111 Elm Ave, Apt 2',
        email: 'liamg@example.com',
        password: 'liam789',
        profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXenVR5vEfY6VCbkPmQBc5731ZxOLHJfOSjw&usqp=CAU',
        dateOfBirth: '1999-01-08',
        city: 'Las Vegas',
        postalCode: '89101',
        country: 'United States',
      },
      {
        userId: 17,
        name: 'Ava Lopez',
        username: 'avalopez',
        permanentAddress: '222 Pine St, Apt 7',
        email: 'avalopez@example.com',
        password: 'ava567',
        profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXenVR5vEfY6VCbkPmQBc5731ZxOLHJfOSjw&usqp=CAU',
        dateOfBirth: '1993-12-17',
        city: 'Orlando',
        postalCode: '32801',
        country: 'United States',
      }
]

const initialState = {
    allTransactions: [],
    creditTransactions: [],
    debitTransactions: [],
    latestTransactions: [],
    totalCredit: 0,
    totalDebit: 0,
    pageName: '',
    userDetails,
    addToastMessage: null,
    updateToastMessage: null,
    deleteToastMessage: null,
    loading: false,
    error: null,
    lastSevenDays: [],
    loginError: null
};


const transactionsSlice = createSlice({
    name: "transactions",
    initialState,
    reducers: {
        // action: function

        setPageName: (state, action) => {
            state.pageName = action.payload.page_name
        },

        apiRequested: (state, action) => {
            state.loading = true;
        },

        apiRequestFailed: (state, action) => {
          state.loading = false;
          state.pageName = "failure"
          state.error = action.payload.error
        },

        resetDeleteToastMessage: (state, action) => {
          state.deleteToastMessage = null
        },

        resetUpdateToastMessage: (state, action) => {
          state.updateToastMessage = null
        },

        resetAddToastMessage: (state, action) => {
          state.addToastMessage = null
        },

        apiAddRequestFailed: (state, action) => {
            state.loading = false;
            state.pageName = "failure"
            state.error = action.payload.error
            state.addToastMessage = {method: "failed", message: "Error occured while adding transaction"}
        },

        apiUpdateRequestFailed: (state, action) => {
          state.loading = false;
          state.pageName = "failure"
          state.error = action.payload.error
          state.updateToastMessage = {method: "failed", message: "Error occured while updating transaction"}
        },

        apiDeleteRequestFailed: (state, action) => {
          state.loading = false;
          state.pageName = "failure"
          state.error = action.payload.error
          state.deleteToastMessage = {method: "failed", message: "Error occured while deleting transaction"}
        },

        showLoginError: (state, action) => {
            state.loginError = "User ID, Password does not matched"
        },

        onSuccessLogin: (state, action) => {
            state.loginError = null
            state.pageName = 'dashboard'
        },

        onSuccessLogout: (state, action) => {
          state.allTransactions = []
          state.creditTransactions = []
          state.debitTransactions = []
          state.error = null
          state.lastSevenDays = []
          state.latestTransactions = []
          state.loading = false
          state.loginError = null
          state.pageName = ''
          state.totalCredit = 0
          state.totalDebit = 0
        },

        updateAllTypeTransactions: (state, action) => {
            state.loading = false
            state.error = null
            state.creditTransactions = state.allTransactions.filter(eachTransaction => eachTransaction.type === 'credit')
            state.debitTransactions = state.allTransactions.filter(eachTransaction => eachTransaction.type === 'debit')
            const sortedData = [...state.allTransactions].sort((a, b) => new Date(b.date) - new Date(a.date));

            state.latestTransactions = sortedData.slice(0, 3);

    
              
              // Get last seven days transactions grouped by date and sorted in descending order within each group
              const lastSevenDaysTransactions = () => {
                const currentDate = new Date();
                currentDate.setHours(0, 0, 0, 0); // Set the time to midnight (00:00:00) for accurate date comparison
              
                // Filter transactions for the last seven days
                const lastSevenDaysFilteredTransactions = [...state.allTransactions].filter((transaction) => {
                  const transactionDate = new Date(transaction.date);
                  transactionDate.setHours(0, 0, 0, 0); // Set the time to midnight (00:00:00) for accurate date comparison
                  const timeDifferenceInDays = (currentDate - transactionDate) / (1000 * 60 * 60 * 24);
                  return timeDifferenceInDays >= 0 && timeDifferenceInDays <= 7;
                });
              
                // Sort transactions in descending order based on date
                lastSevenDaysFilteredTransactions.sort((a, b) => new Date(b.date) - new Date(a.date));
              
                // Group transactions by date (using YYYY-MM-DD format as key)
                const groupedTransactions = lastSevenDaysFilteredTransactions.reduce((result, transaction) => {
                  const dateKey = new Date(transaction.date).toISOString().slice(0, 10); // Get date in YYYY-MM-DD format
                  if (!result[dateKey]) {
                    result[dateKey] = { date: dateKey, transactions: [], totalCredit: 0, totalDebit: 0 };
                  }
                  result[dateKey].transactions.push(transaction);
                  if (transaction.type === "credit") {
                    result[dateKey].totalCredit += transaction.amount;
                  } else if (transaction.type === "debit") {
                    result[dateKey].totalDebit += transaction.amount;
                  }
                  return result;
                }, {});
              
                // Create a new array with sorted transactions grouped by date and total credit/debit sums
                const sortedAndGroupedTransactions = [];
              
                // Loop through the last seven days and add the date groups to the final array
                for (let i = 0; i < 7; i++) {   
                  const currentDate = new Date();
                  currentDate.setHours(0, 0, 0, 0);
                  currentDate.setDate(currentDate.getDate() - i);
                  const dateKey = currentDate.toISOString().slice(0, 10);
              
                  // Check if there are transactions for this date
                  if (!groupedTransactions[dateKey]) {
                    // If no transactions for this date, add an empty date group
                    sortedAndGroupedTransactions.push({ date: dateKey, transactions: [], totalCredit: 0, totalDebit: 0 });
                  } else {
                    // If transactions exist, add the date group from the groupedTransactions object
                    sortedAndGroupedTransactions.push(groupedTransactions[dateKey]);
                  }
                }
              
                return sortedAndGroupedTransactions;
              };
              
              const lastSevenDaysTransactionsArray = lastSevenDaysTransactions();
              

            state.lastSevenDays = lastSevenDaysTransactionsArray

        },


        getTransactions: (state, action) => {
            state.allTransactions = action.payload.transactions;
        },

        addTransaction: (state, action) => {
            state.allTransactions.push(action.payload.insert_transactions_one)
            state.addToastMessage = {method: "success", message: "Transaction Succesfully Added"}
            if(action.payload.insert_transactions_one.type === 'credit'){
                state.totalCredit += action.payload.insert_transactions_one.amount
            }else{
                state.totalDebit += action.payload.insert_transactions_one.amount
            }
        },

        removeTransaction: (state, action) => {
            try{
                const index = state.allTransactions.findIndex(
                    (transaction) => transaction.id === action.payload.delete_transactions_by_pk.id
                );
                if(state.allTransactions[index].type === 'credit'){
                    state.totalCredit -= state.allTransactions[index].amount
                }else{
                    state.totalDebit -= state.allTransactions[index].amount
                }
                state.allTransactions.splice(index, 1);
            }
            catch(error){
                console.log(error.message)
            }
            state.deleteToastMessage = {method: "success", message: "Transaction Succesfully Deleted"}
        },

        updateDebitCredit: (state, action) => {
            let list = []
            if(action.payload.transaction_totals_admin){
                list = action.payload.transaction_totals_admin
            }else{
                list = action.payload.totals_credit_debit_transactions
            }
            const creditTotal = list.reduce((total, transaction) => {
                if (transaction.type === "credit") {
                  return total + transaction.sum;
                }
                return total;
              }, 0);
              
              const debitTotal = list.reduce((total, transaction) => {
                if (transaction.type === "debit") {
                  return total + transaction.sum;
                }
                return total;
              }, 0);
            state.totalCredit = creditTotal
            state.totalDebit = debitTotal  
        },


        updatedTransaction: (state, action) => {
            try{
                const index = state.allTransactions.findIndex(
                    (transaction) => transaction.id === action.payload.update_transactions_by_pk.id
                );
                state.allTransactions[index] = action.payload.update_transactions_by_pk;
            }
            catch(error){
                console.log(error.message)
            }
            state.updateToastMessage = {method: "success", message: "Transaction Succesfully Updated"}
        },
    }
});

export const {
    apiRequested,
    updateUserId,
    setPageName,
    setTabName,
    apiRequestFailed,
    resetAddToastMessage,
    resetDeleteToastMessage,
    resetUpdateToastMessage,
    apiAddRequestFailed,
    apiUpdateRequestFailed,
    apiDeleteRequestFailed,
    getTransactions,
    addTransaction,
    updatedTransaction,
    updateAllTypeTransactions,
    removeTransaction,
    showLoginError,
    setLoginError,
    updateDebitCredit,
    onSuccessLogout,
    onSuccessLogin
} = transactionsSlice.actions;
export default transactionsSlice.reducer;

// Action Creators


export const loadTransactions = () => {
    
    const params = {
        "limit": "20",
        "offset": "1"
    }
    const url = "/all-transactions";

    return apiCallBegan({
        url,
        params,
        onStart: apiRequested.type,
        onSuccess: getTransactions.type,
        onError: apiRequestFailed.type,
    });

}

export const addNewTransaction = (data) => {
    const url = "/add-transaction";

    return apiCallBegan({
        url,
        method: "POST",
        data,
        onStart: apiRequested.type,
        onSuccess: addTransaction.type,
        onError: apiAddRequestFailed.type
    });
}

export const updateTransaction = (data) => {
    const url = "/update-transaction";
    return apiCallBegan({
                url,
                method: "POST",
                data,
                onStart: apiRequested.type,
                onError: apiUpdateRequestFailed.type,
                onSuccess: updatedTransaction.type,
            });
}

export const deleteTransaction = (data) => {
    const url = "/delete-transaction";

    return apiCallBegan({
        url,
        method: "DELETE",
        data,
        onStart: apiRequested.type,
        onSuccess: removeTransaction.type,
        onError: apiDeleteRequestFailed.type
    });
}

export const getUserId = (data) => {
    const url = "/get-user-id";

    return getApiCall({
        url,
        method: "POST",
        params: data,
        onLoginFailue: showLoginError.type,
        onError: apiRequestFailed.type,
        onSuccess: onSuccessLogin.type
    });
}

export const getTotalDebitCredits = (role) => {
    let url = '/credit-debit-totals'
    if(role === 'admin') url = "/transaction-totals-admin"

    return apiCallBegan({
        url,
        method: "GET",
        onStart: apiRequested.type,
        onSuccess: updateDebitCredit.type,
        onError: apiRequestFailed.type
    });
}
