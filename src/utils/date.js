const date = new Date();
const y = date.getFullYear();
const m = date.getMonth();
const d = date.getDate();

const session = m >= 3 ? `${y}–${y+1}` : `${y-1}–${y}`;
const today = `${y}-${m+1 > 9 ? m+1 : '0'+(m+1)}-${d > 9 ? d : '0'+d}`;

/**
 * format date string to DD/MM/YYYY
 * @param ymd {string} date string from <input> in YYYY-MM-DD format
 */
function toDMY (ymd) {
  const regex = /(\d{4})-(\d{2})-(\d{2})/;
  const match = ymd.match(regex);
  if (match) {
    return `${match[3]}/${match[2]}/${match[1]}`;
  }
  return '';
}

export { session, today, toDMY };
