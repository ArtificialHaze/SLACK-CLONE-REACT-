import React from "react";
import { useNavigate } from "react-router-dom";
import { db } from "./firebase";

const SidebarOption = ({ Icon, id, addChannelOption, title }) => {
  const navigate = useNavigate();
  const selectChannel = () => {
    if (id) {
      navigate.push(`/room/${id}`);
    } else {
      navigate.push("title");
    }
  };

  const addChannel = () => {
    const channelName = prompt("Please enter a channel name");

    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash">#</span>
          {title}
        </h3>
      )}
    </div>
  );
};

export default SidebarOption;
