export default class ShapeView{

    static onActive = 'onActive';

    constructor(rootElement, mediator){
        this.rootElement = this.createRootElement;
        this.mediator = mediator;
    }

    get classNames(){
        return{
            root: 'rectShape',
            active: 'isActive',
            type: 'Shape--rect',
        };
    }

    get isActive(){
        return this._isActive;
    }

    set isActive(value){
        const wasActive = !this._isActive && value;
        this._isActive = value;

        this.rootElement.classList.toggle(this.classNames.active, this.isActive);

        if(wasActive){
            this.mediator.publish(ShapeView.onActive, {
                target: this,
            });
        }
    }

    createRootElement(){
        const element = document.createElement('div');
        element.classList.add(this.classNames.root);
        element.classList.add(this.classNames.type);
        return element;
    }

    toogleActive = () => {
        this.isActive = !this.isActive;
    };

    delegateEvents(){
        this.rootElement.addEventListener('dblclick', this.toogleActive);
        this.mediator.subscribe(ShapeView.onActive, (event, data) => {
            if(data.target !== this){
                this.isActive = false;
            }
        });
        return this;
    }

    render(){
        return this.delegateEvents();
    }

}

