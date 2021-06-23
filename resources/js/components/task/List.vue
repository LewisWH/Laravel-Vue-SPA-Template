<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4 class="title-left">Your Tasks</h4>
                    <router-link :to='{name:"taskAdd"}' class="btn btn-primary right-btn">Add New Task</router-link>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead class="table-header">
                                <tr>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Due Date</th>
                                    <th>Due Time</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody v-if="tasks.length > 0" class="table-body">
                                <tr v-for="(task,key) in tasks" :key="key">
                                    <td>{{ task.title }}</td>
                                    <td>{{ task.description }}</td>
                                    <td>{{ task.due_date }}</td>
                                    <td>{{ task.due_time }}</td>
                                    <td>
                                        <router-link :to='{name:"taskEdit",params:{id:task.id}}' class="btn btn-success">Amend</router-link>
                                        <button type="button" @click="deleteTask(task.id)" class="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="4" align="center">No Tasks Found!</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"tasks",
    data(){
        return {
            tasks:[]
        }
    },
    mounted(){
        this.getTasks()
    },
    methods:{
        async getTasks(){
            await this.axios.get('/api/task').then(response=>{
                this.tasks = response.data
            }).catch(error=>{
                console.log(error)
                this.tasks = []
            })
        },
        deleteTask(id){
            if(confirm("Delete this task?")){
                this.axios.delete(`/api/task/${id}`).then(response=>{
                    this.getTasks()
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>