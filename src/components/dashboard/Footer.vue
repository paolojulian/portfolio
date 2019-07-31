<template>
<div class="footer">
    <form class="clearfix"
        @submit.prevent="handleSubmit">
        <div class="footer-left web">
            <div class="email-name">
                <input type="text"
                    placeholder="Name"/>
            </div>
            <div class="email-address">
                <input type="email"
                    placeholder="Email"/>
            </div>
        </div>
        <div class="email-msg">
            <textarea
                placeholder="Message"
                rows="4"
            ></textarea>
        </div>
        <div class="email-submit">
            <button type="submit">
                SUBMIT
            </button>
        </div>
    </form>
</div>
</template>

<script>
export default {
    data () {
        return {}
    },

    methods: {
        handleSubmit () {
            return true
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
.footer button{
    border-radius: 5px;
    background-color: #363636;
    box-sizing: border-box;
    padding: 0.5rem;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #f9f9f9;
    width: 100%;
    border: none;

    box-shadow: inset 2px 2px 10px rgba(0, 0, 0, 0.50);
}
.footer textarea {
    resize: none;
}
.footer button {
    background-color: #99351E88;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.75);
    transition: background-color 200ms ease-in-out;
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
        height: 125px;
    }
    .email-submit {
        text-align: center;
    }
    .footer button {
        cursor: pointer;
        width: 400px;
        margin-top: 20px;
        background-color: #99351E;
    }
    .footer button:hover {
        background-color: #99351E88;
    }
}

@media screen and (min-width: 1000px) {
    .footer {
        width: 1000px;
    }
}
</style>
