<template>
  <div>
    <input v-model="user_email" v-on:keyup.enter="submitEmail" placeholder="Please type in your email...">
    <p> {{ emailStatusMsg }} </p>
    <p v-if="this.isEmailOK && !this.isOTPFail"> {{ otpMsg }} </p>
    <input v-if="this.isEmailOK && !this.isOTPFail" v-model="inputOTP" v-on:keyup.enter="check_OTP" placeholder="Please type in OTP...">
    <p v-if="this.isEmailOK"> {{ otpStatusMsg }} </p>
  </div>
</template>

<script>
export default {
  data() {
      return {
        user_email: "",
        isEmailOK: false,
        isEmailInvalid: false,
        isEmailFail: false,
        isOTPOK: false,
        isOTPFail: false,
        isOTPTimeout: false,
        emailStatusMsg: "",
        emailDatabase: ["a.dso.org.sg","b.dso.org.sg"],
        inputOTP: "",
        otpMsg: "",
        otpStatusMsg: "",
        genOTP: "",
        retryCounter: 10,
      };
    },
  computed: {
    extraWord() {
      return this.isOTPTimeout == true ? 'new' : ''
    }
  },
  methods: {
    submitEmail() {
      var regex = new RegExp('^[a-zA-Z0-9_-]+\\.dso\\.org\\.sg$','gm');
      this.isEmailOK = regex.test(this.user_email);
      if (this.isEmailOK) {
        if (this.emailDatabase.includes(this.user_email)) {
          this.isEmailFail = false;
          this.emailStatusMsg = "STATUS_EMAIL_OK: email containing OTP has been sent successfully.";
          this.generate_OTP_email();
        } else {
          this.isEmailFail = true;
          this.isEmailOK = false;
          this.emailStatusMsg = "STATUS_EMAIL_FAIL: email address does not exist or sending to the email has failed.";
        }
      } else {
        this.isEmailInvalid == true;
        this.isEmailOK = false;
        this.emailStatusMsg = "STATUS_EMAIL_INVALID: email address is invalid.";
      }
    },
    generate_OTP_email() {
      this.genOTP = "";
      for (let i = 0; i < 6; i++) {
        this.genOTP += Math.floor((Math.random() * 10));
      }
      this.otpMsg = "Your " + this.extraWord + " OTP Code is " + this.genOTP + ". The code is valid for 1 minute";
      setInterval(this.checkOTPTimeout, 60000);
    },
    check_OTP() {
      if (this.inputOTP === this.genOTP) {
        this.isOTPOK = true;
        this.otpStatusMsg = "STATUS_OTP_OK: OTP is valid and checked";
      } else {
        if (this.retryCounter != 0) {
          this.retryCounter -= 1;
          this.otpStatusMsg = "STATUS_OTP_FAIL: OTP is wrong. You have " + this.retryCounter + " tries left";
        } else {
          this.isOTPFail = true;
          this.otpStatusMsg = "STATUS_OTP_FAIL: OTP authentication failed. You have no more tries left. Please contact Admin.";
        }
      }
    },
    checkOTPTimeout() {
      if(this.isOTPOK == false) {
        this.isOTPTimeout = true;
        this.generate_OTP_email();
      } else {
        this.isOTPTimeout = false;
        clearInterval(this.checkOTPTimeout);
      }
    },
  }
};
</script>
