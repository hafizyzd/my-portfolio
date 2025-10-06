<script setup>
import { ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const formError = ref({
  name: "",
  email: "",
  message: "",
});

// make function on submit console form in log
const submit = () => {
  // Reset previous form errors
  formError.value = {
    name: "",
    email: "",
    message: "",
  };

  // Check if name is empty
  if (form.value.name.trim() === "") {
    formError.value.name = "Name is required";
  }

  // Check if email is empty or invalid format
  if (form.value.email.trim() === "") {
    formError.value.email = "Email is required";
  } else if (!isValidEmail(form.value.email)) {
    formError.value.email = "Invalid email format";
  }

  // Check if message is empty
  if (form.value.message.trim() === "") {
    formError.value.message = "Message is required";
  }

  // If there are no form errors, proceed with form submission
  if (
    formError.value.name === "" &&
    formError.value.email === "" &&
    formError.value.message === ""
  ) {
    sendMessage();
  }
};

const sendMessage = () => {
  axios
    .post("http://localhost:3000/messages", form.value)
    .then(() => {
      // Reset form
      form.value = {
        name: "",
        email: "",
        message: "",
      };

      Swal.fire(
        "Yeay, 🥳",
        "Your message has been sent successfully",
        "success"
      );
    })
    .catch((err) => {
      console.log(err);
    }).finally;
};

// Function to check if email has a valid format
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
</script>

<template>
  <!-- make contact component -->
  <div class="container" id="contact">
    <div class="col-md-6 mx-auto">
      <h1 class="text-center fw-bold fs-1">Contact Me</h1>
      <!-- make form contact name,email,messages -->

      <div class="mb-3 mt-5">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" v-model="form.name" />
        <small class="text-danger" v-if="formError.name">{{
          formError.name
        }}</small>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="form.email" />
        <small class="text-danger" v-if="formError.email">{{
          formError.email
        }}</small>
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Message</label>
        <textarea
          class="form-control"
          id="message"
          rows="3"
          v-model="form.message"></textarea>
        <small class="text-danger" v-if="formError.message">{{
          formError.message
        }}</small>
      </div>
      <button type="submit" @click="submit" class="btn btn-primary">
        Send Messages
      </button>
    </div>
  </div>
</template>

<style scoped>
#contact {
  margin-top: 100px;
  min-height: 100vh;
}
</style>
