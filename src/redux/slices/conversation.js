import { faker } from "@faker-js/faker";
import { createSlice } from "@reduxjs/toolkit";

const user_id = window.localStorage.getItem("user_id");

const initialState = {
  direct_chat: {
    conversations: [],
    current_conversation: null,
    current_message: [],
  },
  group_chat: {},
};

const slice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    fetchDirectConversations(state, action) {
      const list = action.payload.consversations.map((el) => {
        const this_user = el.participants.find(
          (elm) => elm._id.toString() !== user_id
        );

        return {
          id: el._id, //conversation id
          user_id: this_user?._id, // the person to whome we are chatting
          name: `${this_user?.firstName} ${this_user?.lastName}`, // fullName of the person to whome we are chatting
          online: this_user.status === "Online",
          img: faker.image.avatar(),
          msg: "apple",
          time: "9:36",
          unread: 0,
          pinned: false,
        };
      });

      state.direct_chat.conversations = list;
    },
  },
});

export default slice.reducer;

// ----------------------------------------
// thunk function

export const FetchDirectConversation = ({ conversations }) => {
  return async (dispatch, getState) => {
    dispatch(slice.actions.fetchDirectConversations({ conversations }));
  };
};
