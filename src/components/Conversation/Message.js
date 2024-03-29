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

export const Message = () => {
  return (
    <Box p={3}>
      {Chat_History.map((el) => {
        switch (el.type) {
          case "divider":
            // Timeline
            return <Timeline el={el} />;
          case "msg":
            switch (el.subtype) {
              case "img":
                return <MediaMsg el={el} />;
              case "doc":
                return <DocMsg el={el} />;
              case "link":
                return <LinkMsg el={el} />;
              case "reply":
                return <ReplyMsg el={el} />;
              default:
                return <TextMsg el={el} />;
            }
            break;
        }
      })}
    </Box>
  );
};
