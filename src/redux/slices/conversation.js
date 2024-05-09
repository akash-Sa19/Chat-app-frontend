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
      // the error was here it was a grametical mistake
      // "consversation" -> insted of "conversation"
      const list = action.payload.conversations.map((el) => {
        const user = el.participants.find(
          (elm) => elm._id.toString() !== user_id
        );

        return {
          id: el._id, //conversation id
          user_id: user?._id, // the person to whome we are chatting
          name: `${user?.firstName} ${user?.lastName}`, // fullName of the person to whome we are chatting
          online: user.status === "Online",
          img: faker.image.avatar(),
          msg: "apple",
          time: "9:36",
          unread: 0,
          pinned: false,
        };
      });

      console.log("redux/slice/conversation/line38 -> ", list);

      state.direct_chat.conversations = list;
    },
    updateDirectConversation(state, action) {
      // data= {}
      // list.map((el) => el.id === data._id ? data : el)

      const this_conversation = action.payload.consversation;
      state.direct_chat.conversations = state.direct_chat.conversations.map(
        (el) => {
          if (el.id !== this_conversation._id) {
            return el;
          } else {
            const user = this_conversation.participats.find(
              (elm) => elm._id.toString() !== user_id
            );

            return {
              id: this.conversation._id, //conversation id
              user_id: user?._id, // the person to whome we are chatting
              name: `${user?.firstName} ${user?.lastName}`, // fullName of the person to whome we are chatting
              online: user.status === "Online",
              img: faker.image.avatar(),
              msg: "mango",
              time: "9:36",
              unread: 0,
              pinned: false,
            };
          }
        }
      );
    },
    addDirectConversation(state, action) {
      // list.push(data)
      const this_conversation = action.payload.consversation;
      const user = this_conversation.participants.find(
        (elm) => elm._id.toString() !== user_id
      );
      state.direct_chat.conversations.push({
        id: this_conversation._id, //conversation id
        user_id: user?._id, // the person to whome we are chatting
        name: `${user?.firstName} ${user?.lastName}`, // fullName of the person to whome we are chatting
        online: user.status === "Online",
        img: faker.image.avatar(),
        msg: "banana",
        time: "9:36",
        unread: 0,
        pinned: false,
      });
    },
  },
});

export default slice.reducer;

// -------------------------------------------------------------------
// thunk function

export const FetchDirectConversation = ({ conversations }) => {
  return async (dispatch, getState) => {
    dispatch(slice.actions.fetchDirectConversations({ conversations }));
  };
};
export const AddDirectConversation = ({ conversation }) => {
  return async (dispatch, getState) => {
    dispatch(slice.actions.addDirectConversation({ conversation }));
  };
};
export const UpdateDirectConversation = ({ conversation }) => {
  return async (dispatch, getState) => {
    dispatch(slice.actions.updateDirectConversation({ conversation }));
  };
};
