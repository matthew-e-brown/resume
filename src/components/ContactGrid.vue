<template>
  <div id="contact">
    <div class="contact-entry" v-for="entry in contactData" :key="entry.i">
      <fa-icon :icon="entry.icon" class="fa-fw" />
      <a v-if="entry.url" :href="entry.url">{{ entry.display }}</a>
      <span v-else>{{ entry.display }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactGrid',
  props: {
    contact: { required: true, type: Object }
  },
  data: function() {
    return {
      // Run through contact prop to add icons for everything
      contactData: Object.entries(this.contact).map(([socialType, social], i) => {
        let icon;
        switch (socialType) {
          case 'phone': icon = [ 'fas', 'phone' ]; break;
          case 'mobile': icon = [ 'fas', 'mobile' ]; break;
          case 'email': icon = [ 'fas', 'paper-plane' ]; break;
          case 'github': icon = [ 'fab', 'github' ]; break;
          case 'twitter': icon = [ 'fab', 'twitter' ]; break;
          case 'linkedin': icon = [ 'fab', 'linkedin' ]; break;
          case 'stackoverflow': icon = [ 'fab', 'stack-overflow' ]; break;
          default: icon = [ 'far', 'globe' ]; break;
        }

        if (typeof social === 'string') social = { 'display': social, key: i, icon };
        else social = { ...social, key: i, icon };

        return social;
      })
    }
  }
}
</script>

<style scoped>
svg {
  color: rgb(66, 63, 63);
}

#contact {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.35em;
  justify-content: space-around;
  padding: 0 1em;
}

.contact-entry {
  display: grid;
  grid-template-columns: 1.5em auto;
  grid-template-rows: 1fr;
  grid-gap: 0 0.25em;
  align-items: center;
}

.contact-entry svg {
  justify-self: center;
  font-size: 1.25em;
}

.contact-entry a, .contact-entry span {
  justify-self: left;
  padding-left: 0.5em;
  margin-right: 0.8em;
  border-left: 0.075rem solid var(--off-black);
  white-space: nowrap;
  text-overflow: clip;
}
</style>