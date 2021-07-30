import axios from 'axios';
import { PDFDocument } from 'pdf-lib';

const drawTextOptions = {
  application: {
    meeting: { x: 177.98, y: 703.65 },
    meetingDate: { x: 177.98, y: 678.67 },
    sponsorship: { x: 177.98, y: 653.2 },
    quota: { x: 177.98, y: 627.33 },
    deadline: { x: 418.18, y: 627.33 },
    openApplicationDate: { x: 56.43, y: 234.15 },
    closing: { x: 56.43, y: 183.15, lineHeight: 17 }
  },
  nomination: {
    meeting: { x: 177.98, y: 703.65 },
    meetingDate: { x: 177.98, y: 678.67 },
    sponsorship: { x: 177.98, y: 653.2 },
    quota: { x: 177.98, y: 627.33 },
    deadline: { x: 418.18, y: 627.33 },
    applicants: { x: 250, y: 577.86, lineHeight: 17 },
    delegates: { x: 250, y: 505.74, lineHeight: 17 },
    resultAnnouncementDate: { x: 56.84, y: 398.74 },
    closing: { x: 56.43, y: 347.89, lineHeight: 17 }

  },
  offer: {
    applicant: { x: 206.5, y: 703.41 },
    sponsoringCompany: { x: 205.5, y: 678.09 },
    meeting: { x: 206.5, y: 653.3 },
    meetingDate: { x: 206.5, y: 627.97 },
    sponsorship: { x: 206.5, y: 602.71 },
    resultAnnouncementDate: { x: 56.84, y: 483.89 },
    closing: { x: 56.84, y: 432.89, lineHeight: 17 }
  },
  memo: {
    from: { x: 61.56, y: 638.39, lineHeight: 13 },
    to: { x: 293.13 , y: 638.39 },
    resultAnnouncementDate: { x: 99.98, y: 573.47 },
    companyContact: { x: 333.25, y: 573.47 },
    body: { x: 61.32, y: 524.9, lineHeight: 17, maxWidth: 476.57 }
  },
  annex: {
    applicant: { x: 260.8, y: 695.07 },
    meeting: { x: 260.8, y: 669.14 },
    meetingDate: { x: 260.8, y: 643.29 },
    sponsoringCompany: { x: 246.05, y: 494.04 },
    closing: { x: 61.02, y: 214.71 },
    resultAnnouncementDate: { x: 305.03, y: 124.09 }
  }
};

function drawTexts (page, name, items) {
  console.log(name);
  items.forEach(item => {
    console.log('type', item.type, ' text', item.text);
    page.drawText(''+item.text, drawTextOptions[name][item.type]);
  });
}

function loadPDF (name) {
  return axios(`./templates/${name}.pdf`, { responseType: 'arraybuffer' })
    .then(response => response.data);
}

async function fillTemplate (template, name, details) {
  const doc = await PDFDocument.load(template);
  const page = doc.getPages()[0];
  page.setFontSize(11);
  page.setLineHeight(12.1);

  const closing = {
    type: 'closing',
    text: `Dr. ${details.councilMember}\n${details.councilPost}\nRTSKHDA\nSession ${details.councilSession}`
  };

  switch (name) {
    case 'application':
      console.log(details.deadline);
      drawTexts(page, name, [
        { type: 'meeting', text: details.meeting },
        { type: 'meetingDate', text: details.meetingDate },
        { type: 'sponsorship', text: details.sponsorship },
        { type: 'quota', text: details.quota },
        { type: 'deadline', text: details.deadline },
        { type: 'openApplicationDate', text: details.openApplicationDate },
        closing
      ]);
      break;

    case 'nomination': {
      const applicants = details.applicants;
      let applicantText = '';
      for (let i = 0; i < applicants.length; i++) {
        applicantText += `Dr. ${applicants[i].name}\n`;
      }
      applicantText.trimRight();
      drawTexts(page, name, [
        { type: 'meeting', text: details.meeting },
        { type: 'meetingDate', text: details.meetingDate },
        { type: 'sponsorship', text: details.sponsorship },
        { type: 'quota', text: details.quota },
        { type: 'deadline', text: details.deadline },
        { type: 'applicants', text: applicantText },
        { type: 'delegates', text: applicantText },
        { type: 'resultAnnouncementDate', text: details.openApplicationDate },
        closing
      ]);
      break;
    }

    case 'memo': {
      const applicants = details.applicants;
      let applicantText = '';
      for (let i = 0; i < applicants.length; i++) {
        applicantText += `Dr. ${applicants[i].name}, `;
      }

      drawTexts(page, name, [
        { type: 'from', text: closing.text },
        { type: 'to', text: details.companyName },
        { type: 'resultAnnouncementDate', text: details.openApplicationDate },
        { type: 'companyContact', text: details.companyContact },
        { type: 'body', text: `Dear Sir/Madam,\n \nOur association would like to nominate ${applicantText.slice(0, -2)} for ${details.meeting} on ${details.meetingDate}.\n \nThank you for your continuous support.\n \nBest regards,\n \n \n \n${closing.text}` }
      ]);
      break;
    }

    case 'offer': {
      const { applicants } = details;
      const len = applicants.length;
      if (len === 0) {
        return [];
      }

      const baseItems = [
        { type: 'sponsoringCompany', text: details.companyName },
        { type: 'meeting', text: details.meeting },
        { type: 'meetingDate', text: details.meetingDate },
        { type: 'sponsorship', text: details.sponsorship },
        { type: 'resultAnnouncementDate', text: details.resultAnnouncementDate },
        closing
      ];

      const uris = [];
      drawTexts(page, name, baseItems.concat({ type: 'applicant', text: `${applicants[0].name}` }));
      uris.push(doc.saveAsBase64({ dataUri: true }));

      if (len > 1) {
        for (let i = 1; i < len; i++) {
          /* eslint-disable no-await-in-loop */
          const doc1 = await PDFDocument.load(template);
          const page1 = doc1.getPages()[0];
          page1.setFontSize(11);
          page1.setLineHeight(12.1);
          drawTexts(page1, name, baseItems.concat({ type: 'applicant', text: `${applicants[i].name}` }));
          uris.push(doc1.saveAsBase64({ dataUri: true }));
        }
      }

      return Promise.all(uris);
    }

    case 'annex': {
      const { applicants } = details;
      const len = applicants.length;
      if (len === 0) {
        return [];
      }

      const baseItems = [
        { type: 'meeting', text: details.meeting },
        { type: 'meetingDate', text: details.meetingDate },
        { type: 'sponsoringCompany', text: details.companyName },
        { type: 'resultAnnouncementDate', text: details.resultAnnouncementDate },
        { type: 'closing', text: `Dr. ${details.councilMember}\n${details.councilPost}` }
      ];

      const uris = [];
      drawTexts(page, name, baseItems.concat({ type: 'applicant', text: `Dr. ${applicants[0].name}` }));
      uris.push(doc.saveAsBase64({ dataUri: true }));

      if (len > 1) {
        for (let i = 1; i < len; i++) {
          /* eslint-disable no-await-in-loop */
          const doc1 = await PDFDocument.load(template);
          const page1 = doc1.getPages()[0];
          page1.setFontSize(11);
          page1.setLineHeight(12.1);
          drawTexts(page1, name, baseItems.concat({ type: 'applicant', text: `Dr. ${applicants[i].name}` }));
          uris.push(doc1.saveAsBase64({ dataUri: true }));
        }
      }

      return Promise.all(uris);
    }
  }

  return doc.saveAsBase64({ dataUri: true });
}

export { loadPDF, fillTemplate };
