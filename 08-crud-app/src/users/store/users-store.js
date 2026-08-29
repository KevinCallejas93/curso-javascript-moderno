

const state = {
  currentPage: 0,
  users: [],
};

const loadNextPage = async() => {
  
};

const loadPreviuousPage = async() => {
  
};

const onUserChanged = async() => {
  throw new Error('Not implemented');
  
};


const reloadPage = async() => {
  
};


export default {
    loadNextPage,
    loadPreviuousPage,
    onUserChanged,
    reloadPage,

    getUsers: () => [...state.users],
    getCurrentPage: () => state.currentPage,
    
}