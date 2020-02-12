<template>
    <v-card
    class="mx-auto"
    max-width="344"
    max-height="600"
  >
        <v-card-title>
            T-chat
        </v-card-title>
        <v-card-subtitle>
        </v-card-subtitle>
        <v-card-text>
        <v-list 
            shaped
            style="max-height: 400px"
            class="overflow-y-auto"
        >
            <v-list-item-group color="primary">
                <v-list-item
                v-chat-scroll
                v-for="(message, i) in messages"
                :key="i"
                >
                <v-list-item-content>
                
                   [{{message.name}}]: {{message.message}}
                   <v-spacer/>
                   {{message.timestamp}}
                </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
            </v-list>
            <v-spacer/>
        </v-card-text>
        <v-card-actions>
            <create-message ref="createMessage"/>
        </v-card-actions>
    </v-card>
                        <!-- <span class="text-info">[{{ message.name }}]: </span>
                        <span>{{message.message}}</span>
                        <v-spacer/>
                        <span class="text-secondary time">{{message.timestamp}}</span> -->

</template>

<script>
import fb from '../firebase/init';
import moment from 'moment';
import CreateMessage from '../components/CreateMessage';
export default {
    name: 'Chat',
    data: ()=>({
        messages: [], 
        name: null,
    }),
    components: {
        CreateMessage,
    },
    created(){
        this.name = this.$route.params.name;
        let ref = fb.collection('messages').orderBy('timestamp');
        ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if (change.type == 'added') {
                    let doc = change.doc;
                    this.messages.push({
                        id: doc.id,
                        name: doc.data().name,
                        message: doc.data().message,
                        timestamp: moment(doc.data().timestamp).format('LTS')
                    });
                }
            });
        });
    },
    mounted(){
        console.log(this.$refs, this.name, this.$route)
        this.$refs.createMessage.name = this.name;
    },
    methods:{
        onScroll(event){
            console.log(event, "On scroll")
        },
    }
}
</script>