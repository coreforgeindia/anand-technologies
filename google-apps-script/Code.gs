/**
 * Anand Technologies - Google Apps Script
 * Receives POST requests from the website enquiry form.
 * Sends email notifications and appends leads to Google Sheets.
 *
 * Deploy as: Web App > Execute as Me > Access: Anyone
 */

const SALES_EMAIL = 'sales@anandtech.in'
const CEO_EMAIL = 'ceo@anandtech.in'
const SHEET_NAME = 'Enquiries'

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents)
    appendToSheet(data)
    sendEmailNotification(data)
    sendAutoReply(data)
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON)
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON)
  }
}

function appendToSheet(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  let sheet = ss.getSheetByName(SHEET_NAME)

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME)
    sheet.appendRow([
      'Timestamp', 'Name', 'Company', 'Email', 'Phone', 'Products', 'Message', 'Status'
    ])
    sheet.getRange(1, 1, 1, 8).setFontWeight('bold')
    sheet.setFrozenRows(1)
  }

  sheet.appendRow([
    new Date(data.timestamp || new Date()),
    data.name || '',
    data.company || '',
    data.email || '',
    data.phone || '',
    data.products || '',
    data.message || '',
    'New',
  ])
}

function sendEmailNotification(data) {
  const subject = `[New RF Enquiry] ${data.name} — ${data.company || 'Unknown Company'}`
  const body = `
New RF/Microwave enquiry received via anandtech.in

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTACT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name:     ${data.name}
Company:  ${data.company || 'Not provided'}
Email:    ${data.email}
Phone:    ${data.phone}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PRODUCT INTEREST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${data.products || 'Not specified'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REQUIREMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${data.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted: ${new Date(data.timestamp || new Date()).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
Via: anandtech.in/contact
  `.trim()

  GmailApp.sendEmail(SALES_EMAIL, subject, body)

  // High-value leads (defense, large company) also notify CEO
  const highValueKeywords = ['defense', 'drdo', 'army', 'navy', 'isro', 'bhel', 'airtel', 'jio', 'ericsson', 'nokia']
  const isHighValue = highValueKeywords.some(
    kw =>
      (data.company || '').toLowerCase().includes(kw) ||
      (data.message || '').toLowerCase().includes(kw)
  )
  if (isHighValue) {
    GmailApp.sendEmail(CEO_EMAIL, `[Priority Lead] ${subject}`, body)
  }
}

function sendAutoReply(data) {
  const subject = 'Your enquiry with Anand Technologies — Ref received'
  const body = `
Dear ${data.name},

Thank you for contacting Anand Technologies. We have received your RF/microwave component enquiry and a member of our sales engineering team will respond within 24 hours.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
YOUR ENQUIRY SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Products of interest: ${data.products || 'General enquiry'}
Message: ${data.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If your requirement is urgent, you may reach our sales team directly:

  Phone:  +91 80 0000 0000
  Email:  sales@anandtech.in

We look forward to supporting your RF engineering program.

Best regards,
Anand Technologies Sales Team
Bengaluru, Karnataka, India
https://anandtech.in

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Anand Technologies | RF & Microwave Engineering
#42, 3rd Cross, Electronics City Phase 1
Bengaluru 560100, India
  `.trim()

  GmailApp.sendEmail(data.email, subject, body, {
    name: 'Anand Technologies Sales',
    replyTo: SALES_EMAIL,
  })
}

function doGet() {
  return ContentService
    .createTextOutput('Anand Technologies Enquiry Handler — POST requests only.')
    .setMimeType(ContentService.MimeType.TEXT)
}
