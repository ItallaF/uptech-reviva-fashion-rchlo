import { List__LaunchView } from '../views/list-view.js';
import { Control__Stock } from './control-stock';
export class Control__Index {
    constructor() {
        this.control__stock = new Control__Stock;
        this.list__view = new List__LaunchView('.produto__lista__conteudo');
        this.list__view.update(this.control__stock);
    }
}
