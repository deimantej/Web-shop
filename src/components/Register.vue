<template>
    <v-container>
        <v-row >
            <v-col offset-md="3" md="6" xs="12" >
                <h1>Registration</h1>
                <div id="info">
                    <v-text-field 
                    v-model="email"
                    label="Email"
                    required>
                    </v-text-field>
                    <v-text-field 
                    v-model="password"
                    label="Password"
                    required>
                    </v-text-field>
                    <v-text-field 
                    v-model="firstName"
                    label="First name"
                    required>
                    </v-text-field>
                    <v-text-field 
                    v-model="lastName"
                    label="Last name"
                    required>
                    </v-text-field>
                    <v-btn v-on:click="register">Register</v-btn>
                </div>
                <div>
                    <span> Already have an account? 
                        <v-btn text small color="blue" to="/login">Log in</v-btn>
                    </span>
                </div>
            </v-col>
        </v-row>
    </v-container>


   <!-- <div>
        <div class="container">
            <div class="row">
                <div class="col s12 m8 offset-m2">
                    <div class="login card-panel grey lighten-4 black-text center">
                        <h3>Register</h3>
                        <form action="index.html">
                            <div class="input-field">
                                <i class="material-icons prefix">email</i>
                                <input type="email" id="email" v-model="email">
                                <label for="email">Email Address</label>
                            </div>
                            <div class="input-field">
                                <i class="material-icons prefix">lock</i>
                                <input type="password" id="password" v-model="password">
                                <label for="password">Password</label>
                            </div>
                            <div class="input-field">
                                <input type="text" id="firstName" v-model="firstName">
                                <label for="firstName">First name</label>
                            </div>
                            <div class="input-field">
                                <input type="text" id="lastName" v-model="lastName">
                                <label for="lastName">Last name</label>
                            </div>
                            <button v-on:click="register" class="btn btn-large btn-extended grey lighten-4 black-text">
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>   -->
</template>

<script>
    import * as firebase from 'firebase';
    import 'firebase/firestore';
    import '@firebase/auth';
    import {dbUsers} from '../../firebase';


    export default {
        name: 'register',
        data: function () {
            return {
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                isAdmin: false,

            };
        },
        methods: {
            register: function (e) {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(this.email, this.password)
                    .then(
                        res => {
                          dbUsers.doc(res.user.uid).set({
                                email: this.email,
                                firstName: this.firstName,
                                lastName: this.lastName,
                                isAdmin: this.isAdmin
                            });
                            console.log(res);
                            // alert(`Account Created for ${res.email}`);
                            // this.$router.push('/');
                        },
                        err => {
                            alert(err.message);
                        }
                    );
                e.preventDefault();
            }
        }
    };
</script>

<style lang="scss" scoped>
#info{
    padding:20px;
    width: 50vh;
}
</style>
