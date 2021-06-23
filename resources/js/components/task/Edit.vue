<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4 class="title-left">Amend Task</h4>
                    <router-link :to='{name:"taskList"}' class="btn btn-danger right-btn">Go Back</router-link>
                </div>
                <div class="card-body">
                    <form @submit.prevent="update">
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
                                <button type="submit" class="btn btn-primary right-btn">Save Changes</button>
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
    name:"update-task",
    data(){
        return {
            task:{
                title:"",
                description:"",
                due_date:"",
                due_time:"",
                _method:"patch"
            }
        }
    },
    mounted(){
        this.showTask()
    },
    methods:{
        async showTask(){
            await this.axios.get(`/api/task/${this.$route.params.id}`).then(response=>{
                const { title, description } = response.data
                this.task.title = title
                this.task.description = description
            }).catch(error=>{
                console.log(error)
            })
        },
        async update(){
            await this.axios.post(`/api/task/${this.$route.params.id}`,this.task).then(response=>{
                this.$router.push({name:"taskList"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>