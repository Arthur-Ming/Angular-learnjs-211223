import {Pipe, PipeTransform} from '@angular/core';
import {Product} from '../products/product.interface';

@Pipe({
    name: 'productsFilter',
})
export class ProductsFilterPipe implements PipeTransform {
    transform(products: Product[], name: string): Product[] {
        return products.filter(product => product.name.includes(name));
    }
}
