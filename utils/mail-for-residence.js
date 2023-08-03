const mailTemplate = (oid, item, price, name, telephone, date, payMethod) => {
  const msg = `<!DOCTYPE html>
  <html>
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
      <style>
        td {
          font-size: 15px;
        }
        th,
        td {
          text-align: left;
          padding: 8px;
          border-bottom: 1px solid #000000 !important;
        }
        .more:hover {
          background: #e7001b !important;
        }
        th {
          background-color: #f2f2f2 !important;
          width: 50% !important;
          font-weight: bold !important;
        }
        .details {
          font-family: "Lucida Console", "Courier New", monospace !important;
        }
        @media only screen and (max-width: 800px) {
          .desc {
            flex-direction: column !important;
          }
          h2 {
            font-size: 24px !important;
          }
          .more {
            height: 48px !important;
            font-size: 18px !important;
          }
          .details,
          table {
            font-size: 17px !important;
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
        background: rgb(3, 39, 77);
        width: 80vw;
        margin: auto;
      "
    >
      <div
        class="outer"
        style="
          background-color: #fff;
          height: 90%;
          width: 90%;
          margin: 5% auto;
          border-radius: 7px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        "
      >
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
              font-size: 2.3em;
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
              height: 60px;
              width: 60px;
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
          <h4
            style="
              text-align: center;
              font-size: 2em;
              font-weight: 400;
              color: #f69f1b;
            "
          >
            Payment Details
          </h4>
          <div
            class="detail-div"
            style="
              font-family: 'Lucida Console', 'Courier New', monospace;
              margin: 0 5%;
              text-align: left;
              font-size: 18px;
              color: rgb(3, 39, 77);
              font-weight: 600;
            "
          >
            <div
              class="details"
              style="display: flex; justify-content: space-between"
            >
              <p><b>OrderID:</b></p>
              <p>${oid}:</p>
            </div>
            <div
              class="details"
              style="display: flex; justify-content: space-between"
            >
              <p>Invoice To:</p>
              <p>Value</p>
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
          <table style="border-collapse: collapse; width: 100%; margin: 20px 0">
            <thead>
              <tr>
                <th>Products/Services</th>
                <th>Price (XAF)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${item}</td>
                <td>${price}</td>
              </tr>
              <tr>
                <td>${item}</td>
                <td>${price}</td>
              </tr>
            </tbody>
          </table>
          <button
            class="more"
            style="
              height: 60px;
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
              >Visit site <i class="fa-solid fa-earth-americas fa-xl"></i></a
            >
          </button>
        </div>
      </div>
    </body>
  </html>
  `;
  return msg;
};

module.exports = mailTemplate;
