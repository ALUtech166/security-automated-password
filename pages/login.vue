<template>
    <div>
        <section class="lg:tw-pb-10 lg:tw-px-3 tw-p-4 tw-flex-col tw-gap-4 tw-mt-8">
            <div class="tw-w-full">
                <div class="tw-flex tw-flex-col tw-mb-6 tw-px-2 md:tw-px-6 lg:tw-px-10 tw-w-full">
                    <div class="xl:tw-px-20 tw-flex tw-justify-center tw-w-full tw-mb-20">
                        <div
                            class="tw-grid lg:tw-grid-cols-2 tw-gap-4 lg:tw-gap-0 tw-w-full tw-h-full tw-rounded-t-xl tw-shadow-2xl tw-shadow-gray-800">
                            <div
                                class=" tw-h-full tw-bg-white tw-block tw-cursor-pointer tw-rounded-xl tw-w-full tw-shadow-2xl tw-shadow-indigo-100">
                                <img alt="Home"
                                    src="https://img.freepik.com/free-vector/technology-background-concept_23-2148483796.jpg?w=740&t=st=1696442041~exp=1696442641~hmac=1eed6a71d9057dc6f5d831342f658a4f32fc618d877aeb0f10f23e176d97507a"
                                    class="tw-h-full tw-w-full tw-object-cover tw-bg-opacity-60 tw-rounded-l-md tw-shadow-2xl" />
                            </div>
                            <div
                                class="tw-bg-white  tw-block tw-cursor-pointer tw-w-full tw-shadow-2xl tw-shadow-indigo-100">
                                <div class="tw-px-8 tw-bg-white">
                                    <p class="lg:tw-mx-10 tw-text-black tw-text-md tw-mt-2">
                                        Login to your account
                                    </p>
                                    <div class="lg:tw-mx-10 tw-flex tw-gap-4 tw-mt-4">
                                        <hr class="lg:tw-w-24 tw-w-12 tw-h-1 bg-color tw-my-1">
                                        <hr class="lg:tw-w-24 tw-w-12 tw-h-1 tw-bg-gray-500 tw-my-1">
                                    </div>
                                </div>
                                <form class="lg:tw-mt-0 lg:tw-px-8 tw-px-4 tw-py-4 lg:tw-py-8" @submit.prevent="loginUser">
                                    <div class="tw-w-full tw-md:w-1/2 tw-mt-2 lg:tw-px-10">
                                        <label class="tw-block tw-font-extrabold tw-mb-1" for="email">
                                            Email Address
                                        </label>
                                        <input type="email" name="email" id="email" placeholder="email@example.com"
                                            v-model="user.email"
                                            class="tw-block  tw-bg-gray-300 tw-placeholder-gray-300 tw-w-full  tw-text-black tw-shadow-xl tw-rounded-lg tw-outline-none  tw-mb-1 tw-p-3"
                                            required />
                                    </div>
                                    <div class="tw-w-full tw-md:w-1/2">
                                        <label class="tw-block lg:tw-px-10 tw-font-extrabold tw-mb-1" for="number">
                                            Password
                                        </label>
                                        <password v-model="user.password"
                                            class="tw-block tw-bg-gray-300 tw-placeholder-gray-300 tw-w-full  tw-text-black tw-shadow-xl tw-rounded-lg tw-outline-none  tw-mb-1 tw-p-3"
                                            :toggle="true" />
                                    </div>

                                    <button
                                        class="lg:tw-mx-10 tw-group bg-color tw-shadow-lg tw-rounded-lg tw-relative tw-h-12 tw-mt-4 tw-cursor-pointer hover:tw-transform hover:tw-translate-x-2 hover:tw-transition-transform hover:tw-duration-300 hover:tw-shadow-2xl-blue-600 hover:tw-shadow-2xl-lg tw-w-48 tw-overflow-hidden tw-rounded-lg tw-text-lg tw-shadow-2xl-2xl">
                                        <div
                                            class="tw-absolute tw-inset-0 tw-w-full bg-color tw--transition-all tw-duration-[250ms] tw-ease-out group-hover:tw-w-full">
                                        </div>
                                        <span
                                            class="tw-relative tw-inline-flex tw-items-center tw-gap-2 tw-text-white group-hover:tw-text-white">
                                            Sign In
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
  
<script>
import Password from 'vue-password-strength-meter';

export default {
    components: { Password },
    data() {
        return {
            title: 'Nous userer Page',
            user: {
                email: '',
                password: '',
            },
        };
    },
    methods: {
        // Assuming your backend returns the user's role in the response
        async loginUser() {
            try {
                const response = await axios.post('http://localhost:8000/api/auth/login', this.user);
                const { token, role } = response.data;

                // You can store the token in local storage or a cookie for authentication
                console.log('Login successful');

                // Determine the appropriate route based on the user's role
                let redirectRoute = '';
                switch (role) {
                    case 'student':
                        redirectRoute = '/student-dashboard';
                        break;
                    case 'facilitator':
                        redirectRoute = '/facilitator-dashboard';
                        break;
                    case 'teamlead':
                        redirectRoute = '/teamlead-dashboard';
                        break;
                    default:
                        // Handle other roles or cases
                        break;
                }

                // Redirect to the appropriate dashboard
                this.$router.push(redirectRoute);
            } catch (error) {
                console.error('Login failed', error);
            }
        },

    },
};
</script>
  
<style scoped>
.bg-color {
    background-color: #C70039;
}

:hover.hover-bg {
    background-color: #C70039;
}

.text-color,
label {
    color: #C70039;
}

button {
    color: black;
}
</style>
  