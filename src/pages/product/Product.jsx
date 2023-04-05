import "./product.css"

import {CheckCircleOutlineOutlined, PanoramaFishEyeOutlined} from  "@mui/icons-material"


export default function Product() {
  const imgUrl = "http://localhost:3000/assets/";
  return (
    <>
      <div className="productContainer">
        <div className="segment" style={{marginTop:"20px"}}>
            <p className="heading1" >Smart Sheet<br/><hr/> </p>
        </div>
        <div class="text">
          <p>Smart Sheet is a great tool for users who need to generate large volumes of data quickly and easily. Whether you're a data analyst, researcher, or just need to fill in a large spreadsheet with generated data, Smart Sheet can help you get the job done efficiently.                                      With Smart Sheet, users can easily enter their OpenAI API key in the sidebar and use the provided prompt to generate data. The generated data can be automatically filled in selected cells or columns in Google Sheets based on the selected options such as number of tokens or selected cells.                                                                Try Smart Sheet today and experience the power of OpenAI's API combined with the ease and convenience of Google Sheets!</p>
        </div>
        <div className="segment" style={{marginTop:"20px"}}>
            <p className="heading2" >Existing Features<br/><hr/> </p>
        </div>
        <div className="segment">
          <div className="listcontainer">
            <div className="leftitems">
              <ul className="items">
                <li className="item"><div className="circel"><CheckCircleOutlineOutlined/></div>
                Sidebar
                </li>
                <li className="item"><div className="circel"><CheckCircleOutlineOutlined/></div>
                GPT3 Integration
                </li>
                <li className="item"><div className="circel"><CheckCircleOutlineOutlined/></div>
                Selected Cell/Column
                </li>
                <li className="item"><div className="circel"><CheckCircleOutlineOutlined/></div>
                MongoDB Integration
                </li>
                <li className="item"><div className="circel"><CheckCircleOutlineOutlined/></div>
                OAuth Authentication
                </li>
              </ul>
            </div>
            <div className="rightitems">
              <ul className="items">
                <li className="item"><div className="circel"><CheckCircleOutlineOutlined/></div>
                Product Portfolio Website
                </li>
                <li className="item"><div className="circel"><CheckCircleOutlineOutlined/></div>
                React and Google Apps Script Integration
                </li>
                <li className="item"><div className="circel"><CheckCircleOutlineOutlined/></div>
                Configurable Options
                </li>
                <li className="item"><div className="circel"><CheckCircleOutlineOutlined/></div>
                Easy to Use
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="segment" style={{marginTop:"20px"}}>
            <p className="heading2" >Upcoming Features<br/><hr/> </p>
        </div>
        <div className="segment">
          <div className="listcontainer">
            <div className="leftitems">
              <ul className="items">
                <li className="item"><div className="circel"><PanoramaFishEyeOutlined/></div>
                GPT4 Integration
                </li>
                <li className="item"><div className="circel"><PanoramaFishEyeOutlined/></div>
                Customizable templates
                </li>
                <li className="item"><div className="circel"><PanoramaFishEyeOutlined/></div>
                Multiple API key support
                </li>
                <li className="item"><div className="circel"><PanoramaFishEyeOutlined/></div>
                Data validation
                </li>
                <li className="item"><div className="circel"><PanoramaFishEyeOutlined/></div>
                Improved user interface
                </li>
              </ul>
            </div>
            <div className="rightitems">
              <ul className="items">
                <li className="item"><div className="circel"><PanoramaFishEyeOutlined/></div>
                Collaboration features
                </li>
                <li className="item"><div className="circel"><PanoramaFishEyeOutlined/></div>
                Integration with other tools
                </li>
                <li className="item"><div className="circel"><PanoramaFishEyeOutlined/></div>
                More Data Sources
                </li>
                <li className="item"><div className="circel"><PanoramaFishEyeOutlined/></div>
                Option to chose GPT or BARD
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="segment">
          <div className="listcontainer">
            <div>
            <div className="heading2" >
            Uniqueness of the product:
            </div>
            </div>
          </div>
        </div>
        <div className="segment">
          <div className="listcontainer">
            <ol className="olitems" type="1">
              <li className="olitem">
                <b>Integration with OpenAI API: </b>
                Smart Sheet is one of the few tools that integrate with the OpenAI API, allowing users to generate data using advanced AI language models.
              </li>
              <li className="olitem">
                <b>Ease of use: </b>
                Smart Sheet is designed to be easy to use, with a simple interface that lets users quickly generate data without needing to know how to code.
              </li>
              <li className="olitem">
                <b>Customization: </b>
                 Smart Sheet offers users the ability to customize the data they generate by selecting various options such as the number of tokens or the type of data to generate.
              </li>
              <li className="olitem">
                <b>Seamless integration with Google Sheets: </b>
                 Smart Sheet integrates seamlessly with Google Sheets, allowing users to fill in generated data automatically in selected cells or columns.
              </li>
              <li className="olitem">
                <b>Time-saving: </b>
                 Smart Sheet saves users time by automating the process of generating data, enabling users to complete large volumes of work quickly and efficiently.
              </li>
            </ol>
          </div>
        </div>
      </div>

    </>
  )
}
