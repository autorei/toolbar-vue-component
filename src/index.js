import CwsExampleComponent from "./components/CwsExampleComponent";

const Components = [
    CwsExampleComponent
]

const TOOLBAR_LOADER = {
    registry(app) {
        Object.keys(Components).forEach(index=>{
            const component = Components[index];
            app.component(component.name, component)
        })
    }
}

export default TOOLBAR_LOADER
