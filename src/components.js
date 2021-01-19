import Vue from "vue"

Vue.component("ButtonString", {
    template: "<button @click='click'> Clicou no ButtonString {{ count }} vezes </button>",
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        click(){
            this.count++;
        },
    },
})

Vue.component("ButtonTemplateString", {
    template: `
        <button @click='click'> 
            Clicou no ButtonTemplateString {{count}} vezes 
        </button>`
    ,
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        click(){
            this.count++;
        },
    },
})

Vue.component("ButtonXTemplate", {
    template: "#button-x-template",
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        click(){
            this.count++;
        },
    },
})

Vue.component("ButtonInline", {
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        click(){
            this.count++;
        },
    },
})

Vue.component("ButtonRender", {
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        click(){
            this.count++;
        },
    },
    render(createElement){
        return createElement(
            'button',
            {
                on:{
                    click: this.click
                }
            },
            [
                `Clicou no ButtonRender ${this.count} vezes`
            ]
        );
    }
})

Vue.component("ButtonJSX", {
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        click(){
            this.count++;
        },
    },
    render(){
        return (
            <button onClick={this.click}>
                Clicou no ButtonJSX { this.count } vezes
            </button>
        )
    }
})
