<template>
  <div class="hero min-h-full bg-base-200">
    <div class="flex-col justify-center hero-content lg:flex-row">
      <div class="text-center lg:text-left">
        <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
        <p class="mb-5">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
          exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
      </div>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">E-Mail</span>
            </label>
            <input type="text" placeholder="E-mail" class="input input-bordered" />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              name="phone"
              id="phone"
              required
              placeholder="Password"
              class="input input-bordered"
            />
            <label class="label">
              <a href="#" class="label-text-alt">Forgot password?</a>
            </label>
          </div>
          <div class="form-control mt-6">
            <input type="button" value="Login" class="btn btn-outline btn-primary" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
.input-with-placeholder {
  position: relative;
  label {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 10px;
    transition: 50ms all;
  }
  input {
    &:valid + label,
    &:focus + label {
      height: 50%;
      padding-left: 0;
      transform: translateY(-100%);
      font-size: 12px;
      color: gray;
    }
  }
}
</style>
