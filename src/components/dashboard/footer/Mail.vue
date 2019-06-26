<template>
<div class="Mail">
    <form @submit.prevent="handleSubmit">
        <div class="mail-container">
            <div class="mail-header">
                <div class="mail-error"
                    v-if="error.status === true">
                    {{ error.message }}
                </div>
                <div class="dot"></div>
            </div>
            <div class="name">
                <input type="text"
                    :class="{ 'empty-input': errorFields.name }"
                    @input="errorFields.name = false"
                    v-model="fields.name"
                    placeholder="Name..."
                    maxlength="50"/>
            </div>
            <div class="email">
                <input type="email"
                    :class="{ 'empty-input': errorFields.emailAddress }"
                    @input="errorFields.emailAddress = false"
                    v-model="fields.emailAddress"
                    maxlength="100"
                    placeholder="Your email address..."/>
            </div>
            <div class="message">
                <textarea placeholder="Enter your message..."
                    :class="{ 'empty-input': errorFields.message }"
                    @input="errorFields.message = false"
                    v-model="fields.message"
                    maxlength="1000"
                />
            </div>
        </div>
        <div class="mail-submit">
            <button type="submit">SUBMIT</button>
        </div>
    </form>
</div>
</template>

<script>
import { BlankFieldException, WrongEmailAddressException } from '../../../exceptions/formExceptions.js'

export default {
    name: 'Mail',
    data () {
        return {
            fields: {
                name: '',
                emailAddress: '',
                message: '',
            },

            errorFields: {
                name: false,
                emailAddress: false,
                message: false
            },

            error: {
                message: 'Oops! Something went wrong',
                status: false
            }
        }
    },
    methods: {
        handleSubmit () {
            try {
                this.validateMail();
                this.submitMail();
            } catch (err) {
                this.handleError(err)
            }

        },
        submitMail () {
            alert('Mail is undermaintenance');
        },
        handleError (err) {
            // eslint-disable-next-line
            console.error(err)
            switch (err.name) {
                case 'BlankFieldException':
                case 'WrongEmailAddressException':
                    this.printErrorToHeader(err.message);
                    break;
                default:
                    break;
            }
        },

        printErrorToHeader (message) {
            // Print error
            if (typeof message === 'string') {
                this.error.message = message
            }
            this.error.status = true

            // Remove error after 5 seconds
            const removeError = () => {
                this.error.message = 'Oops! Something went wrong'
                this.error.status = false
            }
            const errorDuration = 5000 // 5sec
            setTimeout(removeError, errorDuration)
        },

        validateMail () {
            this.checkEmptyFields();
            this.checkEmailAddress();
        },

        checkEmptyFields () {
            let hasEmptyFields = false;
            for (let key in this.fields) {
                if ( ! this.fields.hasOwnProperty(key)) continue;
                let string = this.fields[key].trim()

                // If Empty String
                if (string.length <= 0) {
                    hasEmptyFields = true
                    this.errorFields[key] = true
                }
            }
            if (hasEmptyFields) {
                throw new BlankFieldException()
            }

        },

        checkEmailAddress () {
            if ( ! this.fields.emailAddress.includes('@')) {
                throw new WrongEmailAddressException()
            }
        }
    }
}
</script>

<style scoped>
.Mail {
    height: 500px;
    width: 550px;
    margin: auto;
    color: var(--google-font-white-primary);
}
.mail-container {
    box-sizing: border-box;
    background-color: var(--google-grey-light);
    height: 350px;
    border-radius: 5px;
    padding: 10px;
}
.mail-header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 100%;
}
.mail-error {
    color: var(--google-red);
    margin-right: 1rem;
}
.dot {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: var(--google-light-primary);
}
.name,
.email,
.message {
    margin: 15px 20px;
}
.name,
.email {
    height: 30px;
}
.message {
    height: 170px;
}
.name input,
.email input,
.message textarea{
    width: 100%;
    height: 100%;
    border-radius: 5px;
    padding-left: 10px;

    box-shadow: inset 3px 3px 8px rgba(0, 0, 0, 0.4);
    transition: all 200ms ease-in-out;
}
.name input:hover,
.email input:hover,
.message textarea:hover{
    box-shadow: inset 3px 3px 8px rgba(0, 0, 0, 0.2);
}
.message textarea {
    padding-top: 10px;
    resize: none;
}
.mail-submit {
    margin-top: 50px;
    height: 100px;
}
.mail-submit button {
    padding: 10px;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 18px;
    border-radius: 5px;
    color: var(--google-font-white-primary);
    background-color: var(--google-red);
    border-color: var(--google-red);
    cursor: pointer;

    box-shadow: 0 2px 5px 0px #131313;
}
.mail-submit button:hover {
    opacity: 0.85;
}

</style>
