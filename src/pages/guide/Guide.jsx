import "./guide.css";

import g1 from "./guide1.jpg"
import U1 from "./Untitled.png"
import u2 from "./Untitled1.png"
import c1i1 from "./config1img1.jpg"
import c1i2 from "./config1img2.jpg"
import c1i3 from "./config1img3.jpg"
import c2i1 from "./config2img1.jpg"
import c3i1 from "./config3img1.jpg"
import c3i2 from "./config3img2.jpg"
import c3i3 from "./config3img3.jpg"
import c4i1 from "./config4img1.jpg"
import cu1 from "./cusimg1.jpg"
import cu2 from "./cusimg2.jpg"
import cu3 from "./cusimg3.jpg"


export default function Guide() {
  return (
    <>
      <div className="guidebox">
        <div className="guidecontainer">
          <div className="startImg">
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src={g1}
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
                  <img style={{ width: "63%", height: "350px", marginTop: "5px", marginBottom: "5px" }} src={U1} alt=""></img>
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
                    <img style={{ width: "63%", height: "350px", marginTop: "5px", marginBottom: "5px" }} src={u2} alt=""></img>
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
            <div className="segment">
              <div className="listContainer">
                <ul className="listItems">
                  <li className="listItem">
                    Assume I have the following data in my sheet.
                  </li>
                  <li className="listItem">
                    My task is to fill the second column “CEO” with this APP.
                  </li>
                  <div className="" style={{paddingLeft: "80px" }}>
                    <img style={{ width: "63%", height: "350px", marginTop: "5px", marginBottom: "5px" }} src={c1i1} alt=""></img>
                  </div>
                  <li className="listItem">
                    For that we are expected to run this prompt “Who is the CEO of ” for every selected cell and choose proper number of Tokens.
                  </li>
                  <li className="listItem">
                    Enter the prompt and enter number of tokens.
                  </li>
                  <div className="" style={{paddingLeft: "80px" }}>
                    <img style={{ width: "25%", height: "400px", marginTop: "5px", marginBottom: "5px" }} src={c1i2} alt=""></img>
                  </div>
                  <li className="listItem">
                  Now select the cells that are needed to be filled with the OpenAI and check the following options “Selected Cell(s)” and “Once for each cell”
                  </li>
                  <div className="" style={{paddingLeft: "80px" }}>
                    <img style={{ width: "63%", height: "350px", marginTop: "5px", marginBottom: "5px" }} src={c1i3} alt=""></img>
                  </div>
                  <li className="listItem">
                    Click on Run.
                  </li>
                  <div className="LinkItem">
                    <a href="https://s3-us-west-2.amazonaws.com/secure.notion-static.com/de41d3e0-57fc-4d2f-8d1d-5ed09e9e785e/Untitled.mp4">https://s3-us-west-2.amazonaws.com/secure.notion-static.com/de41d3e0-57fc-4d2f-8d1d-5ed09e9e785e/Untitled.mp4</a>
                  </div>
                  <li className="listItem">
                    The above configuration is suitable when you need to fill values in only selected cells and no need to fill the entire column.
                  </li>
                </ul>
              </div>
            </div>
            <div className="segment" style={{marginTop:"20px"}}>
              <p className="heading2">Configuration 2 :</p>
            </div>
            <div className="segment">
              <div className="listContainer">
                <ul className="listItems">
                  <li className="listItem">
                    You can also do the same thing that has shown above by choosing the options “Select by column”  {">"} Select header and “Once for each cell”. This configuration is helpful when the entire column is to be filled.
                  </li>
                  <div className="" style={{paddingLeft: "80px" }}>
                    <img style={{ width: "25%", height: "400px", marginTop: "5px", marginBottom: "5px" }} src={c2i1} alt=""></img>
                  </div>
                </ul>
              </div>
            </div>
            <div className="segment" style={{marginTop:"20px"}}>
              <p className="heading2">Configuration 3 :</p>
            </div>  
            <div className="segment">
              <div className="listContainer">
                <ul className="listItems">
                  <li className="listItem">
                    Assume I have the following data in my sheet.
                  </li>
                  <li className="listItem">
                    My task is to find the weighted average of the data.
                  </li>
                  <li className="listItem">
                    For that, select the cells & enter appropriate prompt.
                  </li>
                  <div className="" style={{paddingLeft: "80px" }}>
                    <img style={{ width: "63%", height: "350px", marginTop: "5px", marginBottom: "5px" }} src={c3i1} alt=""></img>
                  </div>
                  <li className="listItem">
                    Choose the appropriate options and click on Run.
                  </li>
                  <div className="" style={{paddingLeft: "80px" }}>
                    <img style={{ width: "25%", height: "400px", marginTop: "5px", marginBottom: "5px" }} src={c3i2} alt=""></img>
                  </div>
                  <div>
                    <p className="heading4">Result:</p>
                  </div>
                  <div className="" style={{paddingLeft: "80px" }}>
                    <img style={{ width: "63%", height: "350px", marginTop: "5px", marginBottom: "5px" }} src={c3i3} alt=""></img>
                  </div>
                </ul>
              </div>
            </div>
            <div className="segment" style={{marginTop:"20px"}}>
              <p className="heading2">Configuration 4 :</p>
            </div>
            <div className="segment">
              <div className="listContainer">
                <ul className="listItems">
                  <li className="listItem">
                    Assume I have the following data in my sheet.
                  </li>
                  <li className="listItem">
                    My task is to filter the mobile company names from the column1.
                  </li>
                  <li className="listItem">
                    For that, enter appropriate prompt “Get all mobile companies from the following: “.
                  </li>
                  <li className="listItem">
                    Select the options “select an entire column” and “Once for selection”.
                  </li>
                  <li className="listItem">
                    Click on Run.
                  </li>
                  <div className="" style={{paddingLeft: "80px" }}>
                    <img style={{ width: "63%", height: "350px", marginTop: "5px", marginBottom: "5px" }} src={c4i1} alt=""></img>
                  </div>
                </ul>
              </div>
            </div>
            <div className="segment" style={{marginTop:"20px"}}>
              <p className="heading2">Custom Function </p>
            </div>
            <div className="segment">
              <div className="listContainer">
                <ul className="listItems">
                  <li className="listItem">
                    runOpenAI(prompt)
                  </li>
                  <li className="listItem">
                    Usage:
                  </li>
                  <div className="" style={{paddingLeft: "80px" }}>
                    <img style={{ width: "70%", height: "400px", marginTop: "5px", marginBottom: "5px" }} src={cu1} alt=""></img>
                  </div>
                  <li className="listItem">
                    Hit enter
                  </li>
                  <div className="" style={{paddingLeft: "80px" }}>
                    <img style={{ width: "70%", height: "400px", marginTop: "5px", marginBottom: "5px" }} src={cu2} alt=""></img>
                  </div>
                  <li className="listItem">
                    Parameter passing :
                  </li>
                  <li className="listItem">
                    Use concat() whenever needed to attach some parameter.
                  </li>
                  <div className="" style={{paddingLeft: "80px" }}>
                    <img style={{ width: "70%", height: "400px", marginTop: "5px", marginBottom: "5px" }} src={cu3} alt=""></img>
                  </div>
                  <li className="listItem">
                    Then drag the result of one cell to apply the same function to other companies.
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
