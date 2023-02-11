function state() {
    return {
      users: [],
      selfUser: null,
      isLoading: false,
      selectedUser: {},
      token: null,
      selectedUserId: null
    };
  }

export default state;