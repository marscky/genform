import axios from 'axios';
import { PDFDocument } from 'pdf-lib';

const drawTextOptions = {
  application: {
    'conference-name': { x: 177.98, y: 703.65 },
    'conference-date': { x: 177.98, y: 678.67 },
    'conference-cost': { x: 177.98, y: 653.2 },
    quota: { x: 177.98, y: 627.33 },
    deadline: { x: 418.18, y: 627.33 },
    'open-application-date': { x: 56.43, y: 234.15 },
    closing: { x: 56.43, y: 183.15, lineHeight: 17 }
  },
  nomination: {
    'conference-name': { x: 177.98, y: 703.65 },
    'conference-date': { x: 177.98, y: 678.67 },
    'conference-cost': { x: 177.98, y: 653.2 },
    quota: { x: 177.98, y: 627.33 },
    deadline: { x: 418.18, y: 627.33 },
    applicants: { x: 250, y: 577.86 },
    delegates: { x: 250, y: 505.74 },
    'result-announcement-date': { x: 56.84, y: 398.74 },
    closing: { x: 56.43, y: 347.89, lineHeight: 17 }

  },
  offer: {
    applicant: { x: 206.5, y: 703.41 },
    'sponsoring-company': { x: 205.5 , y: 678.09 },
    'conference-name': { x: 206.5, y: 653.3 },
    'conference-date': { x: 206.5, y: 627.97 },
    'conference-cost': { x: 206.5, y: 602.71 },
    'result-announcement-date': { x: 56.84, y: 483.89 },
    closing: { x: 56.84, y: 432.89, lineHeight: 17 }
  },
  memo: {
    from: { x: 61.56, y: 638.39, lineHeight: 13 },
    to: { x: 293.13 , y: 638.39 },
    'result-announcement-date': { x: 99.98, y: 573.47 },
    'sponsoring-company-contact': { x: 333.25, y: 573.47 },
    closing: { x: 61.32, y: 524.9, lineHeight: 17 }
  },
  annex: {
    applicant: { x: 260.8, y: 695.07 },
    'conference-name': { x: 260.8, y: 669.14 },
    'conference-date': { x: 260.8, y: 643.29 },
    'sponsoring-company': { x: 246.05, y: 494.04 },
    closing: { x: 61.02, y: 214.71 },
    'result-announcement-date': { x: 305.03, y: 124.09 }
  }
};

const templates = {};
let params = {};

function loadPDF (name) {
  return axios.get(`./templates/${name}.pdf`, { responseType: 'arraybuffer' })
    .then(response => PDFDocument.load(response.data))
    .then(doc => templates[name] = doc)
    .catch(error => console.error(error));
}

function drawText (page, texts) {
  for (let i = 0; i <= texts.length; i++) {
    const text = texts[i];
    if (typeof(text) === 'string') {
      console.log('txt');
      page.drawText(''+params[text], drawTextOptions[text]);
    } else if (text && text.text) {
      page.drawText(''+text.text, drawTextOptions[text.type]);
    }
  }
}

function fillPage (name) {
  const page = templates[name].getPages()[0];
  const options = drawTextOptions[name];
  page.setFontSize(11);
  page.setLineHeight(12.1);

  switch (name) {
    case 'application':
      drawText(page, ['conference-name', 'conference-date', 'conference-cost', 'quota', 'deadline', 'open-application-date', { type: 'closing', text: `${params['council-member']}\n${params['council-post']}\nRTSKHDA\nSession ${params['session-year']}`}]);
      break;

    case 'nomination':
      const applicants = params.applicants;
      let applicantNames = '';
      for (let i = 0; i < applicants.length; i++) {
        applicantNames += `${applicants[i].name}\n`;
      }

      let closing = `${params['council-member']}\n${params['council-post']}\nRTSKHDA\nSession ${params['session-year']}`;
      drawText(page, [
        'conference-name',
        'conference-date',
        'conference-cost',
        'quota',
        'deadline',
        {
          type: 'applicants',
          text: applicantNames 
        },
        {
          type: 'delegates',
          text: applicantNames
        },
        'result-announcement-date',
        {
          type: 'closing',
          text: closing
        }
      ]);
      break;
  }

  return page.doc.saveAsBase64({ dataUri: true });
}

loadPDF('application');
loadPDF('nomination');
loadPDF('offer');
loadPDF('memo');
loadPDF('annex');

export default function (newParams) {
  params = newParams;
  return fillPage('application');
};
