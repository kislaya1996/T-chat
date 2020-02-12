<template>
<div>
    <v-text-field
        label="Enter message"
        v-model="newMessage"
        aria-placeholder="Type here..."
        @keydown.enter="createMessage"
    />
    <v-alert v-if="errorText" type="error">
        {{errorText}}
    </v-alert>
    <v-btn @click='createMessage'>
        Submit
    </v-btn>
</div>
</template>

<<script>
    import fb from '@/firebase/init';

    export default {
        data(){
            return {
                newMessage: null,
                errorText: null,
                
            }
        },
        props:['name'],

        created(){
            console.log(this.name)
        },
        methods: {
            createMessage () {
                if (this.newMessage) {
                    fb.collection('messages').add({
                        message: this.newMessage,
                        name: this.name,
                        timestamp: Date.now()
                    }).catch(err => {
                        console.log(err,"safs");
                    });
                    this.newMessage = null;
                    this.errorText = null;
                } else {
                    this.errorText = "A message must be entered!"
                }
            }
        }
    }
</script>