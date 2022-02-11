# bt-product-card

Este es un paquete de pruebas de despliegue en NPM

### Bautista Tancredi

## Ejemplo

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'bt-product-card'
```

```
<ProductCard
    product={product}
    initialValues={{ count: 4, maxCount: 10 }}
>
    {
        ({ reset, count, increaseBy, isMaxCountReached }) => (
            <>
            <ProductImage />
            <ProductTitle/>
            <ProductButtons />
            </>
        )
    }
</ProductCard>
```
