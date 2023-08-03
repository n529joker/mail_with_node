const mailTemplate = (oid, item, price, name, telephone, date, payMethod) => {
  const msg = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhmtl1/DTD/xhtml1-transitional.dtd">
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <!--[if mso]>
        <noscript>
          <xml>
            <o:OfficeDocumentSettings>
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml>
        </noscript>
      <![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="format-detection" content="telephone=no" />
      <meta
        name="viewport"
        content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=no;"
      />
      <meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; I7; IE=EDGE" />
      <style type="text/css">
        th,
        td {
          text-align: center;
          padding: 8px;
          border-bottom: 1px solid #000000 !important;
        }
        tr:nth-child(even), th{
          background-color: #f2f2f2 !important;
        }
        @media screen and (max-width: 630px) {
          .desc{
            flex-direction: column;
          }
          .desc h2{
            font-size: 22px;
          }
          img{
            height:60px;
            width:80px;
          }
          .icon{
            height: 50px;
            width: 50px;
          }
        }
        @media screen and (max-width: 400px) {
          .desc{
            flex-direction: column;
          }
          .desc h2{
            font-size: 18px;
          }
          img{
            height:50px;
            width:70px;
          }
          .more{
            height: 45px;
          }
          hr{
            height:1px;
            width: 100%;
          }
          .details{
            font-size:0.7em;
          }
        }
        @media screen and (min-width: 630px) {
          .desc h2{
            font-size: 2.2em;
          }
          .icon{
            height: 60px;
            width: 60px;
          }
          .more{
            height: 60px;
          }
          .details{
            font-size:1em;
          }
        }
      </style>
      <script
      src="https://kit.fontawesome.com/39bd36ffe7.js"
      crossorigin="anonymous"
    ></script>
    </head>
    <body
      style="
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        padding: 0;
        box-sizing: border-box;
        -background: rgb(3, 39, 77);
        width: 80vw;
        margin: auto;
      "
    >
    <div class="outer">
      <div
          class="desc"
          style="
            display: flex;
            justify-content: space-around;
            align-items: center;
          "
        >
          <img
            src="https://residencemg.co/assets/Residence-MG-Logo-a930156c.png"
          />
          <h2
            class="text-center"
            style="
              font-weight: 800;
              color: rgb(3, 46, 93);
              text-align: center;
            "
          >
            Payment Receipt
          </h2>
          <div
            class="icon"
            style="
              background: rgba(2, 200, 137, 0.662);
              border-radius: 100%;
              position: relative;
            "
          >
            <p>
              <i
                class="fa-solid fa-check fa-2xl"
                style="position: absolute; top: 30px; right: 15px"
              ></i>
            </p>
          </div>
      </div>
        
      <div class="container-fluid" style="width: 100%">
        <hr style="height: 4px; width: 100%; background: rgb(3, 39, 77)" />
        <br />
        <div
          class="detail-div"
          style="
            font-family: 'Lucida Console', 'Courier New', monospace;
            margin: 0 5%;
            text-align: left;
            font-size: 1em;
            color: rgb(3, 39, 77);
            
          "
        >
          <div class="details">
            <p style="font-size: 1.2em; font-weight: 500;"><b>Invoice To</b></p>
          </div>
          <div
            class="details"
            style="display: flex; justify-content: space-between"
          >
            <p>OrderID:</p>
            <p>${oid}:</p>
          </div>
          <div
            class="details"
            style="display: flex; justify-content: space-between"
          >
            <p>Name:</p>
            <p>${name}</p>
          </div>
          <div
            class="details"
            style="display: flex; justify-content: space-between"
          >
            <p>Telephone:</p>
            <p>${telephone}</p>
          </div>
          <div
            class="details"
            style="display: flex; justify-content: space-between"
          >
            <p>Payment Date:</p>
            <p>${date}</p>
          </div>
          <div
            class="details"
            style="display: flex; justify-content: space-between"
          >
            <p>Payment Method:</p>
            <p>${payMethod}</p>
          </div>
        </div>
        <br />
        <hr style="height: 4px; width: 100%; background: rgb(3, 39, 77)" />
        <br />
        <table style="border-collapse: collapse; margin: 20px auto" width="95%">
          <thead>
            <tr>
              <th>Products/Services</th>
              <th>Price (XAF)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align="center" valign="top">${item}</td>
              <td align="center" valign="top">${price}</td>
            </tr>
            <tr>
              <td align="center" valign="top">${item}</td>
              <td align="center" valign="top">${price}</td>
            </tr>
          </tbody>
        </table>
        <button
          class="more"
          style="
            width: 80%;
            color: #fff;
            background-color: #f69f1b;
            border: none;
            font-size: 20px;
            border-radius: 5px;
            margin: 2% 10%;
            cursor: pointer;
          "
        >
          <a
            href="https://residencemg.co/"
            style="text-decoration: none; color: #fff"
            >Visit site <i class="fa-solid fa-earth-americas fa-xl"></i
          ></a>
        </button>
  
      </div>
     </div>
  
    </body>
  </html>
  `;
  return msg;
};

module.exports = mailTemplate;
