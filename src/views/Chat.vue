<template>
    <v-card>
        <v-card-title>
            T-chat
        </v-card-title>
        <v-card-subtitle>
        </v-card-subtitle>
        <v-card-text>
<div class="messages" v-chat-scroll="{always: false, smooth: true}">
                    <div v-for="message in messages" :key="message.id">
                        <span class="text-info">[{{ message.name }}]: </span>
                        <span>{{message.message}}</span>
                        <v-spacer/>
                        <span class="text-secondary time">{{message.timestamp}}</span>
                    </div>
                </div>
            <v-spacer/>
        </v-card-text>
        <v-card-actions>
            <create-message :name="name"/>
        </v-card-actions>
    </v-card>
</template>

<script>
import fb from '../firebase/init';
import moment from 'moment';
import CreateMessage from '../components/CreateMessage';
export default {
    name: 'Chat',
    props: ['name'],
    data: ()=>({
        messages: [], 
    }),
    components: {
        CreateMessage,
    },
    created(){
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
}
</script>