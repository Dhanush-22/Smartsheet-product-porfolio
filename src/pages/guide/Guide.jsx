import "./guide.css"

export default function Guide() {
  const imgUrl = 'http://localhost:3000/assets/';
  return (
    <>
    <div className="guidebox">
      <div className="guidecontainer" >
          <div className="imgpar">
            <img src={imgUrl+'guide1.jpg'} alt = "" ></img>
          </div>
          <div className="head1">
            <h1>How to use the OpenAI addon ABC</h1>
            <h2>You can do many complex things with this ABC addon in Google Sheets. This article walk you through the way in which this addon be used.</h2>
          </div>
          <div className="proclist">
            <ul>
              <li>Open your google spreadsheet and Install this Addon ABC.</li>
              <li>Find the menu item “OpenAI” in the menu bar.</li>
              <li>Click OpenAI - App</li>
              <li>Grant the permissions required.</li>
              <li>Once App has clicked, A sidebar will be opened in the spreadsheet with two tab options “Initialize” and “Run”.</li>
            </ul>
          </div>

          <div><h2>Initialization</h2></div>
          <div>
            <ul><li>You need an API key before using OpenAI. For the API key, follow the below steps:</li></ul>
          </div>
          <div><h3>API KEY Generation:</h3></div>
          <div className="apikeygen">
              <ul>
                <li>Sign-Up to Open AI https://beta.openai.com/signup </li>
                <li>
                  After signing up successfully, get your API key.
                  <div className="getapikey">
                  <ul>
                    <li>Click on your name at the top-right corner.</li>
                    <li>Click on View API Keys</li>
                    <li>Click on create new secret key</li>
                    <li>Copy the generated key.</li>
                  </ul>
                  </div>
                </li>
                <div className="imgpar">
                  <img src={imgUrl+'guide2.jpg'} alt = "" ></img>
                </div>
                <li>Paste the API key in the API input field and then click on Initialize.</li>
                <div className="imgpar">
                  <img src={imgUrl+'guide3.jpg'} alt = "" ></img>
                </div>
                <li>Once Initialization has been done, go to the page Run by clicking on the tab Run.</li>
              </ul>
          </div> 
          <div>

          </div>         
      </div>
    </div>
    </>
  )
}
