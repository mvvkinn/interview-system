<template>
  <div>
    <div class="container">
      <hr />
      <form class="form">
        <textarea
          name="text"
          id="text"
          cols="150"
          rows="10"
          placeholder="Enter URL or Text"
        ></textarea>
        <button type="submit" @click.prevent="click()" class="btn btn-primary">
          create
        </button>
      </form>
    </div>
    <div class="container">
      <img src="img" alt="QR Code" />
      <br />
      <a href="/" role="button" class="">back</a>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  methods: {
    async click() {
      const data = {
        id: "1234",
        username: "abc",
        password: "123",
        email: "abc@naver.com",
      };
      await this.$axios
        .get("/getQr1", JSON.stringify(data), {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          console.log("success", res);
        });
    },
  },
};
</script>
<style></style>
