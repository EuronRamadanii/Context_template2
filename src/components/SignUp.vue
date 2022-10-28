<!-- <template>
    <div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <v-card class="mx-auto" style="max-width: 500px;">
            <v-system-bar color="deep-purple darken-4" dark>
                <v-spacer></v-spacer>
                <v-icon small>
                    mdi-square
                </v-icon>
                <v-icon class="ml-1" small>
                    mdi-circle
                </v-icon>
                <v-icon class="ml-1" small>
                    mdi-triangle
                </v-icon>
            </v-system-bar>
            <v-toolbar color="deep-purple accent-4" cards dark flat>
                <v-btn icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <v-card-title class="text-h6 font-weight-regular">
                    Sign up
                </v-card-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </v-toolbar>
            <v-form ref="form" v-model="form" class="pa-4 pt-6">
                <v-text-field v-model="name" :rules="[rules.name, rules.length(2)]" filled color="deep-purple"
                    counter="6" label="Name" style="min-height: 96px" type="text"></v-text-field>
                <v-text-field v-model="lastName" :rules="[rules.lastName, rules.length(2)]" filled color="deep-purple"
                    counter="6" label="Last name" style="min-height: 96px" type="text"></v-text-field>
                <v-text-field v-model="email" :rules="[rules.email]" filled color="deep-purple" label="Email address"
                    type="email"></v-text-field>
                <v-text-field v-model="password" :rules="[rules.password, rules.length(6)]" filled color="deep-purple"
                    counter="6" label="Password" style="min-height: 96px" type="password"></v-text-field>
                <v-text-field v-model="phone" filled color="deep-purple" label="Phone number"></v-text-field>
                <v-text-field v-model="address" :rules="[rules.address, rules.length(2)]" filled color="deep-purple"
                    counter="6" label="Address" style="min-height: 96px" type="text"></v-text-field>

            </v-form>
            <v-divider></v-divider>
            <v-card-actions>
                <v-btn text @click="$refs.form.reset()">
                    Clear
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn :disabled="!form" :loading="isLoading" class="white--text" color="deep-purple accent-4"
                    depressed>
                    Submit
                </v-btn>
            </v-card-actions>
            <v-dialog v-model="dialog" absolute max-width="400" persistent>
                <v-card>
                    <v-card-title class="text-h5 grey lighten-3">
                        Legal
                    </v-card-title>
                    <v-card-text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-btn text @click="agreement = false, dialog = false">
                            No
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn class="white--text" color="deep-purple accent-4"
                            @click="agreement = true, dialog = false">
                            Yes
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-card>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
    </div>

</template>

<script>
export default {
    data: () => ({
        agreement: false,
        bio: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts',
        dialog: false,
        email: undefined,
        form: false,
        isLoading: false,
        password: undefined,
        phone: undefined,
        rules: {
            email: v => !!(v || '').match(/@/) || 'Please enter a valid email',
            length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
            password: v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
                'Password must contain an upper case letter, a numeric character, and a special character',
            required: v => !!v || 'This field is required',
        },
    }),
}
</script> -->

<!-- <template>
    <div class="vue-tempalte">
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <form @submit.prevent="userRegistration">
            <h3>Sign Up</h3>
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control form-control-lg" v-model="user.name" />
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control form-control-lg" v-model="user.email" />
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" v-model="user.password" />
            </div>
            <button type="submit" class="btn btn-dark btn-lg btn-block">
                Sign Up
            </button>
            <p class="forgot-password text-right">
                Already registered
                <router-link :to="{ name: 'login' }">sign in?</router-link>
            </p>
        </form>
    </div>
</template>

<script>
import firebase from "firebase";
export default {
    data() {
        return {
            user: {
                name: '',
                email: '',
                password: ''
            }
        };
    },
    methods: {
        userRegistration() {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.user.email, this.user.password)
                .then((res) => {
                    res.user
                        .updateProfile({
                            displayName: this.user.name
                        })
                        .then(() => {
                            this.$router.push('/login')
                        });
                })
                .catch((error) => {
                    alert(error.message);
                });
        }
    }
};
</script> -->


<!-- <template> -->
    <!-- <div>

        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>

        <body class="d-flex justify-content-center form-wrap">
            <form class="register">
                <p class="login-register">
                    <router-link class="router-link" :to="{ name: 'Login' }">
                        <h2>Login</h2>
                    </router-link>
                </p>
                <div class="inputs">
                    <div class="input">
                        <input type="text" placeholder="Name" v-model="displayName" />
                    </div>
                    <br />
                    <div class="input">
                        <input type="text" placeholder="Email" v-model="email" />
                    </div>
                    <br />
                    <div class="input">
                        <input type="password" placeholder="Password" v-model="password" />
                    </div>
                    <br />
                    <div class="error" v-if="error">
                        {{ this.errorMsg }}
                    </div>
                </div>
                <button class="primary" @click.prevent="submitForm">Sign Up</button>
            </form>

            <div class="background"></div>
        </body>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>

        <br>
    </div> -->
    <!-- <div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <h1>Hello</h1>
        <body class="d-flex justify-content-center form-wrap">
            <v-form ref="form" v-model="valid" lazy-validation>
                <div class="mb-2">
                    <h2 class="mb-5">Login to your Family Account</h2>
                </div>

                <div class="google-button mb-4">
                    <v-btn block color="secondary" x-large @click.prevent="signInWithGoogle">
                        <v-avatar size="40">
                            <img style="height: 40px;" :src="google" />
                        </v-avatar>
                        <span style="color: black" class="ml-5"> Sign In With Google
                        </span>
                    </v-btn>
                    <v-btn fab icon> </v-btn>
                </div>

                <v-row wrap no-gutters>
                    <v-col cols="12" class="text-center">
                        <v-divider vertical />
                    </v-col>
                    <v-col cols="12" class="text-center">
                        <h3>Or</h3>
                    </v-col>
                    <v-col cols="12" class="text-center mb-4">
                        <v-divider vertical />
                    </v-col>
                </v-row>
                <v-text-field type="text" placeholder="Email" v-model="email" :rules="emailRules" prepend-inner-icon=""
                    label="E-mail" required outlined />

                <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required]" :type="show1 ? 'text' : 'password'" name="input-10-1"
                    prepend-inner-icon="" label="Password" outlined @click:append="show1 = !show1" />
                <div v-if="errorMsg">
                    <h6 class="error--text">
                        {{ errorMsg }}
                    </h6>
                </div>
                <div class="my-2">
                    <v-btn block large :disabled="!valid" color="success" @click.prevent="submitForm"
                        style="color: black">
                        Submit
                    </v-btn>
                </div>
                <hr />
                <div class="noAcc">
                    <p>
                        Don't have an account?
                    </p>
                    <v-btn outlined color="primary" to="/signup">
                        Register
                    </v-btn>
                </div>
            </v-form>
        </body>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
    </div> -->
<!-- </template> -->
<!-- <template>
    <div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>

        <body class="d-flex justify-content-center form-wrap">
            <v-form ref="form" v-model="valid" lazy-validation>
                <div class="mb-2">
                    <h2 class="mb-5">Login to your Family Account</h2>
                </div>

                <div class="google-button mb-4">
                    <v-btn block color="secondary" x-large @click.prevent="signInWithGoogle">
                        <v-avatar size="40">
                            <img style="height: 40px;" :src="google" />
                        </v-avatar>
                        <span style="color: black" class="ml-5"> Sign In With Google
                        </span>
                    </v-btn>
                    <v-btn fab icon> </v-btn>
                </div>

                <v-row wrap no-gutters>
                    <v-col cols="12" class="text-center">
                        <v-divider vertical />
                    </v-col>
                    <v-col cols="12" class="text-center">
                        <h3>Or</h3>
                    </v-col>
                    <v-col cols="12" class="text-center mb-4">
                        <v-divider vertical />
                    </v-col>
                </v-row>
                <v-text-field type="text" placeholder="Email" v-model="email" :rules="emailRules" prepend-inner-icon=""
                    label="E-mail" required outlined />

                <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required]" :type="show1 ? 'text' : 'password'" name="input-10-1"
                    prepend-inner-icon="" label="Password" outlined @click:append="show1 = !show1" />
                <div v-if="errorMsg">
                    <h6 class="error--text">
                        {{ errorMsg }}
                    </h6>
                </div>
                <div class="my-2">
                    <v-btn block large :disabled="!valid" color="success" @click.prevent="submitForm"
                        style="color: black">
                        Submit
                    </v-btn>
                </div>
                <hr />
                <div class="noAcc">
                    <p>
                        Don't have an account?
                    </p>
                    <v-btn outlined color="primary" to="/signUp">
                        Register
                    </v-btn>
                </div>
            </v-form>
        </body>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
    </div>
</template> -->

<!-- <script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
    data() {
        return {
            email: null,
            displayName: null,
            password: null,
            photoURL: null,
            phoneNumber: null,
            roles: [0],
            status: 1,
            error: null,
            errorMsg: null,
        };
    },

    methods: {
        submitForm() {
            if (this.isFormValid()) {
                this.error = false;
                this.errorMsg = null;
                createUserWithEmailAndPassword(getAuth(), this.email, this.password)
                    .then((result) => {
                        console.log("result", result);

                        console.log("User registered!");
                        this.$router.push("/home");
                    })
                    .catch((err) => {
                        console.log(err.code);
                        alert(err.message);
                    });
            } else {
                this.error = true;
                this.errorMsg = "Please fill out all the fields!";
            }
        },
        isFormValid() {
            if (
                this.firstName !== null &&
                this.lastName !== null &&
                this.email !== null &&
                this.password !== null
            ) {
                return true;
            } else {
                return false;
            }
        },
    },
};
</script>

<style>

</style> -->
<!-- <script>
import {
    getAuth,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
export default {
    data() {
        return {
            google: require("../assets/images/google.png"),
            valid: false,
            show1: false,
            emailRules: [
                (v) => !!v || "E-mail is required",
                (v) => /.+@.+/.test(v) || "E-mail must be valid",
            ],
            rules: {
                required: (value) => !!value || "Required.",
                min: (v) => v.length >= 8 || "Min 8 characters",
            },
            email: null,
            password: null,
            errorMsg: null,
        };
    },
    methods: {
        signInWithGoogle() {
            const provider = new GoogleAuthProvider();
            signInWithPopup(getAuth(), provider).then((result) => {
                this.getUser(result.user.uid);
                this.$router.push("/");
            });
        },
        // getUser(id) {
        //     this.$store.dispatch("getUser", id).catch((error) => {
        //         console.log("errror", error);
        //     });
        // },
        validate() {
            this.$refs.form.validate();
        },
        submitForm() {
            this.validate;
            if (this.isFormValid()) {
                this.errorMsg = null;
                signInWithEmailAndPassword(getAuth(), this.email, this.password)
                    .then((result) => {
                        // this.getUser(result.user.uid);
                        this.$router.push("/");
                    })
                    .catch((err) => {
                        this.errorMsg = err.code;
                    });
                console.log("LOGGED")
            } else {
                this.errorMsg = "Please fill out all the fields!";
            }
        },
        isFormValid() {
            if (this.email !== null && this.password !== null) {
                return true;
            } else {
                return false;
            }
        },
    },
};
</script>
<style lang="scss" scoped >
.noAcc {
    display: flex;
    flex-direction: column;

    p {
        text-align: center;
    }
}

.google-button {
    max-height: 50px;
}
</style> -->


<template>
    <div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>

        <body class="d-flex justify-content-center form-wrap">
            <v-form ref="form" v-model="valid" lazy-validation>
                <div class="mb-2">
                    <h2 class="mb-5">Create your Family Account</h2>
                </div>

                <div class="google-button">
                    <v-btn block color="primary" x-large @click.prevent="signInWithGoogle">
                        <v-avatar size="40">
                            <img :src="google" />
                        </v-avatar>
                        <span style="color: black" class="ml-5"> Sign Up With Google </span>
                    </v-btn>
                    <v-btn fab icon> </v-btn>
                </div>

                <v-row wrap no-gutters>
                    <v-col cols="12" class="text-center">
                        <v-divider vertical />
                    </v-col>
                    <v-col cols="12" class="text-center">
                        <h3>Or</h3>
                    </v-col>
                    <v-col cols="12" class="text-center mb-4">
                        <v-divider vertical />
                    </v-col>
                </v-row>

                <v-text-field v-model="displayName" :rules="nameRules" label="Display name" prepend-inner-icon=""
                    required outlined />

                <v-text-field v-model="photoURL" label="Address" prepend-inner-icon="" required outlined />

                <v-text-field type="text" placeholder="Email" v-model="email" :rules="emailRules" prepend-inner-icon=""
                    label="E-mail" required outlined />

                <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required]" :type="show1 ? 'text' : 'password'" name="input-10-1"
                    prepend-inner-icon="" label="Password" outlined @click:append="show1 = !show1" />
                <div v-if="errorMsg">
                    <h6 class="error--text">
                        {{ errorMsg }}
                    </h6>
                </div>
                <div class="my-2">
                    <v-btn block large :disabled="!valid" color="success" @click.prevent="submitForm"
                        style="color: black">
                        Submit
                    </v-btn>
                </div>

                <hr />
                <div class="noAcc">
                    <p>
                        Already have an account?
                    </p>
                    <v-btn outlined color="primary" to="/login"> Login </v-btn>
                </div>
            </v-form>
        </body>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
    </div>
</template>
  
<script>
import {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";

export default {
    data() {
        return {
            google: require("../assets/images/google.png"),
            valid: false,
            show1: false,
            emailRules: [
                (v) => !!v || "E-mail is required",
                (v) => /.+@.+/.test(v) || "E-mail must be valid",
            ],

            rules: {
                required: (value) => !!value || "Required.",
                min: (v) => v.length >= 8 || "Min 8 characters",
            },
            nameRules: [
                (v) => !!v || "Name is required",
                (v) =>
                    (v != null && v.length >= 3) ||
                    "Name must be greater than 3 characters",
            ],
            email: null,
            displayName: null,
            password: null,
            photoURL: null,
            phoneNumber: null,
            roles: [0],
            status: 1,
            error: null,
            errorMsg: null,
            // defaultUserImg: require("@/assets/avatar.png"),
        };
    },

    methods: {
        signInWithGoogle() {
            const provider = new GoogleAuthProvider();
            signInWithPopup(getAuth(), provider).then((result) => {
                const user = {
                    id: result.user.uid,
                    accessToken: result.user.accessToken,
                    displayName: result.user.displayName,
                    email: result.user.email,
                    photoURL: result.user.photoURL,
                    isAdmin: false,
                };
                this.registerUser(user);
                this.$router.push("/");
            });
        },
        registerUser(query) {
            this.$store.dispatch("addUser", query).catch((error) => {
                console.log("errror", error);
            });
        },
        validate() {
            this.$refs.form.validate();
        },
        submitForm() {
            this.validate;
            if (this.isFormValid()) {
                this.error = false;
                this.errorMsg = null;
                createUserWithEmailAndPassword(getAuth(), this.email, this.password)
                    .then((result) => {
                        const user = {
                            id: result.user.uid,
                            accessToken: result.user.accessToken,
                            displayName: this.displayName,
                            email: this.email,
                            photoURL: result.user.photoURL || this.defaultUserImg,
                            isAdmin: false,
                        };
                        this.registerUser(user);
                        this.$router.push("/");
                    })
                    .catch((err) => {
                        this.errorMsg = err.code;
                    });
            } else {
                this.error = true;
                this.errorMsg = "Please fill out all the fields!";
            }
        },
        isFormValid() {
            if (
                this.firstName !== null &&
                this.lastName !== null &&
                this.email !== null &&
                this.password !== null
            ) {
                return true;
            } else {
                return false;
            }
        },
    },
};
</script>
  
<style lang="scss" scoped>
.noAcc {
    display: flex;
    flex-direction: column;

    p {
        text-align: center;
    }
}
</style>
