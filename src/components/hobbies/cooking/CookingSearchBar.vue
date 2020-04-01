<template>
<div class="CookingSearchBar">
    <div class="form-recipe-name">
        <label>Name:</label>
        <input type="text"
            maxlength="70"
            v-model="form.name"/>
    </div>
    <div class="form-recipe-time">
        <label>Max Time:</label>
        <span class="time-container">
            <input
                @input="numbersMaxLength"
                type="number"
                min="0"
                max="999"
                maxlength="3"
                v-model="form.time"
                />
            <span class="minute-label">
                m
            </span>
        </span>
    </div>
    <!-- <div class="submit-search-recipe">
        <button type="submit">
            SEARCH
        </button>
    </div> -->
</div>
</template>

<script>
export default {
    name: 'CookingSearchBar',
    data () {
        return {
            form: {
                name: '',
                time: null,

                searchMethod: null
            }
        }
    },

    watch: {
        "form.name": function (value) {
            if ( ! value) return;
            if (value.length <= 3) return;

            this.initSearch(value)
        },
        "form.time": function (value) {
            if ( ! value) return;

            this.initSearch(value);
        }
    },

    methods: {
        numbersMaxLength (event) {
            if ( ! event) return;
            const maxLength = event.target.maxLength
            const value = event.target.value

            if (value > maxLength) {
                return this.form.time = value.slice(0, maxLength);
            }
        },

        initSearch (value) {
            if (this.searchMethod) {
                clearTimeout(this.searchMethod);
            }
            this.searchMethod = setTimeout(() => this.handleSearch(value), 1000);
        },

        handleSearch (value) {
            // eslint-disable-next-line no-console
            console.log(value)
        }
    }
}
</script>

<style scoped>
.CookingSearchBar {
    background-color: var(--my-yellow);
    height: 50px;
    width: 100%;
    z-index: 2;

    padding: 5px 20px;

    display: flex;
    align-items: center;
}
.CookingSearchBar label {
    text-transform: uppercase;
    letter-spacing: 5px;
    width: 30%;
}

.CookingSearchBar input,
.minute-label {
    height: 25px;
    padding: 0 10px;
}
.form-recipe-name {
    width: 500px;
}
.form-recipe-name input{
    width: 70%;
    box-shadow: inset 1px 2px 5px rgba(0, 0, 0, 0.2);
    margin-left: 5px;
}
.time-container {
    box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.2);
}
.form-recipe-time input {
    width: 40px;
    font-size: 18px;
    text-align: center;
}
.minute-label {
    cursor: default;
    background-color: var(--google-grey-primary);
    color: var(--google-font-white-primary);
    font-size: 18px;
    padding: 2px 10px;
}
.submit-search-recipe {
    margin-left: 30px;
}
.submit-search-recipe button{
    background-color: green;
    color: var(--google-font-white-primary);
    text-transform: uppercase;
    padding: 7px 30px;
    cursor: pointer;
    border: none;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}
</style>
