<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-text>
            <div v-if="user" align="center">
              <v-icon large color="green darken-2">mdi-check-circle</v-icon>
              <h1 class="green--text">Login Success</h1>
              <h4 class="headline mb-0">
                <b class="red--text">Email :</b> {{ user.email }}
              </h4>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>