<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4 class="title-left">Add New Task</h4>
                    <router-link :to='{name:"taskList"}' class="btn btn-danger right-btn">Go Back</router-link>
                </div>
                <div class="card-body">
                    <form @submit.prevent="create">
                        <div class="row">
                            <div class="col-6 mb-2">
                                <div class="form-group">
                                    <label>Title</label>
                                    <input type="text" class="form-control" v-model="task.title" required>
                                </div>
                            </div>
                            <div class="col-3 mb-2">
                                <div class="form-group">
                                    <label>Due Date</label>
                                    <input type="date" class="form-control input-small" v-model="task.due_date" required>
                                </div>
                            </div>
                            <div class="col-3 mb-2">
                                <div class="form-group">
                                    <label>Due Time</label>
                                    <input type="time" class="form-control input-small" v-model="task.due_time" required>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Description</label>
                                    <input type="text" class="form-control" v-model="task.description" required>
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <button type="submit" class="btn btn-primary right-btn">Save New Task</button>
                            </div>
                        </div>                     
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"add-task",
    data(){
        return {
            task:{
                title:"",
                description:"",
                due_date:"",
                due_time:""
            }
        }
    },
    methods:{
        async create(){
            await this.axios.post('/api/task',this.task).then(response=>{
                this.$router.push({name:"taskList"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>