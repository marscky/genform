export class FormView {
  constructor(state={}) {
    this.state = state;
    this.methods = {
      getApplicantHtml (quota) {
        let html = '';
        for (let i = 0; i < quota; i++) {
          html += `
          <span class="applicant-group">
            <span class="form-input">
            <label for="applicant-name">Name</label
            ><input type="text" name="applicant-name" id="applicant-name" />
            </span>
            <span class="form-input">
              <label for="applicant-dept">Department</label
              ><select name="applicant-dept" id="applicant-dept" class="select-css">
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

  render() {
    const params = this.state.params;
    const quota = params ? 1 : 2;

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
        <label for="meeting-quota">Quota</label
        ><input
          type="number"
          name="meeting-quota"
          id="meeting-quota"
          min="1"
          step="1"
          value="1"
        />
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
    `;

    return html;
    // return '<h1>form</h1>' + (params ? 'id: '+params.id : 'new form');
  }

  onLoad() {
    console.log('form loaded');
    this.listener = function (e) {
      console.log(e.target.value);
    };
    document.querySelector('input[name="meeting-quota"]').addEventListener('change', this.listener);
  }

  beforeUnload () {
    document.querySelector('input[name="meeting-quota"]').removeEventListener('change', this.listener);
  }
}
