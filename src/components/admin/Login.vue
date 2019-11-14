<template>
   <v-container>
       <v-row>
           <v-col offset-md="3" md="6" xs="12">
               <h1>Log in</h1>

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
                    <v-btn class="ma-3"  @click.prevent="signIn()">
                        Login
                    </v-btn>
                    <v-btn class="ma-3" @click.prevent="signOut()">
                        SignOut
                    </v-btn>
                </div>
                <div>
                    <span> Not a member yet? 
                        <v-btn text small color="blue" to="/register">Create an account</v-btn>
                    </span>
                </div>
           </v-col>
       </v-row>
   </v-container>

</template>

<script>

import {dbUsers} from "../../../firebase";
import firebase from 'firebase'
import 'firebase/firestore'


    export default {
        data(){
            return {
                email:'',
                password:'',
            }
        },
        methods: {
          signIn() {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(res => {
                        dbUsers.doc(res.user.uid).get().then(snapshot => {
                                const user = snapshot.data();
                                localStorage.setItem(JSON.stringify(user),'user');
                        });
                    //console.log(user);
                    this.$router.replace('/');
                })
                    .catch(function (error) {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        if (errorCode === 'auth/wrong-password') {
                            alert("Wrong password")
                        } else {
                            alert(errorMessage)
                        }
                        console.log(error)
                    })
            },
        signOut() {
          firebase.auth().signOut().then(() => {
            alert('Logged Out');
            this.$router.replace('/')
          }).catch(error => {
            
          })
        },

    },
    }
</script>

<style lang="scss" scoped>
#info {
    padding: 20px;
}
</style>
