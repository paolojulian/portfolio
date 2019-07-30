<template>
<div class="footer clearfix">
    <form @submit.prevent="handleSubmit">
        <div class="footer-left web">
            <div class="email-name">
                <input type="text"
                    placeholder="Name"/>
            </div>
            <div class="email-address">
                <input type="email"
                    placeholder="Email"/>
            </div>
            <div class="email-submit">
                <button type="submit">
                    SUBMIT
                </button>
            </div>
        </div>
        <div class="email-msg">
            <textarea
                placeholder="Message"
                rows="6"
            ></textarea>
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
    width: calc(100% - 5rem);
    margin-top: 50px;
}
.footer input,
.footer textarea,
.footer button{
    border-radius: 5px;
    background-color: #262626;
    padding: 15px;
    margin: 5px;
    font-size: 24px;
    color: #f9f9f9;
    width: 100%;
    box-sizing: border-box;

    box-shadow: inset 2px 2px 10px rgba(0, 0, 0, 0.50);
}
.footer textarea {
    border: none;
}
.footer button {
    cursor: pointer;
    background-image: linear-gradient(to right, #99351E, #99351EDD, #99351ECC);
    border: none;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.75);
    transition: background-color 200ms ease-in-out;
}
.footer button:hover {
    background-color: #99351E88;
}
@media screen and (min-width: 600px) {
    .footer {
        width: calc(100% - 50px);
    }
    .footer form {
        display: flex;
    }
    .footer-left {
        flex: 1;
        padding-right: 10px;
    }
    .email-msg {
        flex: 1;
        padding-left: 10px;
    }
}

@media screen and (min-width: 1000px) {
    .footer {
        width: 1000px;
    }
}
</style>
