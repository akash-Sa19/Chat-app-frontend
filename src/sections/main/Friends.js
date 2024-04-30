import { Dialog, DialogContent, Stack, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchFriends,
  FetchFriendsRequests,
  FetchUser,
} from "../../redux/slices/app";

const UsersList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchUser());
  }, []);

  const { users } = useSelector((state) => state.app);

  return (
    <>
      {users.map((el, idx) => {
        // TODO => Render the user component
        return <></>;
      })}
    </>
  );
};
const FriendsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchFriends());
  }, []);

  const { friends } = useSelector((state) => state.app);

  return (
    <>
      {friends.map((el, idx) => {
        // TODO => Render Friend component
        return <></>;
      })}
    </>
  );
};
const FriendRequestList = () => {
  const dispatch = useDispatch();
  const { friendRequests } = useSelector((state) => state.app);
  useEffect(() => {
    dispatch(FetchFriendsRequests());
  }, []);

  return (
    <>
      {friendRequests.map((el, idx) => {
        // TODO => Render the Request component
        return <></>;
      })}
    </>
  );
};

export default function Friends({ open, handleClose }) {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="xs"
        open={open}
        keepMounted
        onClose={handleClose}
        sx={{ p: 4 }}
      >
        <Stack
          p={2}
          sx={{ width: "100%" }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            centered
          >
            <Tab label="Explore" />
            <Tab label="Friends" />
            <Tab label="Requests" />
          </Tabs>
        </Stack>
        {/* Dialog Content */}
        <DialogContent>
          <Stack sx={{ height: "100%" }}>
            <Stack spacing={2.5}>
              {(() => {
                switch (value) {
                  case 0: //display all users
                    return <UsersList />;
                  case 1: // display all friends
                    return <FriendsList />;
                  case 2: // display all friends request
                    return <FriendRequestList />;
                }
              })()}
            </Stack>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
}
