<template>
    <v-dialog width="500px" persistent v-model="dialogOpen">
        <a slot="activator"><i class="fa fa-whatsapp pull-right" aria-hidden="true"></i></a>
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">Order via Whatsapp</h3>
            </div>
            <div class="panel-body">
                <v-container class="py-0">
                    <v-layout row wrap>
                        <v-flex>
                            <i>Product:  Guinness 10</i>
                        </v-flex>
                    </v-layout>
                    <v-divider></v-divider>
                    <v-layout row wrap>
                        <v-flex col-sm-6 col-12>
                            <label for="Quantity">Quanitity:</label>
                            <input type="number" class="form-control" placeholder="Quantity">
                        </v-flex>
                        <v-flex col-sm-6 col-12>
                            <label for="size">Select size</label>
                            <select class="form-control mb-3" placeholder="Quantity">
                                <option value="250 ml">250 ml</option>
                                <option value="500 ml">500 ml</option>
                            </select>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex col-xs-10>
                            <label for="location">Delivery Location</label>
                            <input type="text" class="form-control" placeholder="Delivery location">
                        </v-flex>
                    </v-layout>
                    <v-divider></v-divider>
                    <v-layout row wrap>
                        <v-flex col-12>
                            <v-spacer></v-spacer>
                            <v-btn color="info pull-right">Order</v-btn>
                            <v-btn color="info pull-right" @click="dialogOpen= false">Cancel</v-btn>
                        </v-flex>
                    </v-layout>
                </v-container>
            </div>
        </div>
    </v-dialog>
</template>

<script>
    export default {
        name: "whatsapDialogBtn",
        data(){
            return{
                dialogOpen: false
            }
        }
    }
</script>

<style scoped>

</style>