const state = () => {
  return {
    userList: [
      {
        id: "1",
        name: "Trần Văn B",
        age: 22,
        email: "helloworld@gmail.com",
        avatar:
          "https://1.bp.blogspot.com/-IYXsyTIazaU/XrP7T-DkUKI/AAAAAAAAkhY/mnBCxRQeOkkXdXhlUfs7IE9fO_3ZTYjzQCLcBGAsYHQ/s1600/Avatar-Nam%2B%252811%2529.jpg",
        typePets: ["Chó", "Mèo"],
      },
      {
        id: "2",
        name: "Nguyễn Văn A",
        age: 22,
        email: "helloworld123@gmail.com",
        avatar:
          "https://1.bp.blogspot.com/-EX8HMfI8kEU/XrP7VSZrKgI/AAAAAAAAkhs/u9IadKsNrxApsZQV5ckbCGb_ijnBhJJSwCLcBGAsYHQ/s1600/Avatar-Nam%2B%252816%2529.jpg",
        typePets: ["Chim", "Cá"],
      },
    ],
    userDetail: null,
  };
};

const mutations = {
  setUserDetailMutation(state, payload) {
    const userDetail = state.userList.find((user) => user.id === payload);
    state.userDetail = userDetail;
  },
};

const actions = {
  getUserByIdAction(context, payload) {
    context.commit("setUserDetailMutation", payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
