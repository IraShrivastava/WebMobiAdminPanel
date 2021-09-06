import { useState } from "react";
import Collapse from "@material-ui/core/Collapse";
import { Switch } from "@material-ui/core";
import { BiConversation } from "react-icons/bi"
import styles from "./SettingDetails.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Button from 'react-bootstrap/Button';

function SettingDetails(props) {
  const settings = [
    {
      head: "Moderation",
      desc: "Easily review all questions before they go live",
    },
    {
      head: "Labels",
      desc: "Categorize and filter questions",
    },
    {
      head: "Downvotes",
      desc: "Enable downvoting of questions"
    },
    {
      head: "Replies",
      desc: "Allow participants to reply to or comment on the questions"
    },
    {
      head: "Anonymous questions",
      desc: "Let your participants send anonymous questions"
    },
    {
      head: "Maximum question length",
      desc: "Show number of votes instead of percentage"
    },
    {
      btns: [160,240,300]
    },
    {
      head: "Close questions",
      desc: "Prevent the participants from sending new questions to your event"
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.content}>
      <div className={styles.closeSection}>
        <AiOutlineCloseCircle className={styles.closeIcon} />
      </div>
      <div className={styles.settingItem}>
        <h2 className={styles.header}>
          <>
            <BiConversation style={{ fontSize: "1.15em" }} />
            {props.heading + "\t"}
          </>
        </h2>
        <Switch onClick={() => setIsOpen(!isOpen)} />
      </div>
      <Collapse collapsedSize={"0"} in={isOpen}>
        {settings.map((item, index) => {
          return (
            <div className={styles.settingItem} key={index}>
              {!item.btns && <div className="setting-info">
                <h4 className={styles.settingHeading}>{item.head}</h4>
                <p className={styles.settingDesc}>{item.desc}</p>
              </div>}
              {!item.btns && <div className="switch-container">
                <Switch color="primary" />
              </div>}
              {item.btns && 
                <div className={styles.btngrp}> 
                    {item.btns.map(btnItem =>{
                      return <Button variant="outline-*" className={styles.btnSet} key={btnItem} active>{btnItem}</Button>
                      })}
                </div>     
              }
            </div>
          );
        })}
        <div className={styles.saveSection}>
            <>
              <Button variant="primary" className={styles.saveBtn}>Save</Button>{' '}
            </>
        </div>
      </Collapse>
    </div>
  );
}

export default SettingDetails;

