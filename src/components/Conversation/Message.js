import { Box } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import {
  MediaMsg,
  TextMsg,
  Timeline,
  ReplyMsg,
  LinkMsg,
  DocMsg,
} from "./MessageTypes";

export const Message = ({ menu }) => {
  return (
    <Box p={3}>
      {Chat_History.map((el) => {
        switch (el.type) {
          case "divider":
            // Timeline
            return (
              <Timeline
                el={el}
                menu={menu}
              />
            );
          case "msg":
            switch (el.subtype) {
              case "img":
                return (
                  <MediaMsg
                    el={el}
                    menu={menu}
                  />
                );
              case "doc":
                return (
                  <DocMsg
                    el={el}
                    menu={menu}
                  />
                );
              case "link":
                return (
                  <LinkMsg
                    el={el}
                    menu={menu}
                  />
                );
              case "reply":
                return (
                  <ReplyMsg
                    el={el}
                    menu={menu}
                  />
                );
              default:
                return (
                  <TextMsg
                    el={el}
                    menu={menu}
                  />
                );
            }
            break;
        }
      })}
    </Box>
  );
};
