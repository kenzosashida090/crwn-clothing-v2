
import "./button-style.scss"
const Button_Type_Class = {
    google : 'google-sign-in',
    inverted : 'inverted',
    github:'github-sign-in',
    facebook:'facebook-sign-in'

} 
const Button =({children,buttonType, ...otherProps}) =>{
    return <button className={ `button-container ${Button_Type_Class[buttonType]}`} {...otherProps}>{children}</button>
    

}
export default Button