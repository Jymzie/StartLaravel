<template>
   <div class="container">
        <!-- First column -->
        <div class="column">
            <div class="item">Row 1, Col 1</div>
            <div class="item">Row 2, Col 1</div>
            <div class="item">Row 3, Col 1</div>
        </div>
        
        <!-- Second column -->
        <div class="column">
            <div class="item">Row 1, Col 2</div>
            <div class="item">Row 2, Col 2</div>
            <div class="item">Row 3, Col 2</div>
        </div>

        <v-list>
            <v-list-item v-for="(item, i) in SkillDesc" :key="i">
                <v-tooltip bottom min-width="200" max-width="250">
                    <template v-slot:activator="{ on, attrs }">
                        <v-list-item-avatar  v-bind="attrs" v-on="on">
                        <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"/>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </template>
                        <span  >{{ item.desc }}</span>
                </v-tooltip>
            </v-list-item>
        </v-list>
   </div>
</template>

<script>
export default {
  // ANCHOR DATA
  data:() => ({
        SkillDesc:[{title:'Adaptability',desc:'HyperText Markup Language is a standardized markup language that creates the fundamental structure of web pages by using tags to organize and format content that web browsers can interpret and display.'},
        {title:'Communication',desc:'Cascading Style Sheets is a styling language that controls how web pages look and feel, allowing you to transform plain HTML content into beautifully formatted and responsive designs.'},
        {title:'Creativity',desc:'A versatile programming language that brings websites to life by adding interactivity to web pages, allowing developers to create dynamic content, respond to user actions, and update information instantly without requiring page reloads.'},
        {title:'Problem Solving',desc:'A versatile programming language that brings websites to life by adding interactivity to web pages, allowing developers to create dynamic content, respond to user actions, and update information instantly without requiring page reloads.'},
        {title:'Time Management',desc:'A versatile programming language that brings websites to life by adding interactivity to web pages, allowing developers to create dynamic content, respond to user actions, and update information instantly without requiring page reloads.'}]
        
    }),
}
</script>

<style>


/* Make each column behave like a table cell */
.column {
    display: table-cell;
 
}

/* Make each item in the column behave like a block */

</style>