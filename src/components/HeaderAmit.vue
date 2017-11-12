<template>
  <div id="header-amit">
      <router-link to="/">
        <div id="header">
            <div class="row inherit-height">
                <div class="col-md-1 col-xs-2 inherit-height">
                    <img id="ucr-logo" class="img-fluid vc" src="../../static/ucr-logo.png" alt="UCR's Logo"/>
                </div>
                <div id="header-title" class="col-md-11 col-xs-10 inherit-height">
                    <p class="vc">
                        <span class="primary no-margin h2">Video Computing Group</span>
                    </p>
                </div>
            </div>
        </div>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: 'HeaderAmit'
    }
</script>
