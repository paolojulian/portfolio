<template lang="html">
<div class="Header">
    <div class="Header__chevron">
        <router-link :to="{ name: $route.meta.back_link }">
            <font-awesome-icon
                icon="chevron-left"
                />
        </router-link>
    </div>
    <div class="Header__title">
        {{ $route.meta.en_title }}
    </div>
    <div class="Header__spacer">
    </div>
</div>
</template>

<script type="text/javascript">
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
library.add( faChevronLeft )
export default {

}
</script>

<style>
/* 
    HEADER IS ONLY FOR MOBILE VIEW
*/
.Header {
    z-index: 999;
    position: fixed;
    top: 0;
    width: 100%;
    height: var(--my-header-height);
    background-color: var(--pipz-primary-dark);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
    text-align: center;

    color: var(--pipz-font);

    display: flex;
}
.Header__chevron, .Header__title {
    margin: auto auto;
}
.Header__chevron {
    flex: 1;
}
.Header__title {
    flex: 8;
    letter-spacing: 2px;
    text-transform: uppercase;
}
.Header__spacer {
    flex: 1
}
@media screen and (min-width: 1000px) {
    .Header {
        display: none;
    }
}
</style>
