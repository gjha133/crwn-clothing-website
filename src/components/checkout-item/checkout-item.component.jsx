import { useSelector, useDispatch } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { selectCartItems } from '../../store/cart/cart.selector'

import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action'

import { 
    Arrow, 
    BaseSpan, 
    CheckoutItemContainer, 
    ImageContainer, 
    Quantity, 
    RemoveButton,
    Value
} from './checkout-item.styles';


const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()

    const addItemHandler = () => 
        dispatch(addItemToCart(cartItems, cartItem))
    const removeItemHandler = () => 
        dispatch(removeItemFromCart(cartItems, cartItem))
    const clearItemHandler = () => 
        dispatch(clearItemFromCart(cartItems, cartItem))

    
    return (
        <CheckoutItemContainer>
            <ImageContainer>
            <LazyLoadImage
                alt={`${name}`}
                effect="blur"
                src={imageUrl} 
            />
            </ImageContainer>
            <BaseSpan>
                {name}
            </BaseSpan>
            <Quantity>
                <Arrow onClick={removeItemHandler}>
                    &#10094;
                </Arrow>
                <Value>
                    {quantity}
                </Value>
                <Arrow onClick={addItemHandler}>
                    &#10095;
                </Arrow>
            </Quantity>
            <BaseSpan>
                ${price}
            </BaseSpan>
            <RemoveButton onClick={clearItemHandler}>
                &#10005;
            </RemoveButton>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;