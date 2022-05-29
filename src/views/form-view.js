export class FormView {
  constructor(state={}) {
    this.listeners = [];
    this.state = state;
    this.methods = {
      getApplicantHtml (quota, startIndex=0) {
        let html = '';
        for (let i = 0; i < quota; i++) {
          html += `
          <span class="applicant-group">
            <span class="form-input">
            <label for="applicant-name-${i+1+startIndex}">Name</label
            ><input type="text" name="applicant-name" id="applicant-name-${i+1+startIndex}" />
            </span>
            <span class="form-input">
              <label for="applicant-dept-${i+1+startIndex}">Department</label
              ><select name="applicant-dept" id="applicant-dept-${i+1+startIndex}">
                <option value="med">Medicine and Geriatrics</option>
                <option value="surg">Surgery</option>
              </select>
            </span>
          </span>
          `;
        }
        return html;
      }
    };
  }

  addEventListener(el, eventType, listener) {
    el.addEventListener(eventType, listener);
    this.listeners.push([el, eventType, listener]);
  }

  render() {
    const params = this.state.params || {};
    const quota = params.quota || 1;

    const html = `
    <form class="form" id="gf-form">
      <h3>Council member</h3>
      <span class="form-input">
        <label for="council-member">Member name</label><input type="text" name="council-member" id="council-member">
      </span>

      <span class="form-input">
        <label for="council-post">Post</label
        ><select name="council-post" id="council-post" class="select-css">
          <option value="mem">Council member</option>
          <option value="sec">Secretary</option>
          <option value="tre">Treasurer</option>
          <option value="vp">Vice president</option>
          <option value="pd">President</option>
        </select>
      </span>
      <span class="form-input">
        <label for="council-session">Session</label
      ><input type="text" name="council-session" id="council-session" />
      </span>

      <h3>Meeting</h3>
      <span class="form-input">
        <label for="meeting-name">Meeting name</label
        ><input type="text" name="meeting-name" id="meeting-name" />
      </span>

      <span class="form-input">
        <label for="meeting-date">Date</label
        ><input type="text" name="meeting-date" id="meeting-date" />
      </span>

      <span class="form-input">
        <label for="meeting-sponsorship">Sponsorship</label
        ><input
          type="text"
          name="meeting-sponsorship"
          id="meeting-sponsorship"
        />
      </span>

      <span class="form-input">
        <label>Quota</label>
        <input type="hidden" name="meeting-quota" value="1">
        <span class="input-row">
        <button type="button" class="btn-bi btn-quota-minus"><i class="bi-dash-circle-fill"></i></button
        ><span class="meeting-quota-display">1</span
        ><button type="button" class="btn-bi btn-quota-plus"><i class="bi-plus-circle-fill"></i></button>
        </span>
      </span>

      <h3>Sponsoring company</h3>
      <span class="form-input">
        <label for="sponsor-name">Company name</label
        ><input type="text" name="sponsor-name" id="sponsor-name" />
      </span>

      <span class="form-input">
        <label for="sponsor-contact">Contact person</label
        ><input type="text" name="sponsor-contact" id="sponsor-contact" />
      </span>

      <h3>Timeline</h3>
      <span class="form-input">
        <label for="date-open">Open application</label
        ><input type="date" name="date-open" id="date-open" />
      </span>

      <span class="form-input">
        <label for="date-close">Deadline</label
        ><input type="date" name="date-close" id="date-close" />
      </span>

      <span class="form-input">
        <label for="date-result">Result annoucement</label
        ><input type="date" name="date-result" id="date-v" />
      </span>

      <h3>Applicants</h3>
      <span class="applicant-groups">${this.methods.getApplicantHtml(quota)}</span>
    </form>

    <button type="button" class="btn-genform">Generate form</button>
    `;

    return html;
  }

  onLoad() {
    let ctx = this;

    let form = document.getElementById('gf-form');

    let quotaInput = document.getElementsByName('meeting-quota')[0];
    let quotaDisplay = document.querySelector('.meeting-quota-display');
    let quotaMinusBtn = document.querySelector('.btn-quota-minus');
    let quotaPlusBtn = document.querySelector('.btn-quota-plus');

    let applicantGroupsEl = document.querySelector('.applicant-groups');
    let applicantNamesInput = document.getElementsByName('applicant-name');
    let deptInput = document.getElementsByName('applicant-dept');

    /**
     * Determine status of minus quota button
     * If quota is one only, it is disabled
     * It is enabled whenever there is at least one empty applicant name field
     */
    function updateMinusBtn() {
      if (Number(quotaInput.value) === 1) {
        quotaMinusBtn.disabled = true;
        return;
      }

      for (let i = 0; i < applicantNamesInput.length; i++) {
        if (applicantNamesInput[i].value.length === 0) {
          quotaMinusBtn.disabled = false;
          return;
        }
      }
      quotaMinusBtn.disabled = true;
    }

    this.addEventListener(
      quotaPlusBtn,
      'click',
      function () {
        // update input value and display
        quotaInput.value = Number(quotaInput.value) + 1;
        quotaDisplay.innerHTML = quotaInput.value;

        // append new applicant group
        const wrapper = document.createElement('span');
        wrapper.innerHTML = ctx.methods.getApplicantHtml(1, quotaInput.value-1);

        const applicantGroup = document.createElement('span');
        applicantGroup.className = 'applicant-group';
        applicantGroup.innerHTML = wrapper.children[0].innerHTML;

        applicantGroupsEl.append(applicantGroup);

        // update minus button status
        updateMinusBtn();
      }
    );

    this.addEventListener(
      quotaMinusBtn,
      'click',
      function () {
        let lastGroup = applicantGroupsEl.lastElementChild;
        let name = lastGroup.querySelector('input').value;
        if (name.length !== 0) {
          let dept = lastGroup.querySelector('select').value;

          // locate first empty applicant field, and fill in name and dept
          for (let i = 0; i < applicantNamesInput.length; i++) {
            if (applicantNamesInput[i].value.length === 0) {
              applicantNamesInput[i].value = name;
              deptInput[i].value = dept;
              break;
            }
          }
        }

        // remove the last applicant field
        lastGroup.remove();

        // update input value and display
        quotaInput.value = Number(quotaInput.value) - 1;
        quotaDisplay.innerHTML = quotaInput.value;

        updateMinusBtn();
      }
    );

    // capture changes in applicant fields
    this.addEventListener(
      document.querySelector('.applicant-groups'),
      'input',
      updateMinusBtn
    );

    this.addEventListener(
      document.querySelector('.btn-genform'),
      'click',
      function () {
        const required = ['council-member', 'council-post', 'council-session',
                          'meeting-name', 'meeting-date', 'meeting-quota',
                          'meeting-sponsorship', 'sponsor-name', 'sponsor-contact',
                          'date-open', 'date-close', 'date-result'];

        const missing = required.filter(name => {
          return form.elements.namedItem(name).value.length === 0;
        });

        if (missing.length > 0) {
          alert('Some fields are missing:\n' + missing.join('\n'))
          return;
        }
      }
    );

    // should be called after form data is loaded
    updateMinusBtn();
  }

  beforeUnload () {
    this.listeners.forEach(([el, inputType, listener]) => {
      el.removeEventListener(inputType, listener);
    });
  }
}
