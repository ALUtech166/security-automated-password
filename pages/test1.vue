<template>
    <div>
        <div>
            <label>Name</label>
            <input type="text" v-model="form.name"/>
        </div>

        <div>
            <label>Email</label>
            <input type="text" v-model="form.email"/>
        </div>

        <div>
    <label>Password</label>
    <input type="password" v-model="form.password" :style="passwordStyle"/>

    <div>
        <span v-bind:class="{
                    'red' : passwordStrength.score <= 1,
                    'orange' : passwordStrength.score == 2,
                    'yellow' : passwordStrength.score == 3,
                    'green' : passwordStrength.score == 4
                }"></span>
        <span v-bind:class="{
                    'grey' : passwordStrength.score <= 1,
                    'orange' : passwordStrength.score == 2,
                    'yellow' : passwordStrength.score == 3,
                    'green' : passwordStrength.score == 4
                }"></span>
        <span v-bind:class="{
                    'grey' : passwordStrength.score <= 2,
                    'yellow' : passwordStrength.score == 3,
                    'green' : passwordStrength.score == 4
                }"></span>
        <span v-bind:class="{
                    'grey' : passwordStrength.score <= 3,
                    'green' : passwordStrength.score == 4
                }"></span>

    
    </div>
</div>
        
        <div>
            <label>Confirm Password</label>
            <input type="password" v-model="form.confirm_password"/>
        </div>

        <a v-on:click="register()">Register</a>
    </div>
</template>

<script>
const zxcvbn = require('zxcvbn');

export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: '',
                confirm_password: ''
            }
        }
    },
    computed: {
        passwordStrength() {
            return zxcvbn(this.form.password);
        },
        passwordStyle() {
            // Define a CSS style object based on password strength
            if (this.passwordStrength.score < 4) {
                return { borderColor: 'red' }; // Weak password, set border color to red
            } else {
                return { borderColor: 'green' }; // Strong password, set border color to green
            }
        }
    },
    methods: {
        register() {
            if (this.passwordStrength.score < 4) {
                // Weak password, re-do
                alert("Please choose a stronger password.");
            } else {
                // Password is strong, proceed with registration
                // You can put your registration logic here
                alert("Registration successful!");
            }
        }
    }
}
</script>