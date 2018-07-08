import ContentView from "./Editor/ContentView";
import ToolsView from "./Editor/ToolsView";
import Mediator from "../utils/Mediator";

export default class EditorView{
    constructor(rootElement){
        this.rootElement = rootElement;
        this.toolsView = null;
        this.contentView = null;
        this.mediator = new Mediator();
    }

    renderSubViews(){
        this.toolsView = new ToolsView(this.rootElement.querySelector('.editor-header'), this.mediator);
        this.contentView = new ContentView(this.rootElement.querySelector('.editor-place'), this.mediator);
        return this;
    }

    render(){
        return this.renderSubViews();
    }
}


