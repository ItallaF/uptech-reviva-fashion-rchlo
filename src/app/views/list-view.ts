import { Control__Stock } from "../controls/control-stock.js";
import { product__stock } from "../models/monta-estoque.js";
import { View } from "./view.js";



export class List__LaunchView extends View<Control__Stock>{

    template(model: Control__Stock, isSecondarylist?: boolean): string {
        return `
            <div>
            h
                </div>
        `;
    }
}