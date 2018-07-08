import _ from 'lodash';
import './style.css';
import Mediator from "./utils/Mediator";
import EditorView from "./views";

const mediator = new Mediator();

const editorView = window.EditorView = new EditorView(document.querySelector('.editor')).render();




