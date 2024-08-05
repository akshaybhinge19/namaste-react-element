/*
React element (JS Object) (browser)=> html


*/

const header = React.createElement("h1", {id: "custom-heading", key: "sdfvf"}, "Hello World!");
const root = ReactDOM.createRoot(document.getElementById("root-container"));
// root.render(header);
const footer = React.createElement("nav",{id:"footer-main",key:'footer'},"Made with love");


const parent = React.createElement("div", {id: "parent"},
    React.createElement("div", {id: "child"}, 
        [React.createElement("h1",{key: "child2"},"I am a h1 tag"),
        header, footer
        ]
    )
)
// ReactDOM.createRoot(document.getElementById("root-container")).render(parent);
root.render(parent);