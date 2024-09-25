import React from "react";
import MatrimonialForm from "../components/CreateCV/MatrimonialForm";
import Header from "../components/header";
//import '../styles/MatrimonialForm.css';

function Chat() {
  return (
    <>
    <div className={styles.container}>
      {/* Page header start */}
      <div className={styles.pageTitle}>
        <div className={styles.row}>
          <div className={`${styles.colXl6} ${styles.colLg6} ${styles.colMd6} ${styles.colSm12} ${styles.col12}`}>
            <h5 className={styles.title}>Chat App</h5>
          </div>
          <div className={`${styles.colXl6} ${styles.colLg6} ${styles.colMd6} ${styles.colSm12} ${styles.col12}`}></div>
        </div>
      </div>
      {/* Page header end */}

      {/* Content wrapper start */}
      <div className={styles.contentWrapper}>
        {/* Row start */}
        <div className={styles.row}>
          <div className={`${styles.colXl12} ${styles.colLg12} ${styles.colMd12} ${styles.colSm12} ${styles.col12}`}>
            <div className={styles.card}>
              {/* Row start */}
              <div className={styles.row}>
                <div className={`${styles.colXl4} ${styles.colLg4} ${styles.colMd4} ${styles.colSm3} ${styles.col3}`}>
                  <div className={styles.usersContainer}>
                    <div className={styles.chatSearchBox}>
                      <div className={styles.inputGroup}>
                        <input
                          className={styles.formControl}
                          placeholder="Search"
                          type="text"
                        />
                        <div className={styles.inputGroupBtn}>
                          <button type="button" className={`${styles.btn} ${styles.btnInfo}`}>
                            <i className={`${styles.fa} ${styles.faSearch}`}></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <ul className={styles.users}>
                      <li className={styles.person} data-chat="person1">
                        <div className={styles.user}>
                          <img
                            src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                            alt="Retail Admin"
                          />
                          <span className={`${styles.status} ${styles.busy}`}></span>
                        </div>
                        <p className={styles.nameTime}>
                          <span className={styles.name}>Steve Bangalter</span>
                          <span className={styles.time}>15/02/2019</span>
                        </p>
                      </li>
                      <li className={styles.person} data-chat="person1">
                        <div className={styles.user}>
                          <img
                            src="https://www.bootdey.com/img/Content/avatar/avatar1.png"
                            alt="Retail Admin"
                          />
                          <span className={`${styles.status} ${styles.offline}`}></span>
                        </div>
                        <p className={styles.nameTime}>
                          <span className={styles.name}>Steve Bangalter</span>
                          <span className={styles.time}>15/02/2019</span>
                        </p>
                      </li>
                      <li className={`${styles.person} ${styles.activeUser}`} data-chat="person2">
                        <div className={styles.user}>
                          <img
                            src="https://www.bootdey.com/img/Content/avatar/avatar2.png"
                            alt="Retail Admin"
                          />
                          <span className={`${styles.status} ${styles.away}`}></span>
                        </div>
                        <p className={styles.nameTime}>
                          <span className={styles.name}>Peter Gregor</span>
                          <span className={styles.time}>12/02/2019</span>
                        </p>
                      </li>
                      <li className={styles.person} data-chat="person3">
                        <div className={styles.user}>
                          <img
                            src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                            alt="Retail Admin"
                          />
                          <span className={`${styles.status} ${styles.busy}`}></span>
                        </div>
                        <p className={styles.nameTime}>
                          <span className={styles.name}>Jessica Larson</span>
                          <span className={styles.time}>11/02/2019</span>
                        </p>
                      </li>
                      <li className={styles.person} data-chat="person4">
                        <div className={styles.user}>
                          <img
                            src="https://www.bootdey.com/img/Content/avatar/avatar4.png"
                            alt="Retail Admin"
                          />
                          <span className={`${styles.status} ${styles.offline}`}></span>
                        </div>
                        <p className={styles.nameTime}>
                          <span className={styles.name}>Lisa Guerrero</span>
                          <span className={styles.time}>08/02/2019</span>
                        </p>
                      </li>
                      <li className={styles.person} data-chat="person5">
                        <div className={styles.user}>
                          <img
                            src="https://www.bootdey.com/img/Content/avatar/avatar5.png"
                            alt="Retail Admin"
                          />
                          <span className={`${styles.status} ${styles.away}`}></span>
                        </div>
                        <p className={styles.nameTime}>
                          <span className={styles.name}>Michael Jordan</span>
                          <span className={styles.time}>05/02/2019</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={`${styles.colXl8} ${styles.colLg8} ${styles.colMd8} ${styles.colSm9} ${styles.col9}`}>
                  <div className={styles.selectedUser}>
                    <span>
                      To: <span className={styles.name}>Emily Russell</span>
                    </span>
                  </div>
                  <div className={styles.chatContainer}>
                    <ul className={`${styles.chatBox} ${styles.chatContainerScroll}`}>
                      <li className={styles.chatLeft}>
                        <div className={styles.chatAvatar}>
                          <img
                            src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                            alt="Retail Admin"
                          />
                          <div className={styles.chatName}>Russell</div>
                        </div>
                        <div className={styles.chatText}>
                          Hello, I'm Russell.
                          <br />
                          How can I help you today?
                        </div>
                        <div className={styles.chatHour}>
                          08:55 <span className={`${styles.fa} ${styles.faCheckCircle}`}></span>
                        </div>
                      </li>
                      <li className={styles.chatRight}>
                        <div className={styles.chatHour}>
                          08:56 <span className={`${styles.fa} ${styles.faCheckCircle}`}></span>
                        </div>
                        <div className={styles.chatText}>
                          Hi, Russell
                          <br /> I need more information about Developer Plan.
                        </div>
                        <div className={styles.chatAvatar}>
                          <img
                            src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                            alt="Retail Admin"
                          />
                          <div className={styles.chatName}>Sam</div>
                        </div>
                      </li>
                      {/* More chat messages can go here */}
                    </ul>
                    <div className={`${styles.formGroup} ${styles.mt3} ${styles.mb0}`}>
                      <textarea
                        className={styles.formControl}
                        rows="3"
                        placeholder="Type your message here..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              {/* Row end */}
            </div>
          </div>
        </div>
        {/* Row end */}
      </div>
      {/* Content wrapper end */}
    </div>
  </>
  );
}

export default Chat;


const styles = {
    chatSearchBox: {
      WebkitBorderRadius: "3px 0 0 0",
      MozBorderRadius: "3px 0 0 0",
      borderRadius: "3px 0 0 0",
      padding: ".75rem 1rem",
    },
    chatSearchBoxInputGroup: {
      formControl: {
        WebkitBorderRadius: "2px 0 0 2px",
        MozBorderRadius: "2px 0 0 2px",
        borderRadius: "2px 0 0 2px",
        borderRight: "0",
        focus: {
          borderRight: "0",
        },
      },
      inputGroupBtn: {
        btn: {
          WebkitBorderRadius: "0 2px 2px 0",
          MozBorderRadius: "0 2px 2px 0",
          borderRadius: "0 2px 2px 0",
          margin: "0",
          i: {
            fontSize: "1.2rem",
            lineHeight: "100%",
            verticalAlign: "middle",
          },
        },
      },
    },
    "@media (max-width: 767px)": {
      chatSearchBox: {
        display: "none",
      },
    },
    usersContainer: {
      position: "relative",
      padding: "1rem 0",
      borderRight: "1px solid #e6ecf3",
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    users: {
      padding: "0",
      person: {
        position: "relative",
        width: "100%",
        padding: "10px 1rem",
        cursor: "pointer",
        borderBottom: "1px solid #f0f4f8",
        hover: {
          backgroundColor: "#ffffff",
          backgroundImage: "linear-gradient(right, #e9eff5, #ffffff)",
        },
        activeUser: {
          backgroundColor: "#ffffff",
          backgroundImage: "linear-gradient(right, #f7f9fb, #ffffff)",
        },
        lastChild: {
          borderBottom: "0",
        },
        user: {
          display: "inline-block",
          position: "relative",
          marginRight: "10px",
          img: {
            width: "48px",
            height: "48px",
            WebkitBorderRadius: "50px",
            MozBorderRadius: "50px",
            borderRadius: "50px",
          },
          status: {
            width: "10px",
            height: "10px",
            WebkitBorderRadius: "100px",
            MozBorderRadius: "100px",
            borderRadius: "100px",
            background: "#e6ecf3",
            position: "absolute",
            top: "0",
            right: "0",
            online: {
              background: "#9ec94a",
            },
            offline: {
              background: "#c4d2e2",
            },
            away: {
              background: "#f9be52",
            },
            busy: {
              background: "#fd7274",
            },
          },
        },
        nameTime: {
          fontWeight: "600",
          fontSize: ".85rem",
          display: "inline-block",
          time: {
            fontWeight: "400",
            fontSize: ".7rem",
            textAlign: "right",
            color: "#8796af",
          },
        },
      },
    },
    chatContainer: {
      position: "relative",
      padding: "1rem",
      chatLeft: {
        display: "flex",
        flexDirection: "row",
        marginBottom: "40px",
        img: {
          width: "48px",
          height: "48px",
          WebkitBorderRadius: "30px",
          MozBorderRadius: "30px",
          borderRadius: "30px",
        },
        chatAvatar: {
          marginRight: "20px",
        },
        chatName: {
          fontSize: ".75rem",
          color: "#999999",
          textAlign: "center",
        },
        chatText: {
          padding: ".4rem 1rem",
          WebkitBorderRadius: "4px",
          MozBorderRadius: "4px",
          borderRadius: "4px",
          background: "#ffffff",
          fontWeight: "300",
          lineHeight: "150%",
          position: "relative",
          before: {
            content: "''",
            position: "absolute",
            width: "0",
            height: "0",
            top: "10px",
            left: "-20px",
            border: "10px solid",
            borderColor: "transparent #ffffff transparent transparent",
          },
        },
        chatHour: {
          padding: "0",
          marginBottom: "10px",
          fontSize: ".75rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 0 0 15px",
          span: {
            fontSize: "16px",
            color: "#9ec94a",
          },
        },
      },
      chatRight: {
        justifyContent: "flex-end",
        chatAvatar: {
          marginLeft: "20px",
          marginRight: "0",
        },
        chatText: {
          textAlign: "right",
          before: {
            right: "-20px",
            borderColor: "transparent transparent transparent #ffffff",
            left: "inherit",
          },
        },
        chatHour: {
          margin: "0 15px 0 0",
        },
      },
    },
    chatForm: {
      padding: "15px",
      width: "100%",
      left: "0",
      right: "0",
      bottom: "0",
      backgroundColor: "#ffffff",
      borderTop: "1px solid white",
    },
    card: {
      border: "0",
      background: "#f4f5fb",
      WebkitBorderRadius: "2px",
      MozBorderRadius: "2px",
      borderRadius: "2px",
      marginBottom: "2rem",
      boxShadow: "none",
    },
    ul: {
      listStyleType: "none",
      margin: "0",
      padding: "0",
    },
  };
  
  