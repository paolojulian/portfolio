<template>
<div class="footer">
    <form class="clearfix"
        @submit.prevent="handleSubmit">
        <div class="footer-left web">
            <div class="email-name">
                <input type="text"
                    @input="handleFormInput('name')"
                    :class="{'form-error': error.name}"
                    v-model="mail.name"
                    placeholder="Name"/>
            </div>
            <div class="email-address">
                <input type="email"
                    @input="handleFormInput('email')"
                    :class="{'form-error': error.email}"
                    v-model="mail.email"
                    placeholder="Email"/>
            </div>
        </div>
        <div class="email-msg">
            <textarea
                @input="handleFormInput('message')"
                :class="{'form-error': error.message}"
                v-model="mail.message"
                placeholder="Message"
                rows="4"
            ></textarea>
        </div>
        <div class="email-submit">
            <button type="submit" class="v-submit"
                v-if="status.post">
                SUBMIT
            </button>
            <button type="button" class="v-loading"
                v-if="status.loading">
                <font-awesome-icon icon="circle-notch" spin/>
                Sending
            </button>
            <button type="button" class="v-error"
                v-if="status.error">
                {{ this.status.message }}
            </button>
            <button type="button" class="v-success"
                v-if="status.success">
                Mail Sent
            </button>
        </div>
    </form>
</div>
</template>

<script>
import { $hobbies } from '@/helpers/constants'
import { mapActions } from 'vuex'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
library.add(faCircleNotch)
class Mail {
    constructor () {
        this.name = ''
        this.email = ''
        this.message = ''
    }
}
class IncompleteForm extends Error{}
export default {
    data () {
        return {
            mail: new Mail(),
            error: {
                name: false,
                email: false,
                password: false
            },
            status: {
                loading: false,
                success: false,
                error: false,
                post: true,
                message: '',
                time: 5000
            }
        }
    },

    methods: {
        ...mapActions($hobbies, [
            'sendMail'
        ]),
        handleFormInput (field_name) {
            if (this.mail[field_name].trim().length <= 0) {
                return this.error[field_name] = true
            }
            return this.error[field_name] = false
        },
        handleSubmit () {
            try {
                this.initSendMail()
                this.sendMail(this.mail)
                    .then(this.handleSuccess)
                    .catch(this.handleError)
                    .then(this.handlePost)
            } catch(err) {
                if (err instanceof IncompleteForm) {
                    return this.handleError('Please fill in the missing fields')
                }
                this.handleError()
            }
        },
        initSendMail() {
            this.status.loading = true
            this.status.post = false

            this.validateMail()
        },
        validateMail() {
            let willProceed = true
            if (this.mail.name.trim().length <= 0) {
                this.error.name = true
                willProceed = false
            }
            if (this.mail.email.trim().length <= 0) {
                this.error.email = true
                willProceed = false
            }
            if (this.mail.message.trim().length <= 0) {
                this.error.message = true
                willProceed = false
            }
            if (false === willProceed) throw new IncompleteForm()
        },
        handleSuccess() {
            this.promptAlert('success')
            this.resetForm()
        },
        handleError(message="Cannot sending mail") {
            this.promptAlert('error', message)
        },
        handlePost() {
            this.status.loading = false
        },
        promptAlert(status_name, message) {
            this.status.loading = false
            this.status.post = false
            this.status[status_name] = true
            this.status.message = message
            setTimeout(() => {
                this.status.post = true
                this.status[status_name] = false
                this.status.message = ''
                this.error = {
                    name: false,
                    email: false,
                    password: false
                }
            }, this.status.time);
        },
        resetForm () {
            this.mail = new Mail()
        }
    }

}
</script>

<style scoped>
.footer {
    position: relative;
    height: 60vh;
    margin: auto;
    width: var(--card-width);
    margin-top: 2rem;
}
.footer input,
.footer textarea,
.v-submit,
.v-loading,
.v-error,
.v-success
{
    border-radius: 5px;
    background-color: #363636;
    box-sizing: border-box;
    padding: 0.5rem;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #f9f9f9;
    width: 100%;
    border: 2px solid transparent;
}
.footer input,
.footer textarea{
    box-shadow: inset 2px 2px 10px rgba(0, 0, 0, 0.50);
}
.footer textarea {
    resize: none;
}
.v-submit {
    background-color: #99351E88;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.75);
    transition: background-color 200ms ease-in-out;
}
.v-loading,
.v-error,
.v-success {
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.75);
    transition: all 200ms ease-in-out;
}
.v-loading {
    background-color: rgba(255, 255, 255, 0.45);
    color: #121013;
}
.v-error {
    background-color: transparent;
    border: 2px solid #99351E;
}
.v-success {
    background-color: transparent;
    border: 2px solid var(--my-parsley);
}
@media screen and (min-width: 600px) {
    .footer {
        width: calc(100% - 50px);
        margin-top: 25px;
    }
    .footer form {
        margin: auto;
    }
    .footer input,
    .footer textarea,
    .footer button{
        padding: 15px;
        margin: 5px;
        font-size: 24px;
    }
    .footer-left,
    .email-msg {
        float: left;
        width: 50%;
        box-sizing: border-box;
    }
    .footer-left {
        padding-right: 10px;
    }
    .email-msg {
        padding-left: 10px;
    }
    .footer textarea {
        height: 135px;
    }
    .email-submit {
        text-align: center;
    }
    .footer .email-submit .v-submit {
        cursor: pointer;
    }
    .footer .email-submit button {
        width: 400px;
        margin-top: 20px;
    }
    .v-submit {
        background-color: #99351E;
    }
    .footer button.v-submit:hover {
        background-color: #99351E88;
    }
}

@media screen and (min-width: 1000px) {
    .footer {
        width: 1000px;
    }
}
</style>
