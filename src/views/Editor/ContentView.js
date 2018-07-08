import ShapeView from "./shapes/ShapeView";

export default class ContentView{
    constructor(rootelement, mediator){
        this.rootElement = rootelement;
        this.mediator = mediator;
    }

    delegateEvants(){
        this.mediator.subscribe('createNewShape', (eventName, data) => {
            this.rootElement.appendChild(new ShapeView(this.mediator).render().rootElement);
        });
    }

    render(){
        return this.delegateEvants();
    }

}