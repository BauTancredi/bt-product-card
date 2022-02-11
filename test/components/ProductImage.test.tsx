import * as React from 'react';
import renderer from 'react-test-renderer';
import ProductCard, { ProductImage } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  it('displays the component with the custom image', () => {
    const wrapper = renderer.create(
      <ProductImage img="https://test.jpg" className="custom-class" />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('displays the component with the product image from context', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
