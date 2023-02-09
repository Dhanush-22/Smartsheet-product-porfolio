import "./guide.css";

export default function Guide() {
  const imgUrl = "http://localhost:3000/assets/";
  return (
    <>
      <div className="guidebox">
        <div className="guidecontainer">
          <div className="startImg">
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={imgUrl + "guide1.jpg"}
              alt=""
            ></img>
          </div>
          <div className="content">
            <div className="segment">
              <p className="heading1">
                How to use the OpenAI addon Smart Sheet
              </p>
              <p className="heading2">
                You can do many complex things with this Smart Sheet addon in
                Google Sheets. This article walk you through the way in which
                this addon be used.
              </p>
              <div className="listContainer">
                <ul className="listItems">
                  <li className="listItem">
                    Open your google spreadsheet and Install the addon{" "}
                    <strong>Smart Sheet</strong>.
                  </li>
                  <li className="listItem">
                    Find the menu item <strong>Smart Sheet</strong> in the menu
                    bar.
                  </li>
                  <li className="listItem">
                    Click <strong>Smart Sheet</strong> &rarr; <strong>App</strong>
                  </li>
                  <li className="listItem">Grant the permissions required.</li>
                  <li>
                    Once App has clicked, A sidebar will be opened in the
                    spreadsheet with two tab options <strong>Initialize</strong>{" "}
                    and <strong>Run</strong>.
                  </li>
                </ul>
              </div>
            </div>

            <div className="segment">
              <div className="listContainer">
                <h2 style={{ marginTop: "3px", marginBottom: "5px" }}>
                  Initialization
                </h2>
                <ul className="listItems">
                  <li className="listItem" style={{ marginTop: "8px" }}>
                    You need an API key before using OpenAI. For the API key,
                    follow the below steps:
                  </li>
                </ul>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <p className="heading3">API KEY Generation:</p>
                {/* <div className="imgAndContent"> */}
                <div className="listContainer">
                  <ul className="listItems">
                    <li>Sign-Up to Open AI https://beta.openai.com/signup </li>
                    <li>
                      After signing up successfully, get your API key.
                      <div className="listContainer">
                        <ul className="listItems">
                          <li className="listItem">
                            Click on your name at the top-right corner.
                          </li>
                          <li className="listItem">Click on View API Keys</li>
                          <li className="listItem">
                            Click on create new secret key
                          </li>
                          <li className="listItem">Copy the generated key.</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="" style={{paddingLeft: "120px" }}>
                  <img style={{ width: "55%", height: "350px", marginTop: "5px", marginBottom: "5px" }} src={imgUrl + "Untitled.png"} alt=""></img>
                </div>
                {/* </div> */}

              </div>
            </div>

            <div className="segment">
              <div className="listContainer">
                <ul className="listItems">
                  <li className="listItem">
                    Paste the API key in the API input field and then click on
                    Initialize.
                  </li>
                  <div className="" style={{paddingLeft: "80px" }}>
                    <img style={{ width: "55%", height: "350px", marginTop: "5px", marginBottom: "5px" }} src={imgUrl + "Untitled1.png"} alt=""></img>
                  </div>
                  <li className="listItem">
                    Once Initialization has been done, go to the page Run by
                    clicking on the tab Run.
                  </li>
                </ul>
              </div>


            </div>

            <div className="segment" style={{marginTop:"20px"}}>
              <p className="heading1">Demonstration of APP</p>
              <p className="heading2">You can use this APP as required by choosing the appropriate
                Options in the cards ‘Cells’ and ‘Execution’.
                4 configurations are possible and all those configurations are
                demonstrated below:</p>
              <p className="heading2">Configuration 1 :</p>
            </div>

            <div className="segment" style={{marginTop:"20px"}}>
              <p className="heading2">Configuration 2 :</p>
            </div>

            <div className="segment" style={{marginTop:"20px"}}>
              <p className="heading2">Configuration 3 :</p>
            </div>

            <div className="segment" style={{marginTop:"20px"}}>
              <p className="heading2">Configuration 4 :</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
