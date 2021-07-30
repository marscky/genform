<template>
  <section>
    <h4>Who is creating the form?</h4>
    <field-input
      v-model.trim="councilMember" field-name="council-member"
      field-display-name="Council member" field-type="text"></field-input>
    <field-input
      v-model.trim="councilPost" field-name="council-post"
      field-display-name="Post" field-type="select"
      :field-options="['Council member', 'Secretary', 'Treasurer', 'President']"></field-input>
    <field-input
      v-model.trim="councilSession" field-name="council-session"
      field-display-name="Session" disabled></field-input>

    <h4>Meeting details</h4>
    <field-input
      v-model.trim="meeting" field-name="meeting"
      field-display-name="Meeting" field-type="text"></field-input>
    <field-input
      v-model.trim="meetingDate" field-name="meeting-date"
      field-display-name="Date" field-type="text"></field-input>
    <field-input
      v-model.trim="sponsorship" field-name="sponsorship"
      field-display-name="Sponsorship" field-type="text"></field-input>
    <div class="quota">
      <strong>Quota</strong>
      <button
        type="button"
        class="button button-clear"
        :class="{ disabled: quota === 1 }"
        @click="updateQuota(-1)">
        <i data-feather="minus-circle"></i>
      </button>
      <span>{{ quota }}</span>
      <button
        type="button"
        class="button button-clear"
        @click="updateQuota(1)">
        <i data-feather="plus-circle"></i>
      </button>
    </div>

    <h4>Sponsoring company</h4>
    <field-input
      v-model.trim="companyName" field-name="company-name"
      field-display-name="Company name" field-type="text"></field-input>
    <field-input
      v-model.trim="companyContact" field-name="company-contact"
      field-display-name="Company contact person" field-type="text"></field-input>

    <h4>Important dates</h4>
    <field-input
      v-model="openApplicationDate" field-name="open-application-date"
      field-display-name="Open application date" field-type="date"></field-input>
    <field-input
      v-model="deadline" field-name="deadline"
      field-display-name="Deadline" field-type="date"></field-input>
    <field-input
      v-model="resultAnnouncementDate" field-name="result-announcement-date"
      field-display-name="Result announcement date" field-type="date"></field-input>

    <h4>Applicants</h4>
    <template v-for="(applicant, i) in applicants" :key="i">
      <h5 class="applicant-heading">Applicant {{ i + 1 }}</h5>
      <field-input
        v-model.trim="applicants[i].name" :field-name="`applicant-name-${i}`"
        field-display-name="Name" field-type="text"></field-input>
      <field-input
        v-model.trim="applicants[i].department" :field-name="`department-${i}`"
        field-display-name="Department" field-type="text"></field-input>
      <hr>
    </template>

    <button @click="generate">Generate</button>
  </section>
</template>

<script>
import feather from 'feather-icons';
import FieldInput from './FieldInput.vue';
import { session, today, toDMY } from '../utils/date';

export default {
  name: 'FieldEdit',
  mounted () {
    feather.replace();
  },
  data () {
    return {
      meeting: '',
      meetingDate: '',
      sponsorship: '',
      quota: 1,
      councilMember: '',
      councilPost: 'Council member',
      councilSession: session,
      openApplicationDate: today,
      deadline: '',
      resultAnnouncementDate: '',
      companyName: '',
      companyContact: '',
      applicants: [{}]
    };
  },
  computed: {
    details () {
      const _applicants = [];
      this.applicants.forEach(a => {
        // do not add empty applicants
        if (a.name || a.department) {
          _applicants.push({ name: a.name, department: a.department });
        }
      });

      return {
        meeting: this.meeting,
        meetingDate: this.meetingDate,
        sponsorship: this.sponsorship,
        quota: this.quota,
        councilMember: this.councilMember,
        councilPost: this.councilPost,
        councilSession: this.councilSession,
        openApplicationDate: toDMY(this.openApplicationDate),
        deadline: toDMY(this.deadline),
        resultAnnouncementDate: toDMY(this.resultAnnouncementDate),
        companyName: this.companyName,
        companyContact: this.companyContact,
        applicants: _applicants
      };
    }
  },
  methods: {
    generate () {
      this.$emit('generate', this.details);
    },
    updateQuota (delta) {
      if (delta === 1) {
        this.applicants.push({});
      } else if (delta === -1) {
        const newQuota = this.quota - 1;
        const { applicants } = this;

        if (newQuota === 0) {
          return false;
        }

        for (let i = applicants.length - 1; i >= newQuota; i--) {
          const values = Object.values(applicants[i]);
          for (let j = 0; j < values.length; j++) {
            if (values[j]) {
              alert('Existing data!\nClear out the fields first.');
              return false;
            }
          }
        }

        this.applicants.splice(newQuota, -delta);
      }

      this.quota = this.applicants.length;
      return true;
    }
  },
  components: {
    FieldInput
  }
};
</script>

<style lang="scss" scoped>
h4 {
  margin-top: 2rem;
}

.quota {
  margin-top: 1rem;

  > * {
    vertical-align: top;
  }

  .button {
    margin-bottom: 0;
  }
}

input[disabled],
.disabled {
  cursor: not-allowed;
}

.applicant-heading {
  margin-bottom: 1rem;
}
</style>
