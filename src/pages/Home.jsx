import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../style.css";
import insta from "../assets/insta.gif"


function App() {
  useEffect(() => {
    const form = document.getElementById("chat-form");
    const chatLog = document.getElementById("chat-log");

    function loadMessages() {
      const saved = localStorage.getItem("chat-log");
      if (saved) chatLog.innerHTML = saved;
    }

    function saveMessages() {
      localStorage.setItem("chat-log", chatLog.innerHTML);
    }

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value || "anon";
        const msg = document.getElementById("message").value;
        if (msg.trim() === "") return;

        const entry = `[${new Date().toLocaleTimeString()}] <${username}> ${msg}<br />`;
        chatLog.innerHTML += entry;
        saveMessages();
        form.reset();
      });
    }

    loadMessages();
  }, []);

  return (
    <div>
      {/* cursed bgm embed */}
      <embed src="/bgm.mp3" hidden={true} autoPlay loop />

      <div className="marquee">
        <marquee behavior="alternate" scrollAmount="10">
          WELCOME TO MY TRASH PALACE
        </marquee>
      </div>

      {/* spam sky hell */}
      <img src="/sky.gif" alt="bg" />
      <img src="/sky.gif" alt="bg" />
      <img src="/sky.gif" alt="bg" />
      <img src="/sky.gif" alt="bg" />
      <br />

      <div className="container">
        <h1 className="blinky">this site is under HEAVY CONSTRUCTION</h1>
        <h1 className="blinky">(depends on my teach tbh)</h1>
        <h1 className="blinky">(can someone tell me how to make a functioning chatroom without logins so its just username and a message)</h1>

        <p>
          hi lol im aria,dirma,budi,fahri whatever you want to call me
        </p>
        <p>
          i like old sttuff, you prolly figured that out already from all the old looking gifs unless youre a dumbass with the iq of a (censored for school purpose)ing rock
        </p>
        <p>
          im still learning stuff- im seventeen. my discord is <b>dirma</b> if you wanna chat or sumt
        </p>
        <p>
          i use arch linux and windows but usually i use arch because it keeps my lappy cold and i can straight up kill my dgpu
        </p>
        <p>
        revert to clippy
        </p>
        <p>
<Link to="/breakfree">how to be free from ads and paywalls</Link>

        </p>
        <br />


        <table>
          <tbody>
            <tr>
              <td valign="center">
                <p>things i did</p>
                --------------------------------------------------------------------- <br />
                <a href="https://github.com/Dirma-dayo/snekpitin/archive/refs/heads/main.zip" target="_blank">
                  i remade snake in python because funy (istg its not a virus)
                </a>
                <img
                  src="https://web.archive.org/web/20090902001835/http://geocities.com/mrjoshito/giantsnake.gif"
                  alt="snek"
                  title="its a snek"
                  width="50"
                  height="50"
                />
              </td>
              <td valign="top">
                <p>
                  <b>hmu</b>
                </p>
                --------------------------------------------------------------------- <br />
                my{" "}
                <a href="https://steamcommunity.com/id/aria-neechan/" target="_blank">
                  steam
                </a>{" "}
                page! wanna{" "}
                <span style={{ color: "pink" }}>pl</span>
                <span style={{ color: "white" }}>a</span>
                <span style={{ color: "#6ec2ff" }}>y?</span>
                <img
                  src="https://web.archive.org/web/20091026184906/http://geocities.com/SiliconValley/Peaks/3609/joystick.gif"
                  alt="its a stick"
                  title="lets play 2gether :3"
                  width="50"
                  height="50"
                />
                <br />
                
                <a href="https://www.instagram.com/arianeechan/" target="_blank">
                insta!
                  <img
                  src={insta}
                  width="50"
                  height="50"
                />
                  
                </a>{" "}

              </td>
            </tr>
          </tbody>
        </table>

        <br />
<br /><br /><br /><br />
        <img
          src="https://avatars.fastly.steamstatic.com/513d0f0d16e30626d1769509eef44500299b1ec7_full.jpg"
          alt="me"
          width="146"
          height="146"
        />

        <p style={{ animation: "rainbow 1s infinite alternate" }}>
          ame chan is my wife kangel is my love
        </p>

        <p style={{ fontSize: "12px" }}>© 2008–2025 ur local net gremlin</p>
      </div>

      <div id="bonzi-container">
        <img
          id="bonzi"
          src="/killeveryone"
          alt="click me for sins"
          style={{ cursor: "pointer" }}
        />
        <div id="bonzi-speech">hi im definitely not spyware click me for infinite funsies</div>
      </div>

      <p>CHATROOM WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO (single player tho so lol)</p>
      <img
        src="https://web.archive.org/web/20090820121919/http://geocities.com/jaysite2000/Computerturning.gif"
        alt="its a compy"
        title="its a compy"
      />

      <div className="chatbox-container">
        <form id="chat-form">
          <input type="text" id="username" placeholder="ur name..." required />
          <textarea id="message" placeholder="say sumthin..." required />
          <button type="submit">submit</button>
        </form>

        <div id="chat-log" className="chat-log"></div>
      </div>
    </div>
  );
}

export default App;
