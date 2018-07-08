export default class ToolsView {

    constructor(rootElement, mediator) {
        this.rootElement = rootElement;
        this.mediator = mediator;
        this.addNewShapeButton = null;
    }

    collectChildNodes(){
        this.addNewShapeButton = this.rootElement.querySelector('.create-shape');
        return this;
    }
    onAddNewShape = () => {
        this.mediator.publish('createNewShape', {
            type: 'rect',
        });
    };

    delegateEvents(){
        this.addNewShapeButton.addEventListener('click', this.onAddNewShape);
		
    }

    render(){
        return this.collectChildNodes().delegateEvents();
    }


}