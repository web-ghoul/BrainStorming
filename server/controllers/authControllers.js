const User = require("../models/UserSchema");
const Userverification = require("../models/verifyaccountsSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const { v4: uuidv4 } = require("uuid");
const validation = require("../utils/validation_schema");
var Tokens = require("csrf");

require("dotenv").config();

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS_APP,
  },
});

transporter.verify((err, success) => {
  if (err) {
    console.log(err);
  } else {
    console.log("ready for messages");
    console.log(success);
  }
});

function options(type, currentUrl, uniqueString, Email, _id , Name = "Null") {
  let obj;
  var longUrl;
  if (type == "forgotPassword") {
    longUrl = currentUrl + "/api/reset_password/" + _id + "/" + uniqueString;
  } else {
    longUrl = currentUrl + "/api/verify/" + _id + "/" + uniqueString;
  }

  if (type == "forgotPassword") {
    obj = {
      from: process.env.AUTH_EMAIL,
      to: Email,
      subject: "Reset Your Passwords",
      html: `<!DOCTYPE html>

      <html
        lang="en"
        xmlns:o="urn:schemas-microsoft-com:office:office"
        xmlns:v="urn:schemas-microsoft-com:vml"
      >
        <head>
          <title></title>
          <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <!--[if mso
            ]><xml
              ><o:OfficeDocumentSettings
                ><o:PixelsPerInch>96</o:PixelsPerInch
                ><o:AllowPNG /></o:OfficeDocumentSettings></xml
          ><![endif]-->
          <style>
            * {
              box-sizing: border-box;
            }
      
            body {
              margin: 0;
              padding: 0;
            }
      
            a[x-apple-data-detectors] {
              color: inherit !important;
              text-decoration: inherit !important;
            }
      
            #MessageViewBody a {
              color: inherit;
              text-decoration: none;
            }
      
            p {
              line-height: inherit;
            }
      
            .desktop_hide,
            .desktop_hide table {
              mso-hide: all;
              display: none;
              max-height: 0px;
              overflow: hidden;
            }
      
            .image_block img + div {
              display: none;
            }
      
            @media (max-width: 700px) {
              .desktop_hide table.icons-inner {
                display: inline-block !important;
              }
      
              .icons-inner {
                text-align: center;
              }
      
              .icons-inner td {
                margin: 0 auto;
              }
      
              .image_block img.fullWidth {
                max-width: 100% !important;
              }
      
              .mobile_hide {
                display: none;
              }
      
              .row-content {
                width: 100% !important;
              }
      
              .stack .column {
                width: 100%;
                display: block;
              }
      
              .mobile_hide {
                min-height: 0;
                max-height: 0;
                max-width: 0;
                overflow: hidden;
                font-size: 0px;
              }
      
              .desktop_hide,
              .desktop_hide table {
                display: table !important;
                max-height: none !important;
              }
            }
          </style>
        </head>
        <body
          style="
            background-color: #eee;
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: none;
            text-size-adjust: none;
          "
        >
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="nl-container"
            role="presentation"
            style="
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              background-color: #eee;
            "
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-1"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              color: #000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <div
                                    class="spacer_block block-1"
                                    style="
                                      height: 30px;
                                      line-height: 30px;
                                      font-size: 1px;
                                    "
                                  ></div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-2"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              color: #000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="33.333333333333336%"
                                >
                                  <div
                                    class="spacer_block block-1"
                                    style="
                                      height: 0px;
                                      line-height: 0px;
                                      font-size: 1px;
                                    "
                                  ></div>
                                </td>
                                <td
                                  class="column column-2"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="33.333333333333336%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="image_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          width: 100%;
                                          padding-right: 0px;
                                          padding-left: 0px;
                                        "
                                      >
                                        <div
                                          align="center"
                                          class="alignment"
                                          style="line-height: 10px;"
                                        >
                                          <a href=${process.env.CLIENT_URL}
                                            ><img
                                              alt="Company Logo"
                                              src="https://res.cloudinary.com/dz7nwcejb/image/upload/v1694634343/images/baonaocylfosucwqwngi.png"
                                              style="
                                                display: block;
                                                height: auto;
                                                border: 0;
                                                max-width: 147.33333333333331px;
                                                width: 100%;
                                              "
                                              title="Company Logo"
                                              width="147.33333333333331"
                                          /></a>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                                <td
                                  class="column column-3"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="33.333333333333336%"
                                >
                                  <div
                                    class="spacer_block block-1"
                                    style="
                                      height: 0px;
                                      line-height: 0px;
                                      font-size: 1px;
                                    "
                                  ></div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-3"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              color: #000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="empty_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div></div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-4"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              color: #000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="empty_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div></div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-5"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              background-color: #fff;
                              color: #000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="15"
                                    cellspacing="0"
                                    class="image_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div
                                          align="center"
                                          class="alignment"
                                          style="line-height: 10px;"
                                        >
                                          <img
                                            alt="Resetting Password"
                                            class="fullWidth"
                                            src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?w=740&t=st=1694634042~exp=1694634642~hmac=dc9553a06c9f9dea2c4e8ee7c0bc825848871c7ab37a3e4de2b893aa91b41849"
                                            style="
                                              display: block;
                                              height: auto;
                                              border: 0;
                                              max-width: 374px;
                                              width: 100%;
                                            "
                                            title="Resetting Password"
                                            width="374"
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <div
                                    class="spacer_block block-2"
                                    style="
                                      height: 35px;
                                      line-height: 35px;
                                      font-size: 1px;
                                    "
                                  ></div>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="heading_block block-3"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="text-align: center; width: 100%;"
                                      >
                                        <a
                                          style="
                                            margin: 0;
                                            color: #037ef3;
                                            direction: ltr;
                                            font-family: Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                            font-size: 27px;
                                            font-weight: normal;
                                            letter-spacing: normal;
                                            line-height: 120%;
                                            text-align: center;
                                            margin-top: 0;
                                            margin-bottom: 0;
                                          "
                                          href=${longUrl}
                                        >
                                          <strong>Reset Your Password?</strong>
                                        </a>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-6"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              background-color: #fff;
                              color: #000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="16.666666666666668%"
                                >
                                  <div
                                    class="spacer_block block-1"
                                    style="
                                      height: 0px;
                                      line-height: 0px;
                                      font-size: 1px;
                                    "
                                  ></div>
                                </td>
                                <td
                                  class="column column-2"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="66.66666666666667%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-left: 20px;
                                          padding-right: 10px;
                                          padding-top: 10px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #848484;
                                            font-family: Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                            font-size: 14px;
                                            line-height: 180%;
                                            text-align: center;
                                            mso-line-height-alt: 25.2px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word;"
                                          >
                                            <span
                                              >This is Your BrainStorming Reset
                                              Password for your </span
                                            ><span
                                              style="background-color: transparent;"
                                              >Account.</span
                                            >
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <div
                                    class="spacer_block block-2"
                                    style="
                                      height: 10px;
                                      line-height: 10px;
                                      font-size: 1px;
                                    "
                                  ></div>
                                  <table
                                    border="0"
                                    cellpadding="10"
                                    cellspacing="0"
                                    class="button_block block-3"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div align="center" class="alignment">
                                          <a
                                            href="www.example.com"
                                            style="
                                              text-decoration: none;
                                              display: inline-block;
                                              color: #ffffff;
                                              background-color: #037ef3;
                                              border-radius: 4px;
                                              width: auto;
                                              border-top: 0px solid #101;
                                              font-weight: undefined;
                                              border-right: 0px solid #101;
                                              border-bottom: 0px solid #101;
                                              border-left: 0px solid #101;
                                              padding-top: 5px;
                                              padding-bottom: 5px;
                                              font-family: Arial, Helvetica Neue,
                                                Helvetica, sans-serif;
                                              font-size: 16px;
                                              text-align: center;
                                              mso-border-alt: none;
                                              word-break: keep-all;
                                            "
                                            target="_blank"
                                            ><span
                                              style="
                                                padding-left: 20px;
                                                padding-right: 20px;
                                                font-size: 16px;
                                                display: inline-block;
                                                letter-spacing: normal;
                                              "
                                              ><span
                                                style="
                                                  word-break: break-word;
                                                  line-height: 32px;
                                                "
                                                >Reset Password</span
                                              ></span
                                            ></a
                                          >>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <div
                                    class="spacer_block block-4"
                                    style="
                                      height: 20px;
                                      line-height: 20px;
                                      font-size: 1px;
                                    "
                                  ></div>
                                </td>
                                <td
                                  class="column column-3"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="16.666666666666668%"
                                >
                                  <div
                                    class="spacer_block block-1"
                                    style="
                                      height: 0px;
                                      line-height: 0px;
                                      font-size: 1px;
                                    "
                                  ></div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-7"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              color: #000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="empty_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div></div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-8"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              color: #000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="empty_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div></div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-9"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              color: #000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="16.666666666666668%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="empty_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div></div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                                <td
                                  class="column column-2"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="66.66666666666667%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="empty_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div></div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                                <td
                                  class="column column-3"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="16.666666666666668%"
                                >
                                  <div
                                    class="spacer_block block-1"
                                    style="
                                      height: 0px;
                                      line-height: 0px;
                                      font-size: 1px;
                                    "
                                  ></div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-10"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      background-color: #ffffff;
                    "
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              background-color: #fff;
                              color: #000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="icons_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          vertical-align: middle;
                                          color: #1e0e4b;
                                          font-family: 'Inter', sans-serif;
                                          font-size: 15px;
                                          padding-bottom: 5px;
                                          padding-top: 5px;
                                          text-align: center;
                                        "
                                      >
                                        <table
                                          cellpadding="0"
                                          cellspacing="0"
                                          role="presentation"
                                          style="
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                          "
                                          width="100%"
                                        >
                                          <tr>
                                            <td
                                              class="alignment"
                                              style="
                                                vertical-align: middle;
                                                text-align: center;
                                              "
                                            >
                                              <table
                                                cellpadding="0"
                                                cellspacing="0"
                                                class="icons-inner"
                                                role="presentation"
                                                style="
                                                  mso-table-lspace: 0pt;
                                                  mso-table-rspace: 0pt;
                                                  display: inline-block;
                                                  margin-right: -4px;
                                                  padding-left: 0px;
                                                  padding-right: 0px;
                                                "
                                              >
                                                <tr>
                                                  <td
                                                    style="
                                                      vertical-align: middle;
                                                      text-align: center;
                                                      padding-top: 5px;
                                                      padding-bottom: 5px;
                                                      padding-left: 5px;
                                                      padding-right: 6px;
                                                    "
                                                  >
                                                    <a
                                                      href="${process.env.CLIENT_URL}"
                                                      style="text-decoration: none;"
                                                      target="_blank"
                                                      ><img
                                                        align="center"
                                                        alt="Beefree Logo"
                                                        class="icon"
                                                        height="32"
                                                        src="https://res.cloudinary.com/dz7nwcejb/image/upload/v1694634343/images/baonaocylfosucwqwngi.png"
                                                        style="
                                                          display: block;
                                                          height: auto;
                                                          margin: 0 auto;
                                                          border: 0;
                                                        "
                                                        width="34"
                                                    /></a>
                                                  </td>
                                                  <td
                                                    style="
                                                      font-family: 'Inter', sans-serif;
                                                      font-size: 15px;
                                                      color: #1e0e4b;
                                                      vertical-align: middle;
                                                      letter-spacing: undefined;
                                                      text-align: center;
                                                    "
                                                  >
                                                    <a
                                                      href="${process.env.CLIENT_URL}"
                                                      style="
                                                        color: #1e0e4b;
                                                        text-decoration: none;
                                                      "
                                                      target="_blank"
                                                      >Designed with BrainStorming</a
                                                    >
                                                  </td>
                                                </tr>
                                              </table>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- End -->
        </body>
      </html>
      `,
    };
  } else if (type == "EmailVerification") {
    obj = {
      from: process.env.AUTH_EMAIL,
      to: Email,
      subject: "Verify your Email",
      html: `<!DOCTYPE html>

      <html
        lang="en"
        xmlns:o="urn:schemas-microsoft-com:office:office"
        xmlns:v="urn:schemas-microsoft-com:vml"
      >
        <head>
          <title></title>
          <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <!--[if mso
            ]><xml
              ><o:OfficeDocumentSettings
                ><o:PixelsPerInch>96</o:PixelsPerInch
                ><o:AllowPNG /></o:OfficeDocumentSettings></xml
          ><![endif]-->
          <!--[if !mso]><!-->
          <link
            href="https://fonts.googleapis.com/css?family=Lato"
            rel="stylesheet"
            type="text/css"
          />
          <!--<![endif]-->
          <style>
            * {
              box-sizing: border-box;
            }
      
            body {
              margin: 0;
              padding: 0;
            }
      
            a[x-apple-data-detectors] {
              color: inherit !important;
              text-decoration: inherit !important;
            }
      
            #MessageViewBody a {
              color: inherit;
              text-decoration: none;
            }
      
            p {
              line-height: inherit;
            }
      
            .desktop_hide,
            .desktop_hide table {
              mso-hide: all;
              display: none;
              max-height: 0px;
              overflow: hidden;
            }
      
            .image_block img + div {
              display: none;
            }
      
            @media (max-width: 700px) {
              .desktop_hide table.icons-inner {
                display: inline-block !important;
              }
      
              .icons-inner {
                text-align: center;
              }
      
              .icons-inner td {
                margin: 0 auto;
              }
      
              .image_block img.fullWidth {
                max-width: 100% !important;
              }
      
              .mobile_hide {
                display: none;
              }
      
              .row-content {
                width: 100% !important;
              }
      
              .stack .column {
                width: 100%;
                display: block;
              }
      
              .mobile_hide {
                min-height: 0;
                max-height: 0;
                max-width: 0;
                overflow: hidden;
                font-size: 0px;
              }
      
              .desktop_hide,
              .desktop_hide table {
                display: table !important;
                max-height: none !important;
              }
            }
          </style>
        </head>
        <body
          style="
            background-color: #fafafa;
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: none;
            text-size-adjust: none;
          "
        >
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="nl-container"
            role="presentation"
            style="
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              background-color: #fafafa;
            "
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-1"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              color: #000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <div
                                    class="spacer_block block-1"
                                    style="
                                      height: 30px;
                                      line-height: 30px;
                                      font-size: 1px;
                                    "
                                  ></div>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="icons_block block-2"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          vertical-align: middle;
                                          color: #000000;
                                          font-family: inherit;
                                          font-size: 14px;
                                          padding-bottom: 5px;
                                          padding-left: 30px;
                                          padding-right: 30px;
                                          text-align: center;
                                        "
                                      >
                                        <table
                                          align="center"
                                          cellpadding="0"
                                          cellspacing="0"
                                          class="alignment"
                                          role="presentation"
                                          style="
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                          "
                                        >
                                          <tr>
                                            <td
                                              style="
                                                vertical-align: middle;
                                                text-align: center;
                                                padding-top: 5px;
                                                padding-bottom: 5px;
                                                padding-left: 5px;
                                                padding-right: 5px;
                                              "
                                            >
                                              <img
                                                align="center"
                                                alt="Placeholder Logo"
                                                class="icon"
                                                height="64"
                                                src="https://res.cloudinary.com/dz7nwcejb/image/upload/v1694692541/images/w4kqk9hiahfc25t8pke9.png"
                                                style="
                                                  display: block;
                                                  height: auto;
                                                  margin: 0 auto;
                                                  border: 0;
                                                "
                                                width="64"
                                              />
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-3"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div
                                          style="
                                            color: #1d1d1b;
                                            font-family: Lato, Tahoma, Verdana, Segoe,
                                              sans-serif;
                                            font-size: 12px;
                                            line-height: 150%;
                                            text-align: center;
                                            mso-line-height-alt: 18px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word;"
                                          >
                                            <em><span>BrainStorming</span></em>
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-2"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              color: #000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <div
                                    class="spacer_block block-1"
                                    style="
                                      height: 20px;
                                      line-height: 20px;
                                      font-size: 1px;
                                    "
                                  ></div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-3"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              background-color: #eee;
                              color: #000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <div
                                    class="spacer_block block-1"
                                    style="
                                      height: 40px;
                                      line-height: 40px;
                                      font-size: 1px;
                                    "
                                  ></div>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="heading_block block-2"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 30px;
                                          padding-left: 20px;
                                          padding-right: 20px;
                                          text-align: center;
                                          width: 100%;
                                        "
                                      >
                                        <h1
                                          style="
                                            margin: 0;
                                            color: #037ef3;
                                            direction: ltr;
                                            font-family: Tahoma, Verdana, Segoe,
                                              sans-serif;
                                            font-size: 39px;
                                            font-weight: 700;
                                            letter-spacing: normal;
                                            line-height: 120%;
                                            text-align: center;
                                            margin-top: 0;
                                            margin-bottom: 0;
                                          "
                                        >
                                          <span class="tinyMce-placeholder"
                                            >Activate Your Email</span
                                          >
                                        </h1>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="image_block block-3"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 30px;
                                          width: 100%;
                                          padding-right: 0px;
                                          padding-left: 0px;
                                        "
                                      >
                                        <div
                                          align="center"
                                          class="alignment"
                                          style="line-height: 10px;"
                                        >
                                          <img
                                            alt="Header image"
                                            class="fullWidth"
                                            src="https://res.cloudinary.com/dz7nwcejb/image/upload/v1694692540/images/qunmmb2iqdqhgptkmmyb.jpg"
                                            style="
                                              display: block;
                                              height: auto;
                                              border: 0;
                                              max-width: 442px;
                                              width: 100%;
                                            "
                                            title="Header image"
                                            width="442"
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="button_block block-4"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="padding-left: 5px; text-align: center;"
                                      >
                                        <div align="center" class="alignment">
                                          <a
                                            href=${longUrl}
                                            style="
                                              text-decoration: none;
                                              display: inline-block;
                                              color: #ffffff;
                                              background-color: #037ef3;
                                              border-radius: 0px;
                                              width: auto;
                                              border-top: 0px solid #ffffff;
                                              font-weight: 400;
                                              border-right: 0px solid #ffffff;
                                              border-bottom: 0px solid #ffffff;
                                              border-left: 0px solid #ffffff;
                                              padding-top: 10px;
                                              padding-bottom: 10px;
                                              font-family: Lato, Tahoma, Verdana,
                                                Segoe, sans-serif;
                                              font-size: 18px;
                                              text-align: center;
                                              mso-border-alt: none;
                                              word-break: keep-all;
                                            "
                                            target="_blank"
                                            ><span
                                              style="
                                                padding-left: 40px;
                                                padding-right: 40px;
                                                font-size: 18px;
                                                display: inline-block;
                                                letter-spacing: 1px;
                                              "
                                              ><span style="word-break: break-word;"
                                                ><span
                                                  data-mce-style=""
                                                  style="line-height: 36px;"
                                                  >Activate</span
                                                ></span
                                              ></span
                                            ></a
                                          >
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <div
                                    class="spacer_block block-5"
                                    style="
                                      height: 40px;
                                      line-height: 40px;
                                      font-size: 1px;
                                    "
                                  ></div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-5"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              background-color: #eee;
                              color: #000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <div
                                    class="spacer_block block-1"
                                    style="
                                      height: 30px;
                                      line-height: 30px;
                                      font-size: 1px;
                                    "
                                  ></div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-6"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              background-color: #3f3f3f;
                              color: #000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 30px;
                                          padding-left: 30px;
                                          padding-right: 30px;
                                          padding-top: 15px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #afafaf;
                                            font-family: Lato, Tahoma, Verdana, Segoe,
                                              sans-serif;
                                            font-size: 10px;
                                            line-height: 150%;
                                            text-align: center;
                                            mso-line-height-alt: 15px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word;"
                                          >
                                            <span
                                              >If you have questions regarding your
                                              data, please contact </span
                                            ><span
                                              style="background-color: transparent;"
                                              >with
                                              <a
                                                href="mailto:mahmoudaboraya2021@gmail.com"
                                                rel="noopener"
                                                style="
                                                  text-decoration: underline;
                                                  color: #f2663f;
                                                "
                                                target="_blank"
                                                >webGhoul</a
                                              ></span
                                            >
                                          </p>
                                          <p
                                            style="margin: 0; word-break: break-word;"
                                          >
                                            <span
                                              ><span
                                                >or
                                                <a
                                                  href="mailto:amreducation006@gmail.com"
                                                  rel="noopener"
                                                  style="
                                                    text-decoration: underline;
                                                    color: #f2663f;
                                                  "
                                                  target="_blank"
                                                  title="amreducation006@gmail.com"
                                                  >Amr006</a
                                                >© 2022 Company.
                                              </span></span
                                            ><span
                                              ><span>
                                                All Rights Reserved.</span
                                              ></span
                                            >
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- End -->
        </body>
      </html>
      `,
    };
  }else {
    obj = {
      from: process.env.AUTH_EMAIL,
      to: Email,
      subject: "Welcome to BrainStorm",
      html: `<!DOCTYPE html>

      <html
        lang="en"
        xmlns:o="urn:schemas-microsoft-com:office:office"
        xmlns:v="urn:schemas-microsoft-com:vml"
      >
        <head>
          <title></title>
          <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <style>
            * {
              box-sizing: border-box;
            }
      
            body {
              margin: 0;
              padding: 0;
            }
      
            a[x-apple-data-detectors] {
              color: inherit !important;
              text-decoration: inherit !important;
            }
      
            #MessageViewBody a {
              color: inherit;
              text-decoration: none;
            }
      
            p {
              line-height: inherit;
            }
      
            .desktop_hide,
            .desktop_hide table {
              mso-hide: all;
              display: none;
              max-height: 0px;
              overflow: hidden;
            }
      
            .image_block img + div {
              display: none;
            }
      
            @media (max-width: 700px) {
              .desktop_hide table.icons-inner,
              .social_block.desktop_hide .social-table {
                display: inline-block !important;
              }
      
              .icons-inner {
                text-align: center;
              }
      
              .icons-inner td {
                margin: 0 auto;
              }
      
              .image_block img.fullWidth {
                max-width: 100% !important;
              }
      
              .mobile_hide {
                display: none;
              }
      
              .row-content {
                width: 100% !important;
              }
      
              .stack .column {
                width: 100%;
                display: block;
              }
      
              .mobile_hide {
                min-height: 0;
                max-height: 0;
                max-width: 0;
                overflow: hidden;
                font-size: 0px;
              }
      
              .desktop_hide,
              .desktop_hide table {
                display: table !important;
                max-height: none !important;
              }
            }
          </style>
        </head>
        <body
          style="
            margin: 0;
            background-color: #fff;
            padding: 0;
            -webkit-text-size-adjust: none;
            text-size-adjust: none;
          "
        >
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="nl-container"
            role="presentation"
            style="
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              background-color: #fff;
              background-image: none;
              background-position: top left;
              background-size: auto;
              background-repeat: no-repeat;
            "
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-1"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              background-color: #fff;
                              color: #000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 20px;
                                    padding-top: 20px;
                                    vertical-align: middle;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="58.333333333333336%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="icons_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          vertical-align: middle;
                                          color: #000000;
                                          font-family: inherit;
                                          font-size: 15px;
                                          font-weight: 700;
                                          text-align: left;
                                        "
                                      >
                                        <table
                                          cellpadding="0"
                                          cellspacing="0"
                                          role="presentation"
                                          style="
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                          "
                                          width="100%"
                                        >
                                          <tr>
                                            <td
                                              class="alignment"
                                              style="
                                                vertical-align: middle;
                                                text-align: left;
                                              "
                                            >
                                              <table
                                                cellpadding="0"
                                                cellspacing="0"
                                                class="icons-inner"
                                                role="presentation"
                                                style="
                                                  mso-table-lspace: 0pt;
                                                  mso-table-rspace: 0pt;
                                                  display: inline-block;
                                                  margin-right: -4px;
                                                  padding-left: 0px;
                                                  padding-right: 0px;
                                                "
                                              >
                                                <tr>
                                                  <td
                                                    style="
                                                      vertical-align: middle;
                                                      text-align: center;
                                                      padding-top: 20px;
                                                      padding-bottom: 20px;
                                                      padding-left: 20px;
                                                      padding-right: 20px;
                                                    "
                                                  >
                                                    <a
                                                      href="${process.env.CLIENT_URL}"
                                                      style="text-decoration: none;"
                                                      target="_blank"
                                                      ><img
                                                        align="center"
                                                        alt="brainStorming"
                                                        class="icon"
                                                        height="32"
                                                        src="https://res.cloudinary.com/dz7nwcejb/image/upload/v1694643706/images/eqvlal40nx8rxfzfmxba.png"
                                                        style="
                                                          display: block;
                                                          height: auto;
                                                          margin: 0 auto;
                                                          border: 0;
                                                        "
                                                        width="32"
                                                    /></a>
                                                  </td>
                                                  <td
                                                    style="
                                                      font-family: Tahoma, Verdana,
                                                        Segoe, sans-serif;
                                                      font-size: 15px;
                                                      color: #000000;
                                                      vertical-align: middle;
                                                      letter-spacing: undefined;
                                                      text-align: left;
                                                    "
                                                  >
                                                    <a
                                                      href="http://localhost:4000/"
                                                      style="
                                                        color: #000000;
                                                        text-decoration: none;
                                                      "
                                                      target="_blank"
                                                      >BrainStorming</a
                                                    >
                                                  </td>
                                                </tr>
                                              </table>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                                <td
                                  class="column column-2"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-top: 5px;
                                    vertical-align: middle;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="41.666666666666664%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 15px;
                                          padding-left: 15px;
                                          padding-right: 15px;
                                          padding-top: 10px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #020b22;
                                            font-family: Tahoma, Verdana, Segoe,
                                              sans-serif;
                                            font-size: 15px;
                                            line-height: 150%;
                                            text-align: center;
                                            mso-line-height-alt: 22.5px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word;"
                                          >
                                            <span>${Date.now()}</span>
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-2"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              background-color: #0452ee;
                              background-image: url('https://res.cloudinary.com/dz7nwcejb/image/upload/v1694643708/images/f8yq8cwvxzdad3qznnor.png');
                              background-repeat: no-repeat;
                              background-size: cover;
                              color: #000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <div
                                    class="spacer_block block-1"
                                    style="
                                      height: 70px;
                                      line-height: 70px;
                                      font-size: 1px;
                                    "
                                  ></div>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="heading_block block-2"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 30px;
                                          padding-top: 30px;
                                          text-align: center;
                                          width: 100%;
                                        "
                                      >
                                        <h1
                                          style="
                                            margin: 0;
                                            color: #ffffff;
                                            direction: ltr;
                                            font-family: Tahoma, Verdana, Segoe,
                                              sans-serif;
                                            font-size: 38px;
                                            font-weight: 700;
                                            letter-spacing: normal;
                                            line-height: 150%;
                                            text-align: center;
                                            margin-top: 0;
                                            margin-bottom: 0;
                                          "
                                        >
                                          <span class="tinyMce-placeholder"
                                            >Welcome, ${Name}!</span
                                          >
                                        </h1>
                                      </td>
                                    </tr>
                                  </table>
                                  <div
                                    class="spacer_block block-3"
                                    style="
                                      height: 70px;
                                      line-height: 70px;
                                      font-size: 1px;
                                    "
                                  ></div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-3"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              background-color: #fff;
                              color: #000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="image_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          width: 100%;
                                          padding-right: 0px;
                                          padding-left: 0px;
                                        "
                                      >
                                        <div
                                          align="center"
                                          class="alignment"
                                          style="line-height: 10px;"
                                        >
                                          <img
                                            alt="Contacts"
                                            class="fullWidth"
                                            src="https://res.cloudinary.com/dz7nwcejb/image/upload/v1694643720/images/rawnubwcwcyfaovmipv3.gif"
                                            style="
                                              display: block;
                                              height: auto;
                                              border: 0;
                                              max-width: 646px;
                                              width: 100%;
                                            "
                                            title="Contacts"
                                            width="646"
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-4"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              background-color: #fff;
                              color: #000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 40px;
                                    padding-left: 50px;
                                    padding-right: 50px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="heading_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-top: 15px;
                                          text-align: center;
                                          width: 100%;
                                        "
                                      >
                                        <h3
                                          style="
                                            margin: 0;
                                            color: #037ef3;
                                            direction: ltr;
                                            font-family: Tahoma, Verdana, Segoe,
                                              sans-serif;
                                            font-size: 28px;
                                            font-weight: 700;
                                            letter-spacing: normal;
                                            line-height: 120%;
                                            text-align: center;
                                            margin-top: 0;
                                            margin-bottom: 0;
                                          "
                                        >
                                          <span class="tinyMce-placeholder"
                                            >We're thrilled to have you on the
                                            team.</span
                                          >
                                        </h3>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="20"
                                    cellspacing="0"
                                    class="divider_block block-2"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div align="center" class="alignment">
                                          <table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="
                                              mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;
                                            "
                                            width="15%"
                                          >
                                            <tr>
                                              <td
                                                class="divider_inner"
                                                style="
                                                  font-size: 1px;
                                                  line-height: 1px;
                                                  border-top: 3px solid #037ef3;
                                                "
                                              >
                                                <span> </span>
                                              </td>
                                            </tr>
                                          </table>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-3"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 15px;
                                          padding-left: 15px;
                                          padding-right: 15px;
                                          padding-top: 10px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #020b22;
                                            font-family: Tahoma, Verdana, Segoe,
                                              sans-serif;
                                            font-size: 20px;
                                            line-height: 150%;
                                            text-align: center;
                                            mso-line-height-alt: 30px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word;"
                                          >
                                            <span
                                              >Here’s some important information about
                                              our </span
                                            ><span
                                              style="
                                                font-family: inherit;
                                                background-color: transparent;
                                              "
                                              >website and your new role.</span
                                            >
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-5"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              background-color: #fff;
                              color: #000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 30px;
                                    padding-left: 50px;
                                    padding-right: 50px;
                                    padding-top: 40px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="heading_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-top: 15px;
                                          text-align: center;
                                          width: 100%;
                                        "
                                      >
                                        <h3
                                          style="
                                            margin: 0;
                                            color: #037ef3;
                                            direction: ltr;
                                            font-family: Tahoma, Verdana, Segoe,
                                              sans-serif;
                                            font-size: 24px;
                                            font-weight: 400;
                                            letter-spacing: normal;
                                            line-height: 120%;
                                            text-align: center;
                                            margin-top: 0;
                                            margin-bottom: 0;
                                          "
                                        >
                                          <strong
                                            ><span class="tinyMce-placeholder"
                                              >Developers & Managers</span
                                            ></strong
                                          >
                                        </h3>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="20"
                                    cellspacing="0"
                                    class="divider_block block-2"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div align="center" class="alignment">
                                          <table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="
                                              mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;
                                            "
                                            width="15%"
                                          >
                                            <tr>
                                              <td
                                                class="divider_inner"
                                                style="
                                                  font-size: 1px;
                                                  line-height: 1px;
                                                  border-top: 3px solid #037ef3;
                                                "
                                              >
                                                <span> </span>
                                              </td>
                                            </tr>
                                          </table>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-6"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              background-color: #fff;
                              color: #000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-left: 20px;
                                    padding-right: 20px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="50%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 15px;
                                          padding-left: 15px;
                                          padding-right: 15px;
                                          padding-top: 10px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #020b22;
                                            font-family: Tahoma, Verdana, Segoe,
                                              sans-serif;
                                            font-size: 20px;
                                            line-height: 120%;
                                            text-align: center;
                                            mso-line-height-alt: 24px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word;"
                                          >
                                            <span
                                              >Front-End<br />& UI-UX Designer</span
                                            >
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="15"
                                    cellspacing="0"
                                    class="image_block block-2"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div
                                          align="center"
                                          class="alignment"
                                          style="line-height: 10px;"
                                        >
                                          <img
                                            alt="webGhoul"
                                            src="https://res.cloudinary.com/dz7nwcejb/image/upload/v1694643712/images/ascwyvzdxd6rqxnet0pt.jpg"
                                            style="
                                              display: block;
                                              height: auto;
                                              border: 0;
                                              max-width: 135px;
                                              width: 100%;
                                            "
                                            title="webGhoul"
                                            width="135"
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-3"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 15px;
                                          padding-left: 15px;
                                          padding-right: 15px;
                                          padding-top: 10px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #2d2d2d;
                                            font-family: Tahoma, Verdana, Segoe,
                                              sans-serif;
                                            font-size: 13px;
                                            line-height: 120%;
                                            text-align: center;
                                            mso-line-height-alt: 15.6px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word;"
                                          >
                                            <span style="color: #8c8c8c;"
                                              >Mahmoud Salama (webGhoul)</span
                                            >
                                          </p>
                                          <p
                                            style="margin: 0; word-break: break-word;"
                                          >
                                            mahmoudaboraya2021@gmail.com
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                                <td
                                  class="column column-2"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-left: 20px;
                                    padding-right: 20px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="50%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 15px;
                                          padding-left: 15px;
                                          padding-right: 15px;
                                          padding-top: 10px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #020b22;
                                            font-family: Tahoma, Verdana, Segoe,
                                              sans-serif;
                                            font-size: 20px;
                                            line-height: 120%;
                                            text-align: center;
                                            mso-line-height-alt: 24px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word;"
                                          >
                                            <span>Back-End<br /></span>
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="15"
                                    cellspacing="0"
                                    class="image_block block-2"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div
                                          align="center"
                                          class="alignment"
                                          style="line-height: 10px;"
                                        >
                                          <img
                                            alt="Person"
                                            src="https://res.cloudinary.com/dz7nwcejb/image/upload/v1694643706/images/b8zsfdq4b6hdli3b4hec.jpg"
                                            style="
                                              display: block;
                                              height: auto;
                                              border: 0;
                                              max-width: 210px;
                                              width: 100%;
                                            "
                                            title="Person"
                                            width="210"
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-3"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 15px;
                                          padding-left: 15px;
                                          padding-right: 15px;
                                          padding-top: 10px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #2d2d2d;
                                            font-family: Tahoma, Verdana, Segoe,
                                              sans-serif;
                                            font-size: 13px;
                                            line-height: 120%;
                                            text-align: center;
                                            mso-line-height-alt: 15.6px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word;"
                                          >
                                            <span style="color: #8c8c8c;"
                                              >Amr Khaled (Amr006)</span
                                            >
                                          </p>
                                          <p
                                            style="margin: 0; word-break: break-word;"
                                          >
                                            amreducation006@gmail.com
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-7"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              background-color: #fff;
                              color: #000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 40px;
                                    padding-left: 40px;
                                    padding-right: 40px;
                                    padding-top: 40px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="50%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="heading_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-top: 15px;
                                          text-align: center;
                                          width: 100%;
                                        "
                                      >
                                        <h3
                                          style="
                                            margin: 0;
                                            color: #037ef3;
                                            direction: ltr;
                                            font-family: Tahoma, Verdana, Segoe,
                                              sans-serif;
                                            font-size: 24px;
                                            font-weight: 700;
                                            letter-spacing: normal;
                                            line-height: 120%;
                                            text-align: left;
                                            margin-top: 0;
                                            margin-bottom: 0;
                                          "
                                        >
                                          <span class="tinyMce-placeholder"
                                            >Create Team</span
                                          >
                                        </h3>
                                      </td>
                                    </tr>
                                  </table>
                                  <div
                                    class="spacer_block block-2"
                                    style="
                                      height: 20px;
                                      line-height: 20px;
                                      font-size: 1px;
                                    "
                                  ></div>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-3"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div
                                          style="
                                            color: #2d2d2d;
                                            font-family: Tahoma, Verdana, Segoe,
                                              sans-serif;
                                            font-size: 16px;
                                            line-height: 150%;
                                            text-align: left;
                                            mso-line-height-alt: 24px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word;"
                                          >
                                            <span
                                              >Should team leader create a team and
                                              choose team's name carefully because he
                                              can't change it, this feature may be in
                                              next update, so each team will
                                              have password to team member can join by
                                              it
                                            </span>
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                                <td
                                  class="column column-2"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="50%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="image_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad" style="width: 100%;">
                                        <div
                                          align="center"
                                          class="alignment"
                                          style="line-height: 10px;"
                                        >
                                          <img
                                            alt="Meeting Room"
                                            src="https://res.cloudinary.com/dz7nwcejb/image/upload/v1694643722/images/mi0wxwddzqrfxd23n9bp.gif"
                                            style="
                                              display: block;
                                              height: auto;
                                              border: 0;
                                              max-width: 340px;
                                              width: 100%;
                                            "
                                            title="Meeting Room"
                                            width="340"
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-8"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              background-color: #fff;
                              color: #000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-left: 50px;
                                    padding-right: 50px;
                                    padding-top: 40px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="heading_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-top: 15px;
                                          text-align: center;
                                          width: 100%;
                                        "
                                      >
                                        <h3
                                          style="
                                            margin: 0;
                                            color: #037ef3;
                                            direction: ltr;
                                            font-family: Tahoma, Verdana, Segoe,
                                              sans-serif;
                                            font-size: 24px;
                                            font-weight: 400;
                                            letter-spacing: normal;
                                            line-height: 120%;
                                            text-align: center;
                                            margin-top: 0;
                                            margin-bottom: 0;
                                          "
                                        >
                                          <strong
                                            ><span class="tinyMce-placeholder"
                                              >Contacts</span
                                            ></strong
                                          >
                                        </h3>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="20"
                                    cellspacing="0"
                                    class="divider_block block-2"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div align="center" class="alignment">
                                          <table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="
                                              mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;
                                            "
                                            width="15%"
                                          >
                                            <tr>
                                              <td
                                                class="divider_inner"
                                                style="
                                                  font-size: 1px;
                                                  line-height: 1px;
                                                  border-top: 3px solid #037ef3;
                                                "
                                              >
                                                <span> </span>
                                              </td>
                                            </tr>
                                          </table>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-3"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 15px;
                                          padding-left: 15px;
                                          padding-right: 15px;
                                          padding-top: 10px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #020b22;
                                            font-family: Tahoma, Verdana, Segoe,
                                              sans-serif;
                                            font-size: 20px;
                                            line-height: 150%;
                                            text-align: center;
                                            mso-line-height-alt: 30px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word;"
                                          >
                                            <span
                                              >If you need any Question or Feedback,
                                              these are the persons. that will help
                                              you.</span
                                            >
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-9"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              background-color: #037ef3;
                              color: #000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 25px;
                                    padding-top: 25px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="heading_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 25px;
                                          padding-top: 15px;
                                          text-align: center;
                                          width: 100%;
                                        "
                                      >
                                        <h3
                                          style="
                                            margin: 0;
                                            color: #ffffff;
                                            direction: ltr;
                                            font-family: Tahoma, Verdana, Segoe,
                                              sans-serif;
                                            font-size: 24px;
                                            font-weight: 400;
                                            letter-spacing: normal;
                                            line-height: 120%;
                                            text-align: center;
                                            margin-top: 0;
                                            margin-bottom: 0;
                                          "
                                        >
                                          <strong
                                            ><span class="tinyMce-placeholder"
                                              >Don’t forget to follow us!</span
                                            ></strong
                                          >
                                        </h3>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="10"
                                    cellspacing="0"
                                    class="paragraph_block block-2"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div
                                          style="
                                            color: #fff;
                                            direction: ltr;
                                            font-family: Tahoma, Verdana, Segoe,
                                              sans-serif;
                                            font-size: 16px;
                                            font-weight: 400;
                                            letter-spacing: 0px;
                                            line-height: 120%;
                                            text-align: center;
                                            mso-line-height-alt: 19.2px;
                                          "
                                        >
                                          <p style="margin: 0;">Mahmoud Salama</p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="10"
                                    cellspacing="0"
                                    class="social_block block-3"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div align="center" class="alignment">
                                          <table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            class="social-table"
                                            role="presentation"
                                            style="
                                              mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;
                                              display: inline-block;
                                            "
                                            width="108px"
                                          >
                                            <tr>
                                              <td style="padding: 0 2px 0 2px;">
                                                <a
                                                  href="https://www.facebook.com/mahmoud.gogoo.5/"
                                                  target="_blank"
                                                  ><img
                                                    alt="Facebook"
                                                    height="32"
                                                    src="https://res.cloudinary.com/dz7nwcejb/image/upload/v1694643706/images/wbfn5jmsdejenl9m18qt.png"
                                                    style="
                                                      display: block;
                                                      height: auto;
                                                      border: 0;
                                                    "
                                                    title="facebook"
                                                    width="32"
                                                /></a>
                                              </td>
                                              <td style="padding: 0 2px 0 2px;">
                                                <a
                                                  href="https://www.linkedin.com/in/mahmoud-salama-23b627211/"
                                                  target="_blank"
                                                  ><img
                                                    alt="Linkedin"
                                                    height="32"
                                                    src="https://res.cloudinary.com/dz7nwcejb/image/upload/v1694643709/images/mbjgg8akvyfy1k8utiuc.png"
                                                    style="
                                                      display: block;
                                                      height: auto;
                                                      border: 0;
                                                    "
                                                    title="linkedin"
                                                    width="32"
                                                /></a>
                                              </td>
                                              <td style="padding: 0 2px 0 2px;">
                                                <a
                                                  href="https://api.whatsapp.com/send/?phone=%2B201009344881&text&type=phone_number&app_absent=0"
                                                  target="_blank"
                                                  ><img
                                                    alt="WhatsApp"
                                                    height="32"
                                                    src="https://res.cloudinary.com/dz7nwcejb/image/upload/v1694643706/images/npoch0zdqq0jduh7dyvi.png"
                                                    style="
                                                      display: block;
                                                      height: auto;
                                                      border: 0;
                                                    "
                                                    title="WhatsApp"
                                                    width="32"
                                                /></a>
                                              </td>
                                            </tr>
                                          </table>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="10"
                                    cellspacing="0"
                                    class="paragraph_block block-4"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div
                                          style="
                                            color: #fff;
                                            direction: ltr;
                                            font-family: Tahoma, Verdana, Segoe,
                                              sans-serif;
                                            font-size: 16px;
                                            font-weight: 400;
                                            letter-spacing: 0px;
                                            line-height: 120%;
                                            text-align: center;
                                            mso-line-height-alt: 19.2px;
                                          "
                                        >
                                          <p style="margin: 0;">Amr Khaled</p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="10"
                                    cellspacing="0"
                                    class="social_block block-5"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div align="center" class="alignment">
                                          <table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            class="social-table"
                                            role="presentation"
                                            style="
                                              mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;
                                              display: inline-block;
                                            "
                                            width="108px"
                                          >
                                            <tr>
                                              <td style="padding: 0 2px 0 2px;">
                                                <a
                                                  href="https://www.facebook.com/profile.php?id=100006620191591"
                                                  target="_blank"
                                                  ><img
                                                    alt="Facebook"
                                                    height="32"
                                                    src="https://res.cloudinary.com/dz7nwcejb/image/upload/v1694643706/images/wbfn5jmsdejenl9m18qt.png"
                                                    style="
                                                      display: block;
                                                      height: auto;
                                                      border: 0;
                                                    "
                                                    title="facebook"
                                                    width="32"
                                                /></a>
                                              </td>
                                              <td style="padding: 0 2px 0 2px;">
                                                <a
                                                  href="https://www.linkedin.com/in/amr-khaled-mohamed/"
                                                  target="_blank"
                                                  ><img
                                                    alt="Linkedin"
                                                    height="32"
                                                    src="https://res.cloudinary.com/dz7nwcejb/image/upload/v1694643709/images/mbjgg8akvyfy1k8utiuc.png"
                                                    style="
                                                      display: block;
                                                      height: auto;
                                                      border: 0;
                                                    "
                                                    title="linkedin"
                                                    width="32"
                                                /></a>
                                              </td>
                                              <td style="padding: 0 2px 0 2px;">
                                                <a
                                                  href="https://api.whatsapp.com/send/?phone=%2B201013714763&text&type=phone_number&app_absent=0"
                                                  target="_blank"
                                                  ><img
                                                    alt="WhatsApp"
                                                    height="32"
                                                    src="https://res.cloudinary.com/dz7nwcejb/image/upload/v1694643706/images/npoch0zdqq0jduh7dyvi.png"
                                                    style="
                                                      display: block;
                                                      height: auto;
                                                      border: 0;
                                                    "
                                                    title="WhatsApp"
                                                    width="32"
                                                /></a>
                                              </td>
                                            </tr>
                                          </table>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="20"
                                    cellspacing="0"
                                    class="paragraph_block block-6"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div
                                          style="
                                            color: #fafafa;
                                            font-family: Tahoma, Verdana, Segoe,
                                              sans-serif;
                                            font-size: 10px;
                                            line-height: 150%;
                                            text-align: center;
                                            mso-line-height-alt: 15px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word;"
                                          >
                                            <span
                                              ><span
                                                >© 2023 BrainStorming.
                                              </span></span
                                            ><span
                                              ><span>
                                                All Rights Reserved.</span
                                              ></span
                                            >
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-10"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      background-color: #ffffff;
                    "
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              background-color: #fff;
                              color: #000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="icons_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          vertical-align: middle;
                                          color: #1e0e4b;
                                          font-family: 'Inter', sans-serif;
                                          font-size: 15px;
                                          padding-bottom: 5px;
                                          padding-top: 5px;
                                          text-align: center;
                                        "
                                      >
                                        <table
                                          cellpadding="0"
                                          cellspacing="0"
                                          role="presentation"
                                          style="
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                          "
                                          width="100%"
                                        >
                                          <tr>
                                            <td
                                              class="alignment"
                                              style="
                                                vertical-align: middle;
                                                text-align: center;
                                              "
                                            >
                                              <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                              <!--[if !vml]><!-->
                                              <table
                                                cellpadding="0"
                                                cellspacing="0"
                                                class="icons-inner"
                                                role="presentation"
                                                style="
                                                  mso-table-lspace: 0pt;
                                                  mso-table-rspace: 0pt;
                                                  display: inline-block;
                                                  margin-right: -4px;
                                                  padding-left: 0px;
                                                  padding-right: 0px;
                                                "
                                              >
                                                <!--<![endif]-->
                                                <tr>
                                                  <td
                                                    style="
                                                      vertical-align: middle;
                                                      text-align: center;
                                                      padding-top: 5px;
                                                      padding-bottom: 5px;
                                                      padding-left: 5px;
                                                      padding-right: 6px;
                                                    "
                                                  >
                                                    <a
                                                      href="${process.env.CLIENT_URL}"
                                                      style="text-decoration: none;"
                                                      target="_blank"
                                                      ><img
                                                        align="center"
                                                        alt="Beefree Logo"
                                                        class="icon"
                                                        height="32"
                                                        src="https://res.cloudinary.com/dz7nwcejb/image/upload/v1694634343/images/baonaocylfosucwqwngi.png"
                                                        style="
                                                          display: block;
                                                          height: auto;
                                                          margin: 0 auto;
                                                          border: 0;
                                                        "
                                                        width="34"
                                                    /></a>
                                                  </td>
                                                  <td
                                                    style="
                                                      font-family: 'Inter', sans-serif;
                                                      font-size: 15px;
                                                      color: #1e0e4b;
                                                      vertical-align: middle;
                                                      letter-spacing: undefined;
                                                      text-align: center;
                                                    "
                                                  >
                                                    <a
                                                      href="http://designedwithbeefree.com/"
                                                      style="
                                                        color: #1e0e4b;
                                                        text-decoration: none;
                                                      "
                                                      target="_blank"
                                                      >Designed with BrainStorming</a
                                                    >
                                                  </td>
                                                </tr>
                                              </table>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </body>
      </html>
      `,
    };
  }
  return obj;
}

const sendVerificationEmail = async ({ _id, Email , Name }, type, res) => {
  const currentUrl = "https://brainstorm-server.onrender.com";
  const uniqueString = uuidv4() + _id;
  var welcomeOptions = options("welcome", currentUrl, uniqueString, Email, _id , Name);
  
  if (type == "forgotPassword") {
    const alreadySendCheck = await Userverification.findOne({ userId: _id });
    if (alreadySendCheck) {
      return res.status(402).json({
        message: "You have already sent a password reset email.",
      });
    } else {
      
      res.json({
        status: "pending",
        message: "Password reset email sent. Check your inbox",
      });
    }
  } else {
    
    await transporter.sendMail(welcomeOptions)

    res.json({
      status: "pending",
      message: "verification email sent",
    });
  }

  const mailOptions = options(type, currentUrl, uniqueString, Email, _id);
  
  bcrypt.hash(uniqueString, 10, (err, hashedUniqueString) => {
    if (err) {
      res.json({
        status: "failed",
        message: "an error occurred while hashing email data !",
      });
    } else {
      const newVerification = new Userverification({
        userId: _id,
        uniqueString: hashedUniqueString,
        createdAt: Date.now(),
        expireAt: Date.now() + 21600000,
      });
      newVerification
        .save()
        .then(() => {
          transporter
            .sendMail(mailOptions)
            .then(() => {})
            .catch((err) => {
              res.status(404).json({
                message: err,
              });
            });
        })
        .catch((err) => {
          res.json({
            status: "failed",
            message:
              "an error occurred while saving verification email   data !",
          });
        });
    }
  });
};

const register = async (req, res, next) => {
  console.log(req.body);
  try {
    const validate = await validation.registerSchema.validateAsync(req.body);
  } catch (err) {
    return res.status(404).json({
      message: err.details[0].message.replace(/"/g, ""),
    });
  }

  User.findOne({ Email: req.body.email }).then((result) => {
    if (result) {
      res.status(403).json({
        message: "Email Already Used!",
      });
    } else {
      bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
        if (err) {
          res.status(404).json({
            error: err,
          });
        }
        let user = new User({
          Name: req.body.username,
          Password: hashedPass,
          Email: req.body.email,
        });
        user
          .save()
          .then((result) => {
            sendVerificationEmail(result, "EmailVerification", res);
            //res.status(200).json({message:"Account Created Successfully"})
          })
          .catch((err) => {
            res.status(403).json({
              message: err,
            });
          });
      });
    }
  });
};

const verify = (req, res, next) => {
  let { userId, uniqueString } = req.params;
  Userverification.findOne({ userId })
    .then((result) => {
      if (result) {
        const { expireAt } = result;
        const hashedUniqueString = result.uniqueString;

        if (expireAt < Date.now()) {
          Userverification.deleteOne({ _id: userId })
            .then((result) => {
              User.deleteOne({ _id: userId })
                .then((result) => {
                  res.status(404).json({
                    message: "link has expired please sign up again",
                  });
                })
                .catch((err) => {
                  res.status(404).json({
                    error: err,
                  });
                });
              console.log("deleted verification successfully");
            })
            .catch((err) => {
              res.status(404).json({
                error: err,
              });
            });
        } else {
          bcrypt.compare(uniqueString, hashedUniqueString, (err, result) => {
            if (err) {
              res.status(404).json({
                message: err,
              });
            } else {
              if (result) {
                User.updateOne(
                  { _id: userId },
                  { Verified: true },
                  { new: true },
                )
                  .then((result) => {
                    Userverification.deleteOne({ userId: userId })
                      .then((result) => {
                        console.log(process.env.CLIENT_URL)
                        res.redirect(`${process.env.CLIENT_URL}/login`);
                      })
                      .catch((err) => {
                        res.status(403).json({
                          message: "error while deleting verification",
                        });
                      });
                  })
                  .catch((err) => {
                    res
                      .status(403)
                      .json({ message: "couldn't update verified" });
                  });
              } else {
                res.status(403).json({ message: "incorrect verification" });
              }
            }
          });
        }
      } else {
        res.status(404).json({
          message: "couldn't find Userverification or already verified",
        });
      }
    })
    .catch((err) => {
      res.status(404).json({ message: err });
    });
};

const login = (req, res, next) => {
  User.findOne({ Email: req.body.email })
    .then((user) => {
      if (user) {
        if (!user.Verified) {
          res.status(403).json({
            status: "failed",
            message: "Email is not verified",
          });
        } else {
          bcrypt.compare(req.body.password, user.Password, function (
            err,
            result
          ) {
            if (err) {
              res.status(403).json({
                error: err,
              });
            }
            if (result) {
              let token = jwt.sign(
                { Id: user.id, Name: user.Name , Email: user.Email },
                process.env.SECRET_KEY,
                {
                  expiresIn: "30h",
                }
              );
              const expirationDate = new Date();
              expirationDate.setTime(
                expirationDate.getTime() + 30 * 60 * 60 * 1000
              );
              res.cookie("token", token, {
                httpOnly: true,
                secure: true,
                sameSite: "strict",
                expires: expirationDate,
              });
              var csrfToken = uuidv4();
              res.status(200).json({
                message: "login successfully !",
                token: token,
                csrfToken: csrfToken,
                userId :user._id
              });
            } else {
              res.status(403).json({
                message: "Username or Password is incorrect",
              });
            }
          });
        }
      } else {
        res.status(404).json({
          message: "Username or Password is incorrect",
        });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

const forgetPasswordRequest = (req, res, next) => {
  const email = req.body.email;

  User.findOne({ Email: email })
    .then((result) => {
      if (result) {
        sendVerificationEmail(result, "forgotPassword", res);
      } else {
        res.status(404).json({ message: "User isn't Exist!" });
      }
    })
    .catch((err) => {
      res.status(403).json({ message: "Error!" });
    });
};

const forgetPasswordResponse = (req, res, next) => {
  try {
    const check = validation.resetPasswordSchema.validate(req.body);
  } catch (err) {
    return res.status(404).json({
      message: err.details[0].message.replace(/"/g, ""),
    });
  }

  var { userId, uniqueString } = req.params;

  Userverification.findOne({ userId: userId })
    .then((result) => {
      if (result) {
        const { expireAt } = result;
        const hashedUniqueString = result.uniqueString;

        if (expireAt < Date.now()) {
          Userverification.deleteOne({ userId: userId })
            .then((result) => {
              User.deleteOne({ _id: userId })
                .then((result) => {
                  res.status(404).json({
                    message: "link has expired",
                  });
                })
                .catch((err) => {
                  res.status(404).json({
                    error: err,
                    message: "server error",
                  });
                });
            })
            .catch((err) => {
              res.status(404).json({
                error: err,
                message: "server error",
              });
            });
        } else {
          bcrypt.compare(uniqueString, hashedUniqueString, (err, result) => {
            if (err) {
              res.status(404).json({
                error: err,
                message: "server error",
              });
            } else {
              if (result) {
                // res
                //   .status(200)
                //   .json({ hashedUniqueString: hashedUniqueString });
                res.redirect(`${process.env.CLIENT_URL}/reset_password/${hashedUniqueString}`);
              } else {
                res.status(404).json({
                  message: "incorrect verification",
                });
              }
            }
          });
        }
      } else {
        res.status(404).json({
          message: "couldnt find Userverification or already verified",
        });
      }
    })
    .catch((err) => {
      res.status(404).json({
        message: err,
      });
    });
};

const resetPassword = async (req, res, next) => {
  const hashedUniqueString = req.body.hashedUniqueString;

  const data = await Userverification.findOne({
    uniqueString: hashedUniqueString,
  });
  if (data) {
    await Userverification.deleteOne({ uniqueString: hashedUniqueString });
    const newPassword = req.body.password;

    bcrypt.hash(newPassword, 10, (err, hashedPass) => {
      if (err) {
        res.json({
          status: "failed",
          message: "an error occurred while hashing email data !",
        });
      } else {
        User.findOneAndUpdate(
          { _id: data.userId },
          { Password: hashedPass },
          { new: true },
        )
          .then((result) => {
            if (result)
              res.json({
                status: "success",
                message: "Password changed successfully",
              });
            else
              res.json({
                status: "failed",
                message: "error while reseting the password",
              });
          })
          .catch((err) => {
            res.status(404).json({
              message: err,
            });
          });
      }
    });
  } else {
    res.status(400).json({
      message: "error while reseting the password !",
    });
  }
};

const googleRegister = (req, res, next) => {
  //res.send(userProfile)

  const email = req.user._json.email;
  const name = req.user._json.name;

  User.findOne({ Email: email }).then((user) => {
    if (user) {
      let token = jwt.sign(
        { Id: user.id, Name: user.Name , Email: user.Email },
        process.env.SECRET_KEY,
        {
          expiresIn: "30h",
        },
      );

      const expirationDate = new Date();
      expirationDate.setTime(expirationDate.getTime() + 30 * 60 * 60 * 1000);
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        expires: expirationDate,
      });

      var csrfToken = uuidv4();
      // res.status(200).json({
      //   message: "login successfully !",
      //   token: token,
      //   csrfToken: csrfToken,
      // });
      res.redirect(`${process.env.CLIENT_URL}/auth/${token}/${user._id}`)
    } else {
      let user = new User({
        Name: name,
        Email: email,
      });
      user
        .save()
        .then((user) => {
          let token = jwt.sign(
            { Id: user.id, Name: user.Name , Email: user.Email },
            process.env.SECRET_KEY,
            {
              expiresIn: "30h",
            },
          );
          const expirationDate = new Date();
          expirationDate.setTime(
            expirationDate.getTime() + 30 * 60 * 60 * 1000,
          );
          res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            expires: expirationDate,
          });
          var csrfToken = uuidv4();
          // res.status(200).json({
          //   message: "login successfully !",
          //   token: token,
          //   csrfToken: csrfToken,
          // });
          res.redirect(`${process.env.CLIENT_URL}/auth/${token}/${user._id}`)
          
        })
        .catch((error) => {
          res.json({
            message: "An error occured ! ",
          });
        });
    }
  });
};

const facebookRegister = (req, res, next) => {
  //res.send(userProfile)

  const id = req.user.id;
  const name = req.user.displayName;

  User.findOne({ FacebookId: id }).then((user) => {
    if (user) {
      let token = jwt.sign(
        { Id: user.id, Name: user.Name },
        process.env.SECRET_KEY,
        {
          expiresIn: "30h",
        },
      );

      const expirationDate = new Date();
      expirationDate.setTime(expirationDate.getTime() + 30 * 60 * 60 * 1000);
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        expires: expirationDate,
      });

      var csrfToken = uuidv4();
      // res.status(200).json({
      //   message: "login successfully !",
      //   token: token,
      //   csrfToken: csrfToken,
      // });
      res.redirect(`${process.env.CLIENT_URL}/auth/${token}/${user._id}`)
    } else {
      let user = new User({
        Name: name,
        FacebookId: id,
      });
      user
        .save()
        .then((user) => {
          let token = jwt.sign(
            { Id: user.id, Name: user.Name  },
            process.env.SECRET_KEY,
            {
              expiresIn: "30h",
            },
          );
          const expirationDate = new Date();
          expirationDate.setTime(
            expirationDate.getTime() + 30 * 60 * 60 * 1000,
          );
          res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            expires: expirationDate,
          });
          var csrfToken = uuidv4();
          // res.status(200).json({
          //   message: "login successfully !",
          //   token: token,
          //   csrfToken: csrfToken,
          // });
          res.redirect(`${process.env.CLIENT_URL}/auth/${token}/${user._id}`)
        })
        .catch((error) => {
          console.log(error)
          res.json({
            message: "An error occured ! ",
          });
        });
    }
  });
};

const linkedinRegister = (req, res, next) => {
  //res.send(userProfile)
  console.log(req.userData)
  const email = req.userData.email;
  const name = req.userData.name;
  const pic = req.userData.picture;


  User.findOne({ Email: email }).then((user) => {
    if (user) {
      let token = jwt.sign(
        { Id: user.id, Name: user.Name },
        process.env.SECRET_KEY,
        {
          expiresIn: "30h",
        },
      );

      const expirationDate = new Date();
      expirationDate.setTime(expirationDate.getTime() + 30 * 60 * 60 * 1000);
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        expires: expirationDate,
      });

      var csrfToken = uuidv4();
      // res.status(200).json({
      //   message: "login successfully !",
      //   token: token,
      //   csrfToken: csrfToken,
      // });
      res.redirect(`${process.env.CLIENT_URL}/auth/${token}/${user._id}`)
    } else {
      let user = new User({
        Name: name,
        Email: email,
        Image: pic,
      });
      console.log("user")
      console.log(user)
      user
        .save()
        .then((user) => {
          let token = jwt.sign(
            { Id: user.id, Name: user.Name },
            process.env.SECRET_KEY,
            {
              expiresIn: "30h",
            },
          );
          const expirationDate = new Date();
          expirationDate.setTime(
            expirationDate.getTime() + 30 * 60 * 60 * 1000,
          );
          res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            expires: expirationDate,
          });
          var csrfToken = uuidv4();
          // res.status(200).json({
          //   message: "login successfully !",
          //   token: token,
          //   csrfToken: csrfToken,
          // });
          res.redirect(`${process.env.CLIENT_URL}/auth/${token}/${user._id}`)
        })
        .catch((error) => {
          console.log(error)
          res.json({
            message: "An error occured ! ",
          });
        });
    }
  });
};


module.exports = {
  register,
  verify,
  login,
  forgetPasswordRequest,
  resetPassword,
  forgetPasswordResponse,
  googleRegister,
  facebookRegister,
  linkedinRegister,
};
